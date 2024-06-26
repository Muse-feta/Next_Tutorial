import mysql, { Connection } from "mysql2/promise";
import fs from "fs";
import path from "path";



const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME, // Your MySQL database name
};

export async function connect(): Promise<Connection> {
  try {
    const connection = await mysql.createConnection(dbConfig);
    await createTables(connection);
    return connection;
  } catch (error) {
    console.error("Error connecting to MySQL:", error);
    throw new Error("Could not connect to database");
  }
}

async function createTables(connection: Connection): Promise<void> {
  try {
    
    const schemaPath = path.join(__dirname, "../schema/schema.sql");
    const sql = fs.readFileSync(schemaPath, "utf8");
    await connection.query(sql);
    console.log("Tables created successfully");
  } catch (error) {
    console.error("Error creating tables:", error);
    throw new Error("Could not create tables");
  }
}

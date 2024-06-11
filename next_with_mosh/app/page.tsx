
import Link from "next/link";
import ProdouctCard from "./components/ProdouctCard";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/users">Users</Link>
      <ProdouctCard/>
    </main>
  );
}

import { json } from "stream/consumers"
import { comments } from "./data"

export const GET = async () => {
    return  Response.json(comments)
}

export const POST = async (req: Request) => {
    const comment = await req.json()
    const newComments = {
        id: comments.length + 1,
        text: comment.text
    }
    comments.push(newComments)
    return new Response(JSON.stringify(newComments), {
        headers: {
            "Content-Type": "application/json"
        },
        status: 201,
    })
}
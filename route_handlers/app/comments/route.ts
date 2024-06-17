import { json } from "stream/consumers"
import { comments } from "./data"
import { NextRequest } from "next/server"
import { request } from "http"

export const GET = async (req: NextRequest) => {
    const searchParams = req.nextUrl.searchParams
    const query = searchParams.get('query')
    const filterComments = query ? comments.filter((data) => data.text.includes(query)) : comments
    return  Response.json(filterComments)
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
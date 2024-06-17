import { redirect } from "next/navigation"
import { comments } from "../data"

export const GET = async (req: Request, {params}: {params: {id: string}}) => {
    if(parseInt(params.id) > comments.length){
        redirect('/comments')
    }
    const comment = comments.find((data) => data.id === Number(params.id))
    return Response.json(comment)
}



export const PATCH = async (req: Request, {params}: {params: {id: string}}) => {
    const body = await req.json();
    const { text } = body;
    const index = comments.findIndex((data) => data.id === Number(params.id))
    comments[index].text = text
    return Response.json(comments[index])
}

export const DELETE = (req: Request,{params}: {params: {id: string}}) => {
    const index = comments.findIndex((data) => data.id === Number(params.id))
    const deletedComment = comments.splice(index, 1)
    return Response.json(deletedComment)
}
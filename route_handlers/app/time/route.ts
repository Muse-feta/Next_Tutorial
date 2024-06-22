export const dynamic = "force-dynamic"  // used to force dynamic data fetching
export const GET = async () => {
    return Response.json({time: new Date().toLocaleTimeString()})
}

function page({params}:{params: {slug:string[]}}) {
  return (
    <div>Docs Detail {params.slug[0]}</div>
  )
}

export default page
import { Metadata } from "next"
type props = {
  params: {id: number}
}

export const generateMetadata = ({params}:props):Metadata=>{
    return{
      title: `product ${params.id}`
    }
}
const page = ({params}: props) => {
  return (
    <div>
        product details {params.id}
    </div>
  )
}

export default page
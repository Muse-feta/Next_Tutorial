import React from 'react'

interface params {
    params: {
        slug: string[];
    }
}

const page = ({params}: params) => {
 
    if(params.slug.length === 2){
        return <h1>viewing {params.slug[0]} and {params.slug[1]}</h1>
    }else if(params.slug.length === 1){
        return <h1>viewing {params.slug[0]}</h1>
    }else{
        <h1>Not found</h1>
    }
  
}

export default page
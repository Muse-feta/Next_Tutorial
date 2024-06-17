import React from 'react'

const layout = ({children,
     photoDetail
    }:{
    children: React.ReactNode;
    photoDetail: React.ReactNode
}) => {
  return (
    <>
      <div>{children}</div>
      <div>{photoDetail}</div>
    </>
  );
}

export default layout
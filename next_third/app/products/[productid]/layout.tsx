import React from 'react'

const layout = ({children}:{children: React.ReactNode}) => {
  return (
    <html lang="en">
      <body className=''>
        <header>
          <h1>Feature of products</h1>
        </header>
        {children}</body>
    </html>
  );
}

export default layout
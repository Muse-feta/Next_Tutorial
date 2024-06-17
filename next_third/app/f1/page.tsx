import Link from 'next/link'
import React from 'react'

const Folder1 = () => {
  return (
    <div>
      <h1>Folder1</h1><br />
      <Link href="/f1/f2">F2</Link>
    </div>
  );
}

export default Folder1
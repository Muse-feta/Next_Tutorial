import React from 'react'

const loading = () => {
  return (
    <div className=" flex justify-center items-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-50"></div>
    </div>
  );
}

export default loading
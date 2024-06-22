import React from 'react'
import { serverSideFunction } from '../utils/server-utils';
import SimpleSlider from '../components/slider';

const ServerSide = () => {
      const serverCode = serverSideFunction();
      console.log('server route');
  return (
    <>
      <div>ServerSide</div>
      <h1>{serverCode}</h1>
      <SimpleSlider/>
    </>
  );
}

export default ServerSide
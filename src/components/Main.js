import React from 'react';
import Post from './Post';

function Main() {
  return (
    <div>
      <Post title={"First post"} picture={"Cat"}/>
      <Post title={"Second post"} picture={"Dog"}/>
      <Post title={"Third post"}/>
    </div>
  )
}

export default Main
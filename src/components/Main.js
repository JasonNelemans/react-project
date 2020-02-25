import React from 'react';
import Post from './Post';

function Main() {
  return (
    <div>
      <Post 
        title={"First post"} 
        picture={"Cat"}
        likes={3}
      />
      <Post 
        title={"Second post"} 
        picture={"Dog"}
        likes={6}
      />
      <Post 
        title={"Third post"}
        likes={0}
      />
    </div>
  )
}

export default Main
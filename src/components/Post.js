import React, {useState} from 'react';

export default function Post(props) {
  const [value, setValue] = useState(0)
  
  let likeCounter = value
  
  return (
    <div>
      <h1>{props.title}</h1>
      <div className="pf-picture">{props.picture}</div>
      <div className="name">Name</div>
      <div className="post-content">Post content</div>
  <div className="number-of-likes">This post has {likeCounter} likes</div>
      <button>Like</button>
    </div>
  )
}
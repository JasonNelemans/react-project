import React from 'react';

export default function Post(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <div className="pf-picture">{props.picture}</div>
      <div className="name">Name</div>
      <div className="post-content">Post content</div>
    </div>
  )
}
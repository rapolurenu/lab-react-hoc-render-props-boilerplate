// LikePost.jsx
import React from 'react';
import LikeCounter from './LikeCounter';

function LikePost() {
  return (
    <LikeCounter>
      {(likeCount, handleLike) => (
        <div>
          <button onClick={handleLike}>Like Post {likeCount}</button>
        </div>
      )}
    </LikeCounter>
  );
}

export default LikePost;

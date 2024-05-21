import React from 'react';
import withLikeCount from './withLikeCount';

function LikePost({ likeCount, handleLike }) {
  return (
    <div>
      <button onClick={handleLike}>Like Post {likeCount}</button>
    </div>
  );
}

export default withLikeCount(LikePost);

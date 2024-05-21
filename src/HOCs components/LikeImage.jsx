// LikeImage.jsx
import React from 'react';
import withLikeCount from './withLikeCount';

function LikeImage({ likeCount, handleLike }) {
  return (
    <div>
      <button onClick={handleLike}>Like Image {likeCount}</button>
    </div>
  );
}

export default withLikeCount(LikeImage);

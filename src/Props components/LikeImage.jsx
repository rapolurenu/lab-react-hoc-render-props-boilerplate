
import React from 'react';
import LikeCounter from './LikeCounter';

function LikeImage() {
  return (
    <LikeCounter>
      {(likeCount, handleLike) => (
        <div>
          <button onClick={handleLike}>Like Image {likeCount}</button>
        </div>
      )}
    </LikeCounter>
  );
}

export default LikeImage;

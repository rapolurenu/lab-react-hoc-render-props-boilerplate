import React from 'react';
import './App.css';
import LikeImage from './Props components/LikeImage';
import LikePost from './Props components/LikePost';
//import LikeImage from './HOCs components/LikeImage';
//import LikePost from './HOCs components/LikePost';
function App() {
  return (
    <div>
      <h1>Some Blog</h1>
      <div className='buttons'>
        <LikePost />
        <LikeImage />
      </div>
    </div>
  );
}

export default App;

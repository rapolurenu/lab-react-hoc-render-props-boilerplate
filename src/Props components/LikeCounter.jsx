// LikeCounter.js
import React, { Component } from 'react';

class LikeCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likeCount: 0,
    };
  }

  handleLike = () => {
    this.setState((prevState) => ({
      likeCount: prevState.likeCount + 1,
    }));
  };

  render() {
    const { likeCount } = this.state;
    const { children } = this.props;
    return children(likeCount, this.handleLike);
  }
}

export default LikeCounter;

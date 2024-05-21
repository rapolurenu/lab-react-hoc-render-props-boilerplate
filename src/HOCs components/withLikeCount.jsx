
import React, { Component } from 'react';

const withLikeCount = (WrappedComponent) => {
  return class WithLikeCount extends Component {
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
      return <WrappedComponent {...this.props} likeCount={this.state.likeCount} handleLike={this.handleLike} />;
    }
  };
};

export default withLikeCount;

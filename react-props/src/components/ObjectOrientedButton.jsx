import React from 'react';

class ObjectOrientedButton extends React.Component {
  render() {
    const message = this.props.message;
    return <button>{message}</button>;
  }
}

export default ObjectOrientedButton;

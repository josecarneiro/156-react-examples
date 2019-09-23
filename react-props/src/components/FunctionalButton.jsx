import React from 'react';

// function FunctionalButton() {
//   return <button>I'm a functional button</button>;
// }

// const FunctionalButton = ({ message }) => {
//   return <button>{message}</button>;
// };

const FunctionalButton = props => {
  const message = props.message;
  return <button>{message}</button>;
};

export default FunctionalButton;

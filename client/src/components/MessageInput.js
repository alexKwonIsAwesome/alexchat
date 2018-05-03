import React from 'react';
import styled from 'styled-components';

class MessageInput extends React.Component {
  render() {
    return (
      <Wrapper>
        <textarea
          placeholder='Write a message'
        />
        <button>Send</button>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  height: 8rem;
  border-top: 1px solid #ddd;
  display: flex;
  align-items: center;
  padding: 2rem;

  textarea {
    border: none;
    font-size: 1.6rem;
    resize: none;
    outline: none;
    height: auto;
    width: 100%;
    height: 2rem;
  }

  button {
    width: 20rem;
    height: 5rem;
    background-color: #37ca77;
    border: 1px solid #37ca77;
    border-radius: 0.5rem;
    font-size: 1.6rem;
    font-weight: bold;
    color: #fff;
  }
`;

export default MessageInput;
import React from 'react';
import styled from 'styled-components';

import MessageInput from './../../components/MessageInput';
import Content from './../../components/Content';

class Chat extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <span>Alexchat</span>
        </Header>
        <Content />
        <MessageInput />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  height: 8rem;
  font-size: 2rem;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Chat;
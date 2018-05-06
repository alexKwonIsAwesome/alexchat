import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import openSocket from 'socket.io-client';

import MessageInput from './../../components/MessageInput';
import Content from './../../components/Content';

const alexImage = 'https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-1/p80x80/16473810_1341861682536945_6515544790253936304_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeHflGpth5qr2cf_MkDQbs4YmjQEIKsg4rDwtZNl-fL0HWV6BUtVAvC7j2SechV9p87SsZ6FTXced4OEfuXnXydI6sfXA7uZsyvPNZxk2TVC8w&oh=13225579e53c8a153300327cd074dd74&oe=5B5A2AFB';
const tzuyuImage = 'https://data.whicdn.com/images/208491227/superthumb.jpg';

class Chat extends React.Component {

  state = {
    messages: [],
  }

  componentDidMount() {
    const socket = openSocket('http://localhost:3001');
    socket.on('NEW_MESSAGE', this.handleNewMessage);
    axios({
      url: 'http://localhost:3001/messages',
      method: 'get',
      params: {
        limit: 50,
      }
    }).then((response) => {
      const { messages } = response.data;
      this.setState({ messages });
    });
  }

  handleNewMessage = (message) => {
    const { messages } = this.state;
    this.setState({
      messages: [ ...messages, message],
    });
  }

  render() {
    const { messages } = this.state;
    return (
      <Wrapper>
        <Header>
          <span>Alexchat</span>
        </Header>
        <Content
          messages={messages}
        />
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
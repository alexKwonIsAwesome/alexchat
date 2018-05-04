import React from 'react';
import styled from 'styled-components';

import MessageInput from './../../components/MessageInput';
import Content from './../../components/Content';

const alexImage = 'https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-1/p80x80/16473810_1341861682536945_6515544790253936304_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeHflGpth5qr2cf_MkDQbs4YmjQEIKsg4rDwtZNl-fL0HWV6BUtVAvC7j2SechV9p87SsZ6FTXced4OEfuXnXydI6sfXA7uZsyvPNZxk2TVC8w&oh=13225579e53c8a153300327cd074dd74&oe=5B5A2AFB';
const tzuyuImage = 'https://data.whicdn.com/images/208491227/superthumb.jpg';

const demoMessages = [
  {
    username: 'Alex Kwon',
    message: 'Yeah, i know we have a documents area here in snug, but can\'t quite find where they are located. Did you upload them?',
    date: new Date(),
    image: alexImage,
  },
  {
    username: 'Alex Kwon',
    message: 'Hello!',
    date: new Date(),
    image: alexImage,
  },
  {
    username: 'Alex Kwon',
    message: 'How is your day?',
    date: new Date(),
    image: alexImage,
  },
  {
    username: 'Tzuyu Chou',
    message: 'Lovely!',
    date: new Date(),
    image: tzuyuImage,
  },
  {
    username: 'Alex Kwon',
    message: 'Today is my birthday, but as I don\'t have any friends, there are no one celebrating it. I hope i have a friends.',
    date: new Date(),
    image: alexImage,
  },
  {
    username: 'Alex Kwon',
    message: 'Do you hear the people sing? No. I dont fucking hear what people are singing about.',
    date: new Date(),
    image: alexImage,
  },
  {
    username: 'Alex Kwon',
    message: 'What did you say?',
    date: new Date(),
    image: alexImage,
  },
  {
    username: 'Alex Kwon',
    message: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    date: new Date(),
    image: alexImage,
  },
  {
    username: 'Alex Kwon',
    message: 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
    date: new Date(),
    image: alexImage,
  },
  {
    username: 'Tzuyu Chou',
    message: 'I\'m the prettiest among the Twice members!',
    date: new Date(),
    image: tzuyuImage,
  },
  {
    username: 'Tzuyu Chou',
    message: 'Chou Tzu-yu (born June 14, 1999), professionally known by the mononym Tzuyu, is a Taiwanese singer based in South Korea and a member of the K-pop girl group Twice, under JYP Entertainment.',
    date: new Date(),
    image: tzuyuImage,
  },
  {
    username: 'Alex Kwon',
    message: 'Yeah! Tzuyu is here!',
    date: new Date(),
    image: alexImage,
  }
];

class Chat extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <span>Alexchat</span>
        </Header>
        <Content
          messages={demoMessages}
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
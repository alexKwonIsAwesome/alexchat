import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function MessageRow ({ message }) {
  return (
    <Wrapper>
      <Profile>
        <img src={'https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-1/p80x80/16473810_1341861682536945_6515544790253936304_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeHflGpth5qr2cf_MkDQbs4YmjQEIKsg4rDwtZNl-fL0HWV6BUtVAvC7j2SechV9p87SsZ6FTXced4OEfuXnXydI6sfXA7uZsyvPNZxk2TVC8w&oh=13225579e53c8a153300327cd074dd74&oe=5B5A2AFB'} />
      </Profile>
      <Message>
        <Info>
          <span>Alex Kwon</span>
          <span>1:14 pm</span>
        </Info>
        <span>{message}</span>
      </Message>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-bottom: 1rem;
`;

const Profile = styled.div`
  display: inline-block;

  img {
    display: inline-block;
    border-radius: 100%;
    width: 4rem;
    height: 4rem;
  }
`;

const Message = styled.div`
  display: inline-block;
  margin-left: 2rem;
  margin-right: 11rem;
  background-color: #eff0f0;
  padding: 2rem;
  border-radius: 20px;
  border-bottom-left-radius: 0px;
  min-width: 20rem;
  max-width: 70rem;  
  span {
    font-size: 1.4rem;
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  span {
    color: #686e72;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

MessageRow.propTypes = {
  message: PropTypes.string.isRequired
};

export default MessageRow;
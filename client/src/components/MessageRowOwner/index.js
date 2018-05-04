import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function MessageRowOwner ({ message }) {
  return (
    <Wrapper>
      <Message>
        <Info>
          <span>Alex Kwon</span>
          <span>1:14 pm</span>
        </Info>
        <span>{message}</span>
      </Message>
      <Profile>
        <img src={'https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-1/p80x80/16473810_1341861682536945_6515544790253936304_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeHflGpth5qr2cf_MkDQbs4YmjQEIKsg4rDwtZNl-fL0HWV6BUtVAvC7j2SechV9p87SsZ6FTXced4OEfuXnXydI6sfXA7uZsyvPNZxk2TVC8w&oh=13225579e53c8a153300327cd074dd74&oe=5B5A2AFB'} />
      </Profile>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
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
  margin-left: 11rem;
  margin-right: 2rem;
  background-color: #579ffb;
  padding: 2rem;
  border-radius: 20px;
  border-bottom-right-radius: 0px;
  min-width: 20rem;
  max-width: 70rem;
  span {
    font-size: 1.4rem;
    color: #fff;
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  span {
    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

MessageRowOwner.propTypes = {
  message: PropTypes.string.isRequired
};

export default MessageRowOwner;
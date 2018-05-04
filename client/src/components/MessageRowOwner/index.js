import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment';

function MessageRowOwner ({ username, message, date, image }) {
  return (
    <Wrapper>
      <Message>
        <Info>
          <span>{username}</span>
          <span>{moment(date).format('MM/DD/YYYY HH:mm:ss')}</span>
        </Info>
        <span>{message}</span>
      </Message>
      <Profile>
        <img src={image} />
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
  username: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date),
  image: PropTypes.string.isRequired,
};

export default MessageRowOwner;
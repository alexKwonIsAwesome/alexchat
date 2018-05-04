import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment';

function MessageRow ({ username, message, date, image }) {
  return (
    <Wrapper>
      <Profile>
        <img src={image} />
      </Profile>
      <Message>
        <Info>
          <span>{username}</span>
          <span>{moment(date).format('MM/DD/YYYY HH:mm:ss')}</span>
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
  username: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date),
  image: PropTypes.string.isRequired,
};

export default MessageRow;
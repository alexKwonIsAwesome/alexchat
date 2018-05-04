import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MessageRow from './../../components/MessageRow';
import MessageRowOwner from './../../components/MessageRowOwner';

const myUserName = 'Tzuyu Chou';

class Content extends React.Component {
  componentDidMount() {
    if (this.wrapper) {
      const height = this.wrapper.clientHeight;
      this.wrapper.scrollTo(0, height);
    }
  }

  renderMessages() {
    const { messages } = this.props;
    const messageRow = messages.map((item, index) => {
      const { username, message, date, image } = item;
      
      if (username === myUserName) {
        return (
          <MessageRowOwner
            key={index}
            username={username}
            message={message}
            date={date}
            image={image}
          />
        );
      }
      return (
        <MessageRow
          key={index}
          username={username}
          message={message}
          date={date}
          image={image}
        />
      );
    });

    return (
      <Inner innerRef={(node) => { this.wrapper = node; }} >
        {messageRow}
      </Inner>
    );
  }

  render() {
    return (
      <Wrapper>
        {this.renderMessages()}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  flex: 1 auto;
  display: flex;
`;

const Inner = styled.div`
  flex: 1;
  padding: 0rem 10rem;
  overflow-y: scroll;
`;

Content.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default Content;
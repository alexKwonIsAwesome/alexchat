import React from 'react';
import styled from 'styled-components';
import MessageRow from './../../components/MessageRow';
import MessageRowOwner from './../../components/MessageRowOwner';

class Content extends React.Component {
  componentDidMount() {
    if (this.wrapper) {
      const height = this.wrapper.clientHeight;
      this.wrapper.scrollTo(0, height);
    }
  }

  render() {
    return (
      <Wrapper>
        <Inner innerRef={(node) => { this.wrapper = node; }} >
          <MessageRow
            message={'Yeah, i know we have a documents area here in snug, but can\'t quite find where they are located. Did you upload them?'}
          />
          <MessageRow
            message={'Hello!'}
          />
          <MessageRow
            message={'How is your day?'}
          />
          <MessageRow
            message={'Today is my birthday, but as I don\'t have any friends, there are no one celebrating it. I hope i have a friends.'}
          />
          <MessageRow
            message={'Do you hear the people sing? No. I dont fucking hear what people are singing about.'}
          />
          <MessageRowOwner
            message={'What did you say?'}
          />
          <MessageRowOwner
            message={'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'}
          />
          <MessageRow
            message={'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.'}
          />
        </Inner>
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


export default Content;
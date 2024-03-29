import React from 'react';
import styled from 'styled-components';
import Store from '../../store';

const Container = styled.header`
  position: relative;
  padding: 50px;
  width: 100%;
  box-sizing: border-box;
  @media (max-width: 600px) {
    padding: 15px;
  }
`;

const Wrapper = styled.div`
  border-radius: 5px;
  padding: 30px 40px 20px;
  background: #ffad01;
  color: #fff;
  display: flex;
  justify-content: space-between;
  ion-icon {
    color: white;
    padding-right: 10px;
    font-size: 20px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 15px;
  }
`;

const Location = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Contact = styled.div`
  display: flex;
  justify-content: flex-flex-end;
  align-items: center;
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: blue;
    ion-icon {
      color: blue;
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  & > * {
    margin-right: 20px;
  }
`;

export const Header = ({ className }) => {
  return (
    <Container>
      <Wrapper className={className}>
        <Location>
          <ion-icon name="location"></ion-icon>
          {Store.location}
        </Location>
        <Buttons>
        <Contact>
            <Link href="https://blog.eugen-bash.com" target="_blank">
              <ion-icon name="book"></ion-icon>
              Blog
            </Link>
          </Contact>
          <Contact>
            <Link href="https://board.eugen-bash.com" target="_blank">
              <ion-icon name="easel"></ion-icon>
              Board
            </Link>
          </Contact>
          <Contact>
            <ion-icon name="chatbox"></ion-icon>
            {Store.mail().value}
          </Contact>
        </Buttons>
      </Wrapper>
    </Container>
  );
};

import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 80%;
  border: 1px solid #aeb2f5;
  text-align: center;
  padding: 15px 10px;
  text-shadow: 0px 1px 4px #f79dc1;
  box-shadow: 1px 1px 3px #aeb2f5;
  font: 200 0.9rem 'Roboto', sans-serif;
  color: rgb(255, 255, 255);
  margin: 30px;
  line-height: 18px;
  letter-spacing: 1px;

  a {
    color: #aeb2f5;
    text-decoration: underline;
    font-style: italic;
    text-shadow: none;

    :visited {
      color: rgb(231, 234, 255, 0.9);
      text-decoration: underline;
      font-style: italic;
    }
  }
`;

function ErrorMessageRecs() {
  return (
    <Container>
      <p>
        To see matching shows based on your
        <br /> viewing profile please fill in your
        <br />
        watched or to watch list first:
      </p>
      <p>
        <a href="/lists">To your lists</a>
      </p>
    </Container>
  );
}

export default ErrorMessageRecs;

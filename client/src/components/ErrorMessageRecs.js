import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 75%;
  border: 1px solid #aeb2f5;
  text-align: center;
  padding: 15px 10px;
  box-shadow: 1px 1px 3px #aeb2f5;
  font: 300 0.9rem 'Roboto', sans-serif;
  color: rgba(174, 178, 245, 1);
  margin: 12px 30px;
  line-height: 20px;

  a {
    color: #aeb2f5;
    text-decoration: underline;
    font-style: italic;
    text-shadow: none;

    :visited {
      color: rgb(175, 178, 198);
      text-decoration: underline;
      font-style: italic;
    }
  }
`;

function ErrorMessageRecs() {
  return (
    <Container>
      <p>
        To see matching shows based on your viewing profile please fill in your
        watched or to watch list first:
      </p>
      <p>
        <a href="/lists">To your lists</a>
      </p>
    </Container>
  );
}

export default ErrorMessageRecs;

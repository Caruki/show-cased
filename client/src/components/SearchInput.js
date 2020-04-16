import React from 'react';
import styled from '@emotion/styled';
import InputField from './InputField';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  padding: 10px;
  border: 2px solid #961f56;
  border-radius: 11px;
  background-color: rgba(30, 25, 79, 0.8);
`;

const Input = styled(InputField)`
  font-size: 0.9rem;
  border: 1px #961f56;
  border-style: hidden hidden solid hidden;
`;

function SearchInput() {
  return (
    <Container>
      <Input type="search" placeholder="Search for a tv show..." />
    </Container>
  );
}

export default SearchInput;

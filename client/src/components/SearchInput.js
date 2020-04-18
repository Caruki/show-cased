import React from 'react';
import styled from '@emotion/styled';
import InputField from './InputField';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 18px 10px 10px 10px;
  border: 2px solid rgba(150, 31, 86, 0.8);
  border-radius: 11px;
  background-color: rgba(30, 25, 79, 0.8);

  & :focus-within {
    background-color: rgba(80, 68, 129, 0.5);
    border: 2px solid rgba(150, 31, 86, 1);
  }
`;

const Input = styled(InputField)`
  font-size: 0.9rem;
  border: 1px solid rgba(208, 88, 136, 0.8);
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

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import InputField from './InputField';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12px 10px;
  padding: 22px 15px 15px 15px;
  border: 2px solid rgba(150, 31, 86, 0.7);
  border-radius: 11px;
  background-color: rgba(30, 25, 79, 0.8);

  & :focus-within {
    outline-width: 0px;
    padding: 5px;
    margin: 0px 0px 7px 0px;
    background-color: rgba(80, 68, 180, 0.3);
    border: 1px solid rgba(150, 31, 86, 0.8);
    ::placeholder {
      color: transparent;
    }
  }
`;

const Input = styled(InputField)`
  font-size: 0.8rem;
  font-weight: 300;
  letter-spacing: 1px;
  margin: 0px;
  border: 1px solid rgba(147, 49, 102, 0.8);
  border-style: hidden hidden solid hidden;


  }
`;

function SearchInput({ value, onChange }) {
  return (
    <Container>
      <Input
        type="search"
        value={value}
        onChange={onChange}
        placeholder="Search for a tv show..."
      />
      {/* {searchResults.map((searchResult) => (
        <div key={searchResult}>{searchResult}</div>
      ))} */}
    </Container>
  );
}

SearchInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  searchResults: PropTypes.array,
};

export default SearchInput;

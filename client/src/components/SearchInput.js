import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
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
`;

const ResultsContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  border: 2px solid #d0588865;
  background-color: #1e194f;
  padding: 10px;
`;

const ResultItem = styled.div`
  text-align: left;
  width: 100%;
  border: 1px solid #d0588865;
  border-style: hidden hidden solid hidden;
  font: 300 0.8rem 'Roboto', sans-serif;
  color: #aeb2f5;
  padding: 0px 5px;
  margin: 8px 0px;
  font-style: ${(props) => (props.hover ? 'bold' : null)};
  background-color: ${(props) =>
    props.hover ? 'lighten(#1e194f, 50%)' : null};
`;

const Searching = styled.span`
  display: block;
  color: #aeb2f5;
  font: 300 0.7rem 'Roboto', sans-serif;
  background-color: #1e194f;
  border: 1px solid #d0588865;
`;

const Error = styled.span`
  display: block;
  color: #d05888;
  font: 300 0.7rem 'Roboto', sans-serif;
  background-color: #1e194f;
  border: 1px solid #d0588865;
`;

function SearchInput({
  value,
  searchResults,
  onSelect,
  onChange,
  selectedInputs,
  name,
  focused,
  error,
  isSearching,
}) {
  return (
    <>
      <Container>
        <Input
          value={value}
          focused={focused}
          name={name}
          type="search"
          onChange={onChange}
          placeholder="Search for a tv show..."
        />
      </Container>
      {focused === name && isSearching && !selectedInputs.includes(name) && (
        <Searching>Searching ...</Searching>
      )}
      {focused === name && error && !selectedInputs.includes(name) && (
        <Error>{error.message}</Error>
      )}
      {focused === name &&
        searchResults.length !== 0 &&
        !selectedInputs.includes(name) && (
          <ResultsContainer>
            {searchResults.map((searchResult) => (
              <ResultItem
                key={searchResult.id}
                value={searchResult.id}
                onClick={() => onSelect(searchResult, name)}
              >
                {searchResult.title} ({searchResult.airYear})
              </ResultItem>
            ))}
          </ResultsContainer>
        )}
    </>
  );
}

SearchInput.propTypes = {
  value: PropTypes.string,
  searchResults: PropTypes.array,
  error: PropTypes.any,
  isSearching: PropTypes.bool,
  onSelect: PropTypes.func,
  onChange: PropTypes.func,
  selectedInputs: PropTypes.array,
  name: PropTypes.string,
  focused: PropTypes.string,
};

export default SearchInput;

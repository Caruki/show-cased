import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import InputField from './InputField';
import useThrottle from '../hooks/useThrottle';
import { searchShows } from '../api/shows';
import CloseIcon from '../assets/icons/CloseIcon';

const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(14, 5, 46, 0.2);
  backdrop-filter: blur(4px);
  z-index: 10;
`;

const SearchLayoutContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  margin: auto;
  max-width: 730px;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 20%; */
  width: 80%;
  padding: 22px 15px 15px 15px;
  border: 2px solid rgba(150, 31, 86, 1);
  border-radius: 11px;
  background-color: rgba(30, 25, 79, 1);

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
  overflow: auto;
  width: 70%;
  max-height: 350px;
  margin-top: 10px;
`;

const ItemLabel = styled.label`
  cursor: pointer;
  width: 100%;
  :hover {
    background-color: rgb(80, 68, 180, 0.3);
    font-style: bold;
  }
`;

const ResultItem = styled.div`
  text-align: center;
  width: 100%;
  border: 1px solid #d0588865;
  border-style: hidden hidden solid hidden;
  font: 300 0.8rem 'Roboto', sans-serif;
  color: #aeb2f5;
  margin: 8px 0px;
  padding: 10px;
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

const CloseSearch = styled.button`
  margin: 20% 0 -8% 75%;
  @media (min-width: 700px) {
    margin: 20% 0 -5% 75%;
  }
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;
`;

function SearchInput({ isOpen, onSelect, toggleSearchActive }) {
  const [inputValue, setInputValue] = useState('');
  const throttledValue = useThrottle(inputValue, 400);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (throttledValue) {
      setIsSearching(true);
      searchShows(throttledValue)
        .then((results) => {
          setIsSearching(false);
          setSearchResults(results);
        })
        .catch((error) => setError(error.message));
    } else {
      setIsSearching(false);
      setSearchResults([]);
    }
  }, [throttledValue]);

  return (
    <>
      {isOpen ? (
        <Background>
          <SearchLayoutContainer>
            <CloseSearch onClick={() => toggleSearchActive()}>
              <CloseIcon size="big" />
            </CloseSearch>
            <Container>
              <Input
                autoFocus={true}
                autoComplete="off"
                value={inputValue}
                type="search"
                onChange={(event) => setInputValue(event.target.value)}
                placeholder={'Search for a tv show...'}
                onFocus={() => setShowResults(true)}
              />
            </Container>
            {showResults && isSearching && <Searching>Searching ...</Searching>}
            {showResults && error && <Error>{error.message}</Error>}
            {showResults && searchResults.length !== 0 && (
              <ResultsContainer>
                {searchResults.map((searchResult) => (
                  <ItemLabel
                    key={searchResult.id}
                    onClick={() => {
                      setInputValue('');
                      setShowResults(false);
                      onSelect(searchResult);
                    }}
                    onBlur={() => toggleSearchActive()}
                  >
                    <ResultItem value={searchResult.id}>
                      {searchResult.title} ({searchResult.airYear})
                    </ResultItem>
                  </ItemLabel>
                ))}
              </ResultsContainer>
            )}
          </SearchLayoutContainer>
        </Background>
      ) : null}
    </>
  );
}

SearchInput.propTypes = {
  isOpen: PropTypes.bool,
  onSelect: PropTypes.func,
  toggleSearchActive: PropTypes.func,
};

export default SearchInput;

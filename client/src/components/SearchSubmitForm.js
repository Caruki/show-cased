import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import SearchInput from './SearchInput';
import SubmitButton from './SubmitButton';
import useDebounce from '../hooks/useDebounce';
import { searchShows } from '../api/shows';
import { addMultipleToWatchedList, addMultipleToWatchList } from '../api/lists';
import useAuth from '../contexts/auth/useAuth';
import refetchQueries from '../utils/refetchQueries';
import { useMutation } from 'react-query';

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: auto;
  height: 60%;
  margin: 30px 10px;

  & > * {
    flex-basis: 100%;
    margin: 10px 10px;
  }
`;

const IntroductionText = styled.div`
  text-align: center;
  font: 300 0.9rem 'Roboto', sans-serif;
  color: #aeb2f5;
  line-height: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  & > * {
    margin: 10px;
    width: 90%;
    border: 1px solid rgba(150, 31, 86, 0.8);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  & > * {
    height: fit-content;
  }
`;

function SearchSubmitForm({ tab, textvariation }) {
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState('');
  const [selectedInputs, setSelectedInputs] = useState([]);
  const [selectedShowsInputs, setSelectedShowsInputs] = useState({});
  const [selectedShows, setSelectedShows] = useState({});
  const [focused, setFocused] = useState('');
  const { authenticatedUser } = useAuth();
  const userId = authenticatedUser.userId;

  const [addMultipleToWatch] = useMutation(addMultipleToWatchList, {
    onSuccess: () => {
      refetchQueries();
    },
  });
  const [addMultipleToWatched] = useMutation(addMultipleToWatchedList, {
    onSuccess: () => {
      refetchQueries();
    },
  });

  const debouncedValue = useDebounce(selectedShowsInputs[focused], 400);

  useEffect(() => {
    if (debouncedValue) {
      setIsSearching(true);
      searchShows(debouncedValue)
        .then((results) => {
          setIsSearching(false);
          setSearchResults(results);
        })
        .catch((error) => setError(error.message));
    } else {
      setIsSearching(false);
      setSearchResults([]);
    }
  }, [debouncedValue]);

  async function handleSelect(searchResult, name) {
    setSelectedShowsInputs({
      ...selectedShowsInputs,
      [name]: [`${searchResult.title} (${searchResult.airYear})`],
    });
    setSelectedShows({
      ...selectedShows,
      [name]: searchResult.id,
    });
    setSelectedInputs([...selectedInputs, name]);
    setSearchResults([]);
  }

  function handleChange(event) {
    const value = event.target.value;
    setFocused(event.target.name);
    if (value === '') {
      setSelectedShowsInputs({
        ...selectedShowsInputs,
        [event.target.name]: null,
      });
      setSelectedShows({
        ...selectedShows,
        [event.target.name]: null,
      });
      const index = selectedInputs.indexOf(event.target.name);
      if (index > -1) {
        selectedInputs.splice(index, 1);
        setSelectedInputs(selectedInputs);
      }
    }
    setSelectedShowsInputs({
      ...selectedShowsInputs,
      [event.target.name]: value,
    });
  }

  async function handleSubmit() {
    const selection = Object.values(selectedShows);
    if (tab === 'towatch') {
      await addMultipleToWatch({ userId, selection });
    } else if (tab === 'watched') {
      await addMultipleToWatched({ userId, selection });
    }
  }

  const searchInputs = ['show1', 'show2', 'show3', 'show4'];

  return (
    <Container>
      <IntroductionText>
        {`To see recommendations based on your personal viewing profile please
        choose up to four shows you ${textvariation}`}
      </IntroductionText>
      <InputContainer>
        {searchInputs.map((searchInput) => (
          <SearchInput
            value={selectedShowsInputs[searchInput]}
            key={searchInput}
            focused={focused}
            name={searchInput}
            searchResults={searchResults}
            error={error}
            isSearching={isSearching}
            onSelect={handleSelect}
            onChange={handleChange}
            selectedInputs={selectedInputs}
          />
        ))}
      </InputContainer>
      <ButtonContainer>
        <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
      </ButtonContainer>
    </Container>
  );
}

SearchSubmitForm.propTypes = {
  textvariation: PropTypes.string,
  tab: PropTypes.string,
};

export default SearchSubmitForm;

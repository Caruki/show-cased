import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import SelectTVShow from './SelectTVShow';
import SubmitButton from './SubmitButton';
import { addMultipleToWatchedList, addMultipleToWatchList } from '../api/lists';
import useAuth from '../contexts/auth/useAuth';
import refetchQueries from '../utils/refetchQueries';
import { useMutation } from 'react-query';

const Container = styled.form`
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

const searchInputNames = ['show1', 'show2', 'show3', 'show4'];

function SelectShowsForm({ tab, textvariation }) {
  const [selectedShows, setSelectedShows] = useState({});
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

  async function handleSelect(searchInputName, searchResult) {
    setSelectedShows({
      ...selectedShows,
      [searchInputName]: searchResult,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const showIds = Object.values(selectedShows).map(
      (selectedShow) => selectedShow.id
    );
    if (tab === 'towatch') {
      await addMultipleToWatch({ userId, showIds });
    } else if (tab === 'watched') {
      await addMultipleToWatched({ userId, showIds });
    }
  }

  return (
    <Container>
      <IntroductionText>
        To see recommendations based on your personal viewing profile please
        choose up to four shows you {textvariation}
      </IntroductionText>
      <InputContainer>
        {searchInputNames.map((searchInputName) => (
          <SelectTVShow
            key={searchInputName}
            value={selectedShows[searchInputName]}
            onSelect={(searchResult) =>
              handleSelect(searchInputName, searchResult)
            }
          />
        ))}
      </InputContainer>
      <ButtonContainer>
        <SubmitButton onClick={(event) => handleSubmit(event)}>
          Submit
        </SubmitButton>
      </ButtonContainer>
    </Container>
  );
}

SelectShowsForm.propTypes = {
  textvariation: PropTypes.string,
  tab: PropTypes.string,
};

export default SelectShowsForm;

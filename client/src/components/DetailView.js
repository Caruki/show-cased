import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import OverviewTextarea from './OverviewTextarea';
import CloseIcon from '../assets/close-icon.svg';
import TrailerIcon from '../assets/trailer-icon.svg';
import RatingIcon from '../assets/rating-icon.svg';
import WatchlistIcon from '../assets/watchlist-icon.svg';
import WatchlistIconClicked from '../assets/watchlist-icon-clicked.svg';
import WatchedIcon from '../assets/watched-icon.svg';
import WatchedIconClicked from '../assets/watched-icon-clicked.svg';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  max-height: 660px;
  flex: 1 1;
  margin: 60px 25px 60px 25px;
  background-color: #504481;
  border: 4px solid #1e194f;
  position: relative;
  & > * {
    box-sizing: border-box;
  }
`;

const CloseButton = styled.button`
  width: fit-content;
  height: fit-content;
  right: 0px;
  top: 0px;
  position: absolute;
  background: transparent;
  border: none;
  margin: -14px -20px -25px 0px;
  padding-top: -20px;
  z-index: 10;

  &:focus {
    outline-width: 0;
  }
`;

const PosterContainer = styled.div`
  flex: 0 0 150px;
  border: hidden;
  border-radius: 0px 0px 80px 80px;
  background-color: red;
  overflow: hidden;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
    border: hidden;
    border-radius: 0px 0px 80px 80px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  flex: 0 0;
  align-items: center;
  justify-content: space-around;
  margin: 10px 10px;
`;

const Rating = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  font: 500 0.7rem 'Roboto', sans-serif;
  color: #e7eaff;
  flex: 0 0 75px;

  & > * {
    margin: 0px 5px 0px 0px;
  }
`;

const ShowTitle = styled.h2`
  font: 500 1.5rem 'Roboto', sans-serif;
  color: #c5c8f8;
  text-shadow: 2px 2px 7px #d05888d1;
  flex: 1 0 50%;
  text-align: center;
  margin: 0;
`;

const TrailerButton = styled.button`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  height: fit-content;
  width: fit-content;
  flex: 0 0 75px;
  background: transparent;
  border: none;
  font: 300 0.5rem 'Roboto', sans-serif;
  color: #e7eaff;

  & > * {
    margin-bottom: 5px;
  }

  &:focus {
    outline-width: 0;
  }
`;

const GenreContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  flex: 0 1 30px;
  margin: 15px 10px;
`;

const GenreField = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  border: hidden;
  text-align: center;
  border-radius: 30px;
  background-color: #504481;
  box-shadow: 0px 3px 6px #1e194f;
  font: 100 italic 0.7rem 'Roboto', sans-serif;
  color: #e7eaff;
  flex: 1 1;
  margin: 0px 5px;
  cursor: default;
`;

const AllActorsContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: baseline;
  justify-content: center;
  margin: 10px 10px;
  flex: 1 1;
  width: auto;
`;

const ActorContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  padding-top: 10px;
  font: 300 0.7rem 'Roboto', sans-serif;
  color: #aeb2f5;
  flex: 0 0 25%;
  height: auto;
  word-break: break-word;
  margin: 0px 2.5px;
`;

const ActorImageWrapper = styled.div`
  border: hidden;
  border-radius: 10px;
  box-shadow: 0px 0px 6px #1e194f;
  overflow: hidden;
  min-width: 30px;
  min-height: 80px;
  flex: 1 1;
  margin: 5px;

  & > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: 50% 50%;
    border: hidden;
    border-radius: 15px;
    margin-bottom: -3px;
  }
`;

const WatchlistCheckContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  padding-bottom: 10px;
  margin: 5px 10px;
`;

const WatchListCheckLabel = styled.label`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: 10px;
  cursor: pointer;

  & > * {
    margin: 2.5px 0px;
  }
`;

const WatchListCheck = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  user-select: none;
`;

const WatchListCheckText = styled.div`
  display: block;
  font-style: ${(props) => (props.checked ? 'italic' : 'normal')};
  font-size: 0.7rem;
  font-weight: 200;
  font-family: 'Roboto', sans-serif;
  color: #e7eaff;
  background: transparent;
`;

function DetailView({
  showPoster,
  showTitle,
  showRating,
  showOverview,
  showGenres,
  showActors,
}) {
  const [watchlistAction, setWatchlistAction] = useState(null);

  const addedToWatchlist = watchlistAction === 'addToWatchlist';
  const addedToWatched = watchlistAction === 'addToWatched';

  function handleWatchlistActionClick(event) {
    const targetWatchlistAction = event.target.value;

    if (watchlistAction === targetWatchlistAction) {
      setWatchlistAction(null);
    } else {
      setWatchlistAction(targetWatchlistAction);
    }
  }
  return (
    <Container>
      <CloseButton>
        <img src={CloseIcon} alt="small icon with an x symbol" />
      </CloseButton>
      <PosterContainer>
        <img src={showPoster} alt="poster of the tv show" />
      </PosterContainer>
      <TitleContainer>
        <Rating>
          <img src={RatingIcon} alt="star icon to represent rating" />
          {`${showRating} %`}
        </Rating>
        <ShowTitle>{showTitle}</ShowTitle>
        <TrailerButton>
          <img src={TrailerIcon} alt="a play icon to represent a video" />
          Watch the Trailer
        </TrailerButton>
      </TitleContainer>
      <OverviewTextarea showOverview={showOverview} />
      <GenreContainer>
        <GenreField>{showGenres[0]}</GenreField>
        <GenreField>{showGenres[1]}</GenreField>
        <GenreField>{showGenres[2]}</GenreField>
        <GenreField>{showGenres[3]}</GenreField>
      </GenreContainer>
      <AllActorsContainer>
        <ActorContainer>
          <ActorImageWrapper>
            <img
              src={showActors[0].image}
              alt={`picture of ${showActors[0].name}`}
            />
          </ActorImageWrapper>
          {showActors[0].name}
        </ActorContainer>
        <ActorContainer>
          <ActorImageWrapper>
            <img
              src={showActors[1].image}
              alt={`picture of ${showActors[1].name}`}
            />
          </ActorImageWrapper>
          {showActors[1].name}
        </ActorContainer>
        <ActorContainer>
          <ActorImageWrapper>
            <img
              src={showActors[2].image}
              alt={`picture of ${showActors[2].name}`}
            />
          </ActorImageWrapper>
          {showActors[2].name}
        </ActorContainer>
        <ActorContainer>
          <ActorImageWrapper>
            <img
              src={showActors[3].image}
              alt={`picture of ${showActors[3].name}`}
            />
          </ActorImageWrapper>
          {showActors[3].name}
        </ActorContainer>
      </AllActorsContainer>
      <WatchlistCheckContainer>
        <WatchListCheckLabel>
          <WatchListCheck
            type="radio"
            value="addToWatchlist"
            checked={addedToWatchlist}
            onClick={handleWatchlistActionClick}
          />
          {addedToWatchlist ? (
            <img
              src={WatchlistIconClicked}
              alt="star icon to symbolize watchlist"
            />
          ) : (
            <img src={WatchlistIcon} alt="star icon to symbolize watchlist" />
          )}
          {addedToWatchlist ? (
            <WatchListCheckText checked={addedToWatchlist}>
              Added to watchlist
            </WatchListCheckText>
          ) : (
            <WatchListCheckText checked={addedToWatchlist}>
              Add to watchlist
            </WatchListCheckText>
          )}
        </WatchListCheckLabel>

        <WatchListCheckLabel>
          <WatchListCheck
            type="radio"
            value="addToWatched"
            checked={addedToWatched}
            onClick={handleWatchlistActionClick}
          />
          {addedToWatched ? (
            <img
              src={WatchedIconClicked}
              alt="check mark icon to symbolize already watched list"
            />
          ) : (
            <img
              src={WatchedIcon}
              alt="check mark icon to symbolize already watched list"
            />
          )}
          <WatchListCheckText checked={addedToWatched}>
            Already watched
          </WatchListCheckText>
        </WatchListCheckLabel>
      </WatchlistCheckContainer>
    </Container>
  );
}

DetailView.propTypes = {
  handleClose: PropTypes.func,
  showModal: PropTypes.bool,
  showPoster: PropTypes.string,
  showTitle: PropTypes.string,
  showRating: PropTypes.number,
  showOverview: PropTypes.string,
  showGenres: PropTypes.array,
  showActors: PropTypes.array,
  checked: PropTypes.bool,
};

export default DetailView;

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
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
  max-height: 600px;
  flex: 1 1;
  margin: 60px 25px 60px 25px;
  background-color: #504481;
  border: 4px solid #1e194f;
`;

const CloseButton = styled.button`
  width: fit-content;
  height: fit-content;
  align-self: flex-end;
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

const OverviewTextarea = styled.div`
  font: 300 0.7rem 'Roboto', sans-serif;
  color: #e7eaff;
  text-align: center;
  line-height: 14px;
  margin: 10px 10px;
  flex-grow: 0 1 90px;
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
  flex-flow: column wrap;
  align-items: center;
  justify-content: space-around;
  margin: 20px 10px;
  max-height: 20%;
`;

const ActorContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  font: 300 0.7rem 'Roboto', sans-serif;
  color: #aeb2f5;
  flex: 1 1 25%;
`;

const ActorImageWrapper = styled.div`
  border: hidden;
  border-radius: 10px;
  box-shadow: 0px 0px 6px #1e194f;
  overflow: hidden;
  margin: 5px;
  flex: 1 1 60px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 0px -12px;
    border: hidden;
    border-radius: 10px;
  }
`;

const WatchlistButtonContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  margin: 0px 10px;
`;

const WatchListButton = styled.button`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  font-style: ${(props) => (props.clicked ? 'italic' : 'normal')};
  font-size: 0.6rem;
  font-weight: 100;
  font-family: 'Roboto', sans-serif;
  color: #e7eaff;
  background: transparent;
  border: none;
  margin: 10px;

  & :focus {
    outline-width: 0;
  }

  & > * {
    margin: 2.5px 0px;
  }
`;

function DetailView({
  handleClose,
  showModal,
  showPoster,
  showTitle,
  showRating,
  showOverview,
  showGenres,
  showActors,
  clicked,
}) {
  const showHideClassName = showModal
    ? 'modal display-block'
    : 'modal display-none';

  return (
    <Container className={showHideClassName}>
      <CloseButton onClick={handleClose}>
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
      <OverviewTextarea>{showOverview}</OverviewTextarea>
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
      <WatchlistButtonContainer>
        <WatchListButton clicked={clicked}>
          {clicked ? (
            <img
              src={WatchlistIconClicked}
              alt="star icon to symbolize watchlist"
            />
          ) : (
            <img src={WatchlistIcon} alt="star icon to symbolize watchlist" />
          )}
          {clicked ? 'Added to watchlist' : 'Add to watchlist'}
        </WatchListButton>
        <WatchListButton clicked={false}>
          {clicked ? (
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
          Already watched
        </WatchListButton>
      </WatchlistButtonContainer>
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
  clicked: PropTypes.bool,
};

export default DetailView;

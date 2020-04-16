import React from 'react';
import styled from '@emotion/styled';
import DetailView from '../components/DetailView';

export default {
  title: 'Detail View of a Show',
};

const AppContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background-color: rgba(14, 5, 46, 1);
  width: 100vw;
  height: 100vh;
`;

const MainContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  overflow: auto;
  width: 100%;
  height: 100%;
`;

export const DetailViewofShow = () => {
  return (
    <AppContainer>
      <MainContainer>
        <DetailView
          showPoster="https://image.tmdb.org/t/p/original/yGNnjoIGOdQy3douq60tULY8teK.jpg"
          showModal={true}
          showTitle="Westworld"
          showRating={50}
          showOverview="A dark odyssey about the dawn of artificial consciousness and the evolution of sin. Set at the intersection of the near future and the reimagined past, it explores a world in which every human appetite, no matter how noble or depraved, can be indulged."
          showGenres={['Action', 'Fantasy', 'Romance', 'Sci-Fi']}
          showActors={[
            {
              image:
                'https://image.tmdb.org/t/p/w92/dWmzryckjVXOVoIVa3in1Cg6v4r.jpg',
              name: 'Fred Feuerstein',
            },
            {
              image:
                'https://image.tmdb.org/t/p/w92/fycqdiiM6dsNSbnONBVVQ57ILV1.jpg',
              name: 'Eva Green',
            },
            {
              image:
                'https://image.tmdb.org/t/p/w92/dWmzryckjVXOVoIVa3in1Cg6v4r.jpg',
              name: 'Clint Eastwood Long long name',
            },
            {
              image:
                'https://image.tmdb.org/t/p/w92/dWmzryckjVXOVoIVa3in1Cg6v4r.jpg',
              name: 'Mark Wahlberg',
            },
            {
              image:
                'https://image.tmdb.org/t/p/w92/dWmzryckjVXOVoIVa3in1Cg6v4r.jpg',
              name: 'Mark Wahlberg',
            },
            {
              image:
                'https://image.tmdb.org/t/p/w92/dWmzryckjVXOVoIVa3in1Cg6v4r.jpg',
              name: 'Mark Wahlberg',
            },
            {
              image:
                'https://image.tmdb.org/t/p/w92/dWmzryckjVXOVoIVa3in1Cg6v4r.jpg',
              name: 'Mark Wahlberg',
            },
          ]}
        />
      </MainContainer>
    </AppContainer>
  );
};

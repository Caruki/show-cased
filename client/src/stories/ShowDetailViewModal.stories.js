import React from 'react';

import ShowDetailViewModal from '../components/DetailViewModal/ShowDetailViewModal';

export default {
  title: 'Detail View of a Show',
};

export const DetailViewofShow = () => {
  return (
    <ShowDetailViewModal
      isShowing={true}
      showDetails={{
        poster_landscape:
          'https://image.tmdb.org/t/p/original/yGNnjoIGOdQy3douq60tULY8teK.jpg',
        title: 'Westworld',
        rating: 8,
        overview:
          'A dark odyssey about the dawn of artificial consciousness and the evolution of sin. Set at the intersection of the near future and the reimagined past, it explores a world in which every human appetite, no matter how noble or depraved, can be indulged.',
        genreNames: ['Action', 'Fantasy', 'Romance', 'Sci-Fi'],
        actors: [
          {
            name: 'Fred Feuerstein',
            picture:
              'https://image.tmdb.org/t/p/w92/dWmzryckjVXOVoIVa3in1Cg6v4r.jpg',
          },
          {
            name: 'Eva Green',
            picture:
              'https://image.tmdb.org/t/p/w92/fycqdiiM6dsNSbnONBVVQ57ILV1.jpg',
          },
          {
            name: 'Clint Eastwood Long name',
            picture:
              'https://image.tmdb.org/t/p/w92/dWmzryckjVXOVoIVa3in1Cg6v4r.jpg',
          },
          {
            name: 'Julia Roberts',
            picture:
              'https://image.tmdb.org/t/p/w92/dWmzryckjVXOVoIVa3in1Cg6v4r.jpg',
          },
          {
            name: 'Hans Wahlberg',
            picture:
              'https://image.tmdb.org/t/p/w92/dWmzryckjVXOVoIVa3in1Cg6v4r.jpg',
          },
          {
            name: 'Matt Damon',
            picture:
              'https://image.tmdb.org/t/p/w92/dWmzryckjVXOVoIVa3in1Cg6v4r.jpg',
          },
          {
            name: 'Heath Ledger',
            picture:
              'https://image.tmdb.org/t/p/w92/dWmzryckjVXOVoIVa3in1Cg6v4r.jpg',
          },
        ],
      }}
    />
  );
};

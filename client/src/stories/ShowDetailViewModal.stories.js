import React from 'react';

import ShowDetailViewModal from '../components/ShowDetailViewModal';

export default {
  title: 'Detail View of a Show',
};

export const DetailViewofShow = () => {
  return (
    <ShowDetailViewModal
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
          name: 'Clint Eastwood Long name',
        },
        {
          image:
            'https://image.tmdb.org/t/p/w92/dWmzryckjVXOVoIVa3in1Cg6v4r.jpg',
          name: 'Julia Roberts',
        },
        {
          image:
            'https://image.tmdb.org/t/p/w92/dWmzryckjVXOVoIVa3in1Cg6v4r.jpg',
          name: 'Hans Wahlberg',
        },
        {
          image:
            'https://image.tmdb.org/t/p/w92/dWmzryckjVXOVoIVa3in1Cg6v4r.jpg',
          name: 'Mark Wahlber',
        },
        {
          image:
            'https://image.tmdb.org/t/p/w92/dWmzryckjVXOVoIVa3in1Cg6v4r.jpg',
          name: 'Mark Walberg',
        },
      ]}
    />
  );
};

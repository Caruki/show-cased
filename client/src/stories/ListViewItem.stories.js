import React from 'react';
import ListItem from '../components/ListItem';
import { action } from '@storybook/addon-actions';

export default {
  title: 'List View of Show Items',
};

export const PopularAndRecs = () => {
  return (
    <ListItem
      onClick={action('button-click')}
      poster="https://image.tmdb.org/t/p/w154/vNEROqZG3sMyMnnLmQ43TML5qFk.jpg"
      title="Killing Eve"
      rating={9}
      id={233444}
    />
  );
};

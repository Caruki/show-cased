import React from 'react';

function loadFromStorage(key) {
  try {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  } catch (error) {
    return null;
  }
}

function usePersistentState(key, initialValue) {
  const [value, setValue] = React.useState(
    loadFromStorage(key) || initialValue
  );

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}

export default usePersistentState;

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, delay]);

  return debouncedValue;
}

useDebounce.propTypes = {
  value: PropTypes.string,
  delay: PropTypes.number,
};

export default useDebounce;

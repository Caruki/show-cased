import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function useThrottle(value, delay) {
  const [debouncedValue, setThrottledValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setThrottledValue(value);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, delay]);

  return debouncedValue;
}

useThrottle.propTypes = {
  value: PropTypes.string,
  delay: PropTypes.number,
};

export default useThrottle;

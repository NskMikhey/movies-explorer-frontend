import React from 'react';
import { TIMEOUT } from '../utils/constants';

const useScreenSize = () => {
  const getWindowWidth = React.useCallback(() => window.innerWidth, []);

  const [screenWidth, setScreenWidth] = React.useState(getWindowWidth);

  React.useEffect(() => {
    let resizeTimeout;

    function handleResize() {
      if (!resizeTimeout) {
        resizeTimeout = setTimeout(() => {
          resizeTimeout = null;
          setScreenWidth(getWindowWidth());
        }, TIMEOUT);
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [getWindowWidth]);

  return screenWidth;
};

export default useScreenSize;

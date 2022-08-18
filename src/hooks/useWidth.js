import {useState, useEffect} from 'react';

const getViewportWidth = () =>
  Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

export default function useWidth() {
  const [width, setWidth] = useState(getViewportWidth());
  function listenResize() {
    setWidth(getViewportWidth());
  }
  useEffect(() => {
    window.addEventListener('resize', listenResize);
    return () => {
      window.removeEventListener('resize', listenResize);
    };
  }, []);
  return [width];
}

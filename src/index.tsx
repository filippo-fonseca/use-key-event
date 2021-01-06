import { useEffect, useRef } from 'react';

const useKey = (key: any, cb: any) => {
  const callbackKey = useRef(cb);

  useEffect(() => {
    callbackKey.current = cb;
  });
  useEffect(() => {
    const handle = (event: { code: any }) => {
      if (event.code == key) {
        callbackKey.current(event);
      }
    };

    document.addEventListener('keypress', handle);
    return () => document.removeEventListener('keypress', handle);
  }, [key]);
};

export default useKey;

import { useEffect, useState } from 'react';

const useLocalStorage = (key, value) => {
  const [state, setState] = useState(() => {
    const isStoraged = localStorage.getItem(key);
    return isStoraged ? isStoraged : value;
  });

  useEffect(() => {
    localStorage.setItem(key, state);
  }, [state, key]);

  return [state, setState];
};

export default useLocalStorage;

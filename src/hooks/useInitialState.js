import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  //añadir el estado
  const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] }); //lo que le pasemos a la funcion useEstate, no los va a devolver el hook useState

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setVideos(data));

  }, []);
  return videos;
};

export default useInitialState;

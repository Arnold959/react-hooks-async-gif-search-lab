import React, { useState, useEffect } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

const API_KEY = "RO8Uw2ql6hbctth5U8cQgz27ybbEiL88";

const GifListContainer = () => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    fetchGifs();
  }, []);

  const fetchGifs = (query = "dogs") => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${API_KEY}&rating=g&limit=3`;

    fetch(url)
      .then(response => response.json())
      .then(({data}) => {
        const gifs = data.map(gif => ({url: gif.images.original.url}));
        setGifs(gifs);
      });
  }

  return (
    <div>
      <GifSearch fetchGifs={fetchGifs} />
      <GifList gifs={gifs} />
    </div>
  );
};

export default GifListContainer;

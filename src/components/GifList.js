import React from 'react';

const GifList = ({ gifs }) => (
  <ul>
    {gifs.map(gif => (
      <li key={gif.url}>
        <img src={gif.url} alt="" />
      </li>
    ))}
  </ul>
);

export default GifList;
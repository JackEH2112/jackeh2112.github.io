import logo from './logo.svg';
import './App.css';
import React from 'react';
import SearchBar from './SearchBar.js';
import SearchResults from './SearchResults.js';
import Playlist from './Playlist.js';
import Tracklist from './Tracklist.js';
import Track from './Track.js';

function App() {
  return (
    <>
      <SearchBar />
      <SearchResults />
      <Playlist />
      <Tracklist />
      <Track />
    </>
  );
}

export default App;

import React, {Component} from 'react';

import './App.css';

import Spotify from '../../util/Spotify.js';

import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';
import Playlist from '../Playlist/Playlist.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults:[],
      playlistName: 'Tuuunes',
      playlistTracks: [],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  };

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }

    tracks.push(track);
    this.setState({playlistTracks: tracks});
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    
    const result = tracks.filter(currentTrack => currentTrack.id !== track.id);
    
    this.setState({playlistTracks: result});
  };

  updatePlaylistName(name){
    this.setState({playlistName : name});
  };

  savePlaylist(){
    let trackURIs = []
    // change track.name to track.uri when API is integrated
    this.state.playlistTracks.forEach((track) => trackURIs.push(track.uri));

    //pass playlist name and track URIs back to API

    Spotify.savePlaylist(this.state.playlistName, trackURIs).then(() => {
      this.setState({
        playlistName: 'New Playlist',
        playlistTracks: []
      })
    })
  }

  search(term){
    Spotify.search(term).then(searchResults => {
      this.setState({searchResults: searchResults})
    })
  }

  render(){
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar 
          onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResults 
              searchResults = {this.state.searchResults}
              onAdd={this.addTrack} />
            <Playlist
              playlistName = {this.state.playlistName}
              playlistTracks = {this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
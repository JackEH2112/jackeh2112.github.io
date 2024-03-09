//import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar.js';
import SearchResults from './SearchResults.js';
import axios from 'axios';

function App(props) {
  const CLIENT_ID = '734bd31883e6461bb81507e1075c9847'
  const REDIRECT_URI = 'http://localhost:3000'
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
  const RESPONSE_TYPE = 'token'

  const [token, setToken] = useState('')
  const [data, setData] = useState()

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem('token')

    if(!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith('access_token')).split('=')[1]

      window.location.hash = ''
      window.localStorage.setItem('token', token)
    }
    setToken(token)
  },[])

  const logout = () => {
    setToken('')
    window.localStorage.removeItem('token')
  }

  const [searchKey, setSearchKey] = useState('');

  const searchArtists = async (e) => {
    e.preventDefault(); 
    const response = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        q: searchKey,
        type: 'track'
      }
    })

    /*const getTrack = async () => {
      const trackQuery = searchKey;
      const endpoint = `https://api.spotify.com/v1/tracks?${token}`
      try{
        const response = await fetch(endpoint, {cache: 'no-cache'})
        if(response.ok){
          const jsonResponse = await response.json();
          //function to parse data
        }
      } catch (error) {
        console.log(error)
      }
    }*/

    setData(response.data.tracks.items);
  }


  return (
    <>
      <div>
        <h1>Jammming!</h1>
        <p>Personal Playlist Maker</p>
        {!token ?
        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
          Login To Spotify
        </a>  : 
        <button onClick={logout}>Logout</button>}

        {token ?
          <form onSubmit={searchArtists}>
            <input type='text' onChange={e => setSearchKey(e.target.value)}/>
            <button type='submit'>Find My Jammms</button>
          </form> :
          <h2>Please Login</h2>}
      </div>
      <SearchResults
        searchResults = {data}
      />
    </>
  );
}

export default App;
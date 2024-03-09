import React, {useState} from 'react'
import Tracklist from './Tracklist';
import Playlist from './Playlist';

function SearchResults(props) {
    const [searchResults, setSearchResults] = useState([
        {
        'songName' : 'Something For Nothing',
        'artist' : 'Rush', 
        'album' : '2112',
        'id' : '0', /*Replace me with .utilities generate function when written*/
        'playlist' : false},
        {
        'songName' : 'Knights of Cydonia',
        'artist' : 'Muse',
        'album' : 'Black Holes and Revelations',
        'id' : '10', /*Replace me with .utilities generate function when written*/
        'playlist' : false},
        {
            'songName' : 'Lovers Leap',
            'artist' : 'Elbow',
            'album' : 'Lovers Leap',
            'id' : '20',
            'playlist' : false}
    ])

    const [playlist, setPlaylist] = useState([]);

    const addToPlaylist = (track) => {
        let playlistChecker = track.songName;
        playlist.find((track) => track.songName === playlistChecker)
        if(playlist.find((track) => track.songName === playlistChecker)){
            alert(track.songName + ' is already in playlist!')
        }
        else{
            let newId = track.id+10; /*Replace me with .utilities generate function when written*/
            const newTrack = {
                songName: track.songName,
                artist: track.artist,
                album: track.album,
                id: newId,
                playlist: true
            }
            setPlaylist(playlist => [...playlist, newTrack])
        }
    }
    const removeFromPlaylist = (trackToRemove) => {
        setPlaylist((playlist) => 
            playlist.filter((track) => track.id !== trackToRemove.id))
    }

    return (
        <>
            <Tracklist 
                searchResults={searchResults}
                addToPlaylist={addToPlaylist}
            />
            <Playlist
                playlist={playlist}
                removeFromPlaylist={removeFromPlaylist}
            />
        </>
    )
}

export default SearchResults;
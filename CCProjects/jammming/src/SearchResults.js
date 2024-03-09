import React, {useState} from 'react'
import Tracklist from './Tracklist';
import Playlist from './Playlist';

function SearchResults(props) {
    const {searchResults} = props;
    console.log(searchResults)

    const [playlist, setPlaylist] = useState([]);

    const addToPlaylist = (track) => {
        let playlistChecker = track.name;
        if(playlist.find((track) => track.name === playlistChecker)){
            alert(track.name + ' is already in playlist!')
        }
        else{
            //let newId = track.id+1; /*Replace me with .utilities generate function when written*/
            const newTrack = track;
            setPlaylist(playlist => [...playlist, newTrack])
        }
    }
    const removeFromPlaylist = (trackToRemove) => {
        setPlaylist((playlist) => 
            playlist.filter((track) => track.id !== trackToRemove.id))
    }

    return (
        <>
            <div>
                <h3>Search Results</h3>
                {/*{renderTrack()}*/}
                <Tracklist 
                    searchResults={searchResults}
                    addToPlaylist={addToPlaylist}
                />
            </div>
            <div>
                <h3>Playlist</h3>
                <Playlist
                    playlist={playlist}
                    removeFromPlaylist={removeFromPlaylist}
                />
            </div>
            
        </>
    )
}

export default SearchResults;
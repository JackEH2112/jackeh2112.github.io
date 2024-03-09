import React, {useState} from "react";
import Track from "./Track";

function Playlist(props) {
    const {searchResults, playlist, removeFromPlaylist, trackIsInPlaylist} = props;

    const [playlistName, setPlayListName] = useState('')
    const [playlists, setPlaylists] = useState([])
    
    function handleSubmit(e) {
        e.preventDefault();
        if(playlistName === ''){
            alert('Must have a playlist name!')
        }
        else if(playlist.length === 0){
            alert('No tracks in playlist')
        }
        else{
            //Save the new playlist
            setPlaylists(playlists => [...playlists, playlistName])
            const newUriPlaylist = []
            for (let i = 0; i < playlist.length; i++){
                //need function for taking song name and creating uri code - placeholder code
                const playlistUri = playlist[i]
                //add uri code to array for Spotify api
                newUriPlaylist.push(playlistUri)
            }
            alert(`Upload ${playlistName} successful`)
            setPlayListName('')
            playlist.splice(0)
        }
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    onChange={(e) => setPlayListName(e.target.value)}
                    value={playlistName}
                />
                <ul>
                    {playlist?.map((track) => (
                        <Track
                            key={track.id}
                            track={track}
                            trackIsInPlaylist={trackIsInPlaylist}
                            removeFromPlaylist={() => {removeFromPlaylist(track)}} 
                        />
                    ))}
                </ul>
                <button type="submit">
                    Upload My Jammms!
                </button>
            </form>
            {/*add functionality to be able to change playlist names*/}
            <ul>
                {playlists?.map((pl) => (
                    <li>
                        {pl}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Playlist;
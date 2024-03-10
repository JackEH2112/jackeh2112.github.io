import React, {useState} from "react";
import Track from "./Track";
import './Playlist.css'

function Playlist(props) {
    const {playlist, removeFromPlaylist, token} = props;

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
        else if(!token){
            alert('You need to be logged in to upload playlists to Spotify')
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
                    class='heading'
                    onChange={(e) => setPlayListName(e.target.value)}
                    value={playlistName}
                />
                <ul>
                    {playlist?.map((track) => (
                        <Track
                            trackIsInPlaylist = {true}
                            key={track.id}
                            track={track}
                            removeFromPlaylist={() => {removeFromPlaylist(track)}} 
                        />
                    ))}
                </ul>
                <button class='heading' type="submit">
                    Upload My Jammms!
                </button>
            </form>
            {/*add functionality to be able to change playlist names*/}
            <h3 class='heading'>Saved Playlists</h3>
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
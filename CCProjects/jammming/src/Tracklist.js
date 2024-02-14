import React, {useState} from "react";
import Track from "./Track";

function Tracklist() {

    const [tracklist, setTracklist] = useState([{
        'songName' : 'Something For Nothing',
        'artist' : 'Rush', 
        'album' : '2112',
        'id' : '0', /*Replace me with .utilities generate function when written*/
        'playlist' : false},
        {
        'songName' : 'Knights of Cydonia',
        'artist' : 'Muse',
        'album' : 'Black Holes and Revelations',
        'id' : '10',
        'playlist' : false}
    ]);

    const [playlist, setPlaylist] = useState([]);

    const addToPlaylist = (track) => {
        console.log(track);
        let playlistChecker = track.songName;
        console.log(playlistChecker)
        console.log(playlist.find((track) => track.songName == playlistChecker))
        if(playlist.find((track) => track.songName == playlistChecker)){
            alert(track.songName + ' is already in playlist!')
        }
        else{
            alert('Starting new track for playlist')
            let newId = track.id+10;
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
        console.log('I am being sent here')
        console.log(trackToRemove.id)
        setPlaylist((playlist) => 
            playlist.filter((track) => track.id !== trackToRemove.id))
    }

    return (
        <>
            <ul>
                {tracklist.map((track) => (
                    <Track 
                        key={track.id}
                        track={track}
                        addToPlaylist={() => {addToPlaylist(track)}}
                        removeFromPlaylist={() => {removeFromPlaylist(track)}} 
                        playlist={playlist}

                         />
                )
                )}
            </ul>
            <ul>
                {playlist.map((track) => (
                    <Track
                        key={track.id}
                        track={track}
                        addToPlaylist={() => {addToPlaylist(track)}}
                        removeFromPlaylist={() => {removeFromPlaylist(track)}} 
                        playlist={playlist}
                        />
                )
                )}
            </ul>
        </>

    )
}

export default Tracklist;
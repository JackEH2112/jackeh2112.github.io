import React, {useState} from "react";

function Track(props) {
    const {track, addToPlaylist, removeFromPlaylist} = props;

    const handleClick = (track) => {
        if(track.playlist === true){
            removeFromPlaylist(track.id);
        }
        else{
            addToPlaylist(track);
        }
    }

    //const [labelVariable, setLabelVariable] = useState('');


    /*function getLabelVariable() {
        if(track.playlist){
            setLabelVariable('Remove track from playlist')
        }
        else{
            setLabelVariable('Add track to playlist')
        }
    }*/

    return(
        <li className="Track">
            <div className="songName">{track.songName}</div>
            <div className="songInfo">Artist: {track.artist} || Album: {track.album}</div>
            <button 
                type="button"
                className="playlistAddRemove"
                /*aria-label={getLabelVariable}*/
                onClick={() => {
                    handleClick(track);
                  }}>
                    {track.playlist ? '-' : '+'}
            </button>
        </li>
    )
}

export default Track;
import React, {useState} from "react";
import Track from "./Track";

function Tracklist(props) {
    const {searchResults, addToPlaylist, trackIsInPlaylist} = props;
    return (
        <>
            <ul>
                {searchResults?.map((track) => (
                    <Track 
                        key={track.id}
                        track={track}
                        trackIsInPlaylist={trackIsInPlaylist}
                        addToPlaylist={() => {addToPlaylist(track)}}
                         />
                ))}
            </ul> 
        </>
    )
}

export default Tracklist;
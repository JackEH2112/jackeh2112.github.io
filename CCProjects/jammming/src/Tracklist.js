import React, {useState} from "react";
import Track from "./Track";

function Tracklist(props) {
    const {searchResults, addToPlaylist} = props;
    return (
        <>
            <ul>
                {searchResults?.map((track) => (
                    <Track 
                        key={track.id}
                        track={track}
                        trackIsInPlaylist = {false}
                        addToPlaylist={() => {addToPlaylist(track)}}
                         />
                ))}
            </ul> 
        </>
    )
}

export default Tracklist;
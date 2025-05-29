import React, {Component} from 'react';

import './Playlist.css';

import TrackList from '../TrackList/TrackList.js';

class Playlist extends Component {

    constructor(props){
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(event){
        this.props.onNameChange(event.target.value)
    }

    render() {
        const defaultValue = this.props.playlistName;
        return(
            <div className="Playlist">
                <input value={defaultValue}
                    onChange={this.handleNameChange}/>
                <TrackList 
                    tracks = {this.props.playlistTracks}
                    onRemove = {this.props.onRemove}
                    isRemoval = {true}
                />
                <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
            </div>
        );    
    }
}

export default Playlist;
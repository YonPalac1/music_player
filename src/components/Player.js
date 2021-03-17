import React from 'react';
import PlayerDetails from './PlayerDetails';
import PlayerControls from './PlayerControls';


function Player(props){
	return (
		<div className="c-player">
			<audio></audio>
			<h4>Playing Now</h4>
			<PlayerDetails song={props.song}/>
		
			<PlayerControls />
		<p><strong>Next up</strong> {props.nextSongs.title} by {props.nextSongs.artist}</p>
		</div>
	);
}

export default Player;
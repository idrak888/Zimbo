import React from 'react';

const Videoplayer = (props) => {
	return (
		<div className="Videoplayer">
			<div className="playzone">
				<span onClick={props.closeVideo} className="clos">Close</span>
				<iframe width="285" height="160" src={props.link} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
			</div>
		</div>
	);
}

export default Videoplayer;
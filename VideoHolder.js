import React from 'react';

const VideoHolder = (props) => {
	return (
		<div className="VideoHolder">
			<table align="center">
			<tbody>
				<tr>
					<td>
						<iframe width="150" height="80"  src={props.link} frameborder="0" allow="encrypted-media"></iframe>
						<div onClick={props.playVideo} className="overlay-vid"></div>
						<button onClick={props.delete} className="btn btn-outline-danger">Delete Video</button>
					</td>
					<td>
						<h5>{props.title}</h5>
						<p>{props.des}</p>

					</td>
				</tr>
			</tbody>
			</table>
		</div>
	);
}

export default VideoHolder;
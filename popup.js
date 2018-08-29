import React from 'react';

const Popup = (props) => {
	return (
		<div className="Popup">
			<h3>New Video</h3><span onClick={props.hidePop}>X</span><br/>
			<h5><i className="fa fa-youtube-square"></i>Only Youtube <br/> videos are supported</h5>
			<br/>
			<h4>{props.title}</h4>
			<input value={props.titleVal} onChange={props.changeTitle} type="text" placeholder="Edit title" /><br/>
			{props.desc}<br/>
			<input value={props.descVal} onChange={props.changeDesc} type="text" placeholder="Edit description" /><br/>
			Video Link<br/>
			<input id="src" type="text" placeholder="Video URL" value={props.iniSrc} />
			<br/><br/>
			<button className="btn btn-primary" onClick={props.upload} >Upload</button>
		</div>
	);
}

export default Popup;
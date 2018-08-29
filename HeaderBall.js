import React from 'react';

const HeaderBall = (props) => {
	return (
		<div className="HeaderBall">
			<p onClick={props.showPop}>+Add<br/>Video</p>
		</div>
	);
}

export default HeaderBall;
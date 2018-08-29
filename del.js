import React from 'react';

const Deletewarn = (props) => {
	return (
		<div className="Deletewarn">
			<h3>You sure?</h3>
			<button onClick={props.hideSelf} className="btn">Cancel</button> <button onClick={props.delCon} className="btn btn-danger">Yes</button>
		</div>
	);
}

export default Deletewarn;
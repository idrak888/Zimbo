import React from 'react';

const Header = (props) => {
	return (
		<div className="Header">
			<span>ZIMBO!</span>
			<input type="text" placeholder="Search"></input> <i className="fa fa-search" aria-hidden="true"></i> 
		</div>
	);
}

export default Header;
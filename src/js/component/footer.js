import React from "react";
import PropTypes from "prop-types";

//create your first component
export function MyFooter(props) {
	return (
		<footer className="footer py-2 mt-4 bg-dark text-white text-center">
			<div className="container">
				<span>{props.description}</span>
			</div>
		</footer>
	);
}

MyFooter.defaultProps = {
	description: "Copyright© Your Website 2021"
};
MyFooter.propTypes = {
	description: PropTypes.string
};

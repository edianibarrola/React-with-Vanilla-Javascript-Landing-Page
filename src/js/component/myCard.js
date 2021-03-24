import React from "react";
import PropTypes from "prop-types";

//create your first component
export function MyCard(props) {
	console.log("props --" + props.cardInfo[0].title);
	const renderCard = props.cardInfo.map((item, index) => {
		return (
			<div className="col" key={index}>
				<div className="card mx-auto">
					<img
						src="https://placehold.it/500x325.jpg"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body text-center">
						<h5 className="card-title">{item.title}</h5>
						<p className="card-text text-center">
							{item.description}.
						</p>
						<a href={item.buttonLabel} className="btn btn-primary">
							{item.buttonURL}
						</a>
					</div>
				</div>
			</div>
		);
	});
	return renderCard;
}

MyCard.defaultProps = {
	cardInfo: []
	// title: "Card Title",
	// description:
	// 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
	// buttonLabel: "Find out more!",
	// buttonURL: "#"
};
MyCard.propTypes = {
	cardInfo: PropTypes.array
	// title: PropTypes.string,
	// description: PropTypes.string,
	// buttonLabel: PropTypes.string,
	// buttonURL: PropTypes.string
};

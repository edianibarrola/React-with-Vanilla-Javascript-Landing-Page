import React from "react";
import { MyNavbar } from "./navbar";
import { MyJumbo } from "./jumbotron";
import { MyFooter } from "./footer";
import { MyCard } from "./myCard";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const links = [
		{ label: "Home", url: "#" },
		{ label: "About", url: "#about" },
		{ label: "Services", url: "#services" },
		{ label: "Contact", url: "#contact" }
	];
	const cardInfo = [
		{
			title: "Card Title",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
			buttonURL: "#",
			buttonLabel: "Find out more!"
		},
		{
			title: "Card Title",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
			buttonURL: "#",
			buttonLabel: "Find out more!"
		},
		{
			title: "Card Title",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
			buttonURL: "#",
			buttonLabel: "Find out more!"
		},
		{
			title: "Card Title",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
			buttonURL: "#",
			buttonLabel: "Find out more!"
		}
	];

	const jumboDescription = "Copyright Edian Ibarrola© ";
	return (
		<div>
			<MyNavbar menu={links} brand="Bootstrap" />

			<div className="container">
				<MyJumbo />
				<div className="row">
					{/* {cardInfo.map((cardInfo,index)=>{

                    })} */}
					<MyCard cardInfo={cardInfo} />
				</div>
			</div>
			<MyFooter />
		</div>
	);
}

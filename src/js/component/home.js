import React from "react";
import { MyNavbar } from "./navbar";
import { MyJumbo } from "./jumbotron";
import { MyFooter } from "./footer";

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
	return (
		<div>
			<MyNavbar menu={links} brand="Bootstrap" />
			<MyJumbo />
			<MyFooter />
		</div>
	);
}

import React from "react";
import propTypes from "prop-types";

//create your first component
export function SecondsCounter(props) {
	const partial = "00000" + props.seconds.toString();
	const counterOrganization = partial.substr(partial.length - 6).split(" ");
	let counterDivs = counterOrganization.map((counterOrganization, i) => (
		<div key={i} className="cards">
			{counterOrganization}
		</div>
	));

	return (
		<div className="blackCard">
			<div className="clock">
				<i className="far fa-clock"></i>
			</div>
			<div className="counterNumbers">{counterDivs}</div>
		</div>
	);
}

SecondsCounter.propTypes = {
	seconds: propTypes.number
};

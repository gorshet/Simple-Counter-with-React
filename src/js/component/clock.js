import React from "react";

import PropTypes from "prop-types";

//create your first component

const printCounter = number => {
	let countStr = number.toString();
	let countArr = countStr.split("");

	if (countArr.length < 6) {
		let itemsToAdd = 6 - countArr.length;
		for (let i = 0; i < itemsToAdd; i++) {
			countArr.unshift("0");
		}
	}

	return countArr;
};

export const Clock = props => {
	const x = printCounter(props.digits);
	return (
		<div className="container">
			<div className="row">
				<div className="col-sm">
					<i className="far fa-clock" />
				</div>
				<div className="col-sm">{x[0]}</div>
				<div className="col-sm">{x[1]}</div>
				<div className="col-sm">{x[2]}</div>
				<div className="col-sm">{x[3]}</div>
				<div className="col-sm">{x[4]}</div>
				<div className="col-sm">{x[5]}</div>
			</div>
		</div>
	);
};
Clock.propTypes = {
	digits: PropTypes.number
};

//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Counter } from "./component/counter.js";
let counter = 0;
setInterval(() => {
	ReactDOM.render(
		<Counter digits={counter} />,
		document.querySelector("#app")
	);
	counter++;
}, 1000);
//render your react application

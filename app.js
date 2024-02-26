import React from "react";
import ReactDOM from "react-dom/client";

//jsx

const jsxHeading=<h1 id="heading">react is basic necessity!!</h1>;
console.log(jsxHeading);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
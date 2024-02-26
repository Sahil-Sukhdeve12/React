import React from "react";
import ReactDOM from "react-dom/client";

//jsx

const jsxHeading=<h1 id="heading" className="root">react is basic necessity!!</h1>;

const jsxHeading1=(<h1 
    id="heading" 
    className="root">
        react is basic necessity!!
        </h1>); 
        // writting in multiple lines 

// console.log(jsxHeading);



const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
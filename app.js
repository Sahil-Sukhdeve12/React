import React from "react";
import ReactDOM from "react-dom/client";

const Title=()=>(
    <h1 className="head" tabIndex="5">
        React!!
    </h1>
);


// React Functional Component
const HeadingComponent=()=>(
    <div id="container">
        <Title/>
        {/* return <h1>React's Functional Component</h1>; */}
        <h1 className="heading">React's Functional Component</h1>
    </div>
);

const HeadingComponent2=()=> <h1>React</h1>;

// console.log(HeadingComponent);

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
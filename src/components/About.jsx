import User from "./User"
import UserClass from "./UserClass"
import { Component } from "react"

import UserContext from "../utils/UserContext";

// export default function About(){
//     return(
//         <div>
            
//             <h1>About</h1>
//             <h2>This is our ordering app</h2>
//             <h3><UserClass name={"Sahil S"} location={"Bhandara"}/></h3>
//             {/* <h3><User/></h3> */}
//             <h3><User name={"Sahil S"}/></h3>
//         </div>
//     )
// }

export default class About extends Component {
    constructor(props){
        super(props);

        // console.log("Parent Constructor");

    }

    // componentDidMount(){
    //     console.log("Parent Component Did Mount"); 
    // }

    render(){
        // console.log("Parent render");
        return(
            <div>
                <h1>About</h1>
                <div>
                    LoggedIn User
                    <UserContext.Consumer>
                         {({loggedInUser})=>(
                            <h1 className="text-xl font-bold">{loggedInUser}</h1>
                        )}
                        {/* {(data)=>console.log(data)} */}
                    </UserContext.Consumer>
                </div>
                <h2>This is our ordering app</h2>
                {/* <h3><UserClass name={"Sahil S"} location={"Bhandara"}/></h3> */}
                {/* <h3><User/></h3> */}
                
            </div>
        )
    } 
}

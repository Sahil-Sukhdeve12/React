import React from "react";

export default class UserClass extends React.Component{
    constructor(props){
        super(props);

        // console.log(props);

        // this.state={
        //     count1:1,
        //     count2:2,
        // };
        // console.log("Child Constructor");
    }

    // componentDidMount(){
    //     console.log("Child Component Did Mount");  

    //     //Api call
    // }

    render(){

        const {name,location}=this.props;
        // const {count1,count2}=this.state;

        // console.log("Child Render");

        return(
            <div className="user-card">
                {/* <h4>Count1:{count1}</h4>
                <h4>Count2:{count2}</h4>
                <button
                onClick={()=>{
                    this.setState({
                        count1:this.state.count1+1,
                    });
                    
                }} >Count Increase
                </button> */}
                {/* <h2>Name:Sahil</h2> */}
                <h2>{name}</h2>
                {/* <h3>Location:Nagpur</h3> */}
                <h3>{location}</h3>
                {/* <h3>Userid:@sahils15</h3> */}
            </div>
        )
    }
}
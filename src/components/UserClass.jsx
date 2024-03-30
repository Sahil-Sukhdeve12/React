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

        //creating state variables
        this.state={
            userInfo:{
                name:"Dummy",
                location:"Default",
                // avatar_url:"https://dummyphoto.jpg",
            },
        };
    }

    /*
    async componentDidMount(){
        console.log("Child Component Did Mount");  
            //Api call
            const data=await fetch("https://api.github.com/users/sahil-sukhdeve12");
            const json=await data.json();
            

            this.setState({
                userInfo:json,
            });
            console.log(json);
    }
    */

    componentDidMount(){
        this.timer=setInterval(()=>{
            console.log("react is spa");
        },1000);
    }



    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("component will unmount");
    }

    render(){

        const {name,location,avatar_url}=this.state.userInfo;
        // debugger;
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
                <img style={{height:'250px',width:'250px'}}  src={avatar_url}  />
                
                <h3>Userid:@sahils15</h3>
            </div>
        )
    }
}
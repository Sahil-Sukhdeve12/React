import RestaurantCard ,{withPromotedLabel}from "./ResturantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import withPromotedLabel from "./ResturantCard";

const Body=()=>{
  
  let OnlineStatus=useOnlineStatus();
   
  const[listOfResturants,setListOfResturants]=useState([]);
  // const arr=useState();
  // const[listOfResturants,setListOfResturants]=arr;

   const[filteredRest,setfilteredRest]=useState([]);

  const [searchText,setsearchText]=useState("");

  const RestaurantCardPromoted=withPromotedLabel(RestaurantCard);

  
  // console.log(listOfResturants);

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData=async()=>{ 
    const data=await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.145923&lng=79.08762999999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json=await data.json();

    // console.log(json);
    setListOfResturants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); //implemented optional chaining
    
    //updating for if we make a empty search in search bar
    setfilteredRest(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  } 

  //conditional rendering
  if(listOfResturants.length===0){
    return <Shimmer/>
  }

  

  if(OnlineStatus===false){
    return(
      <div>
        <h1>
          Look's like your offline. please check your internet connection !!
        </h1>
      </div>
    )
  }
 
  return (
    <div className="body">
      <div className="filter flex items-center justify-between">
          <div className="search m-4 p-4 flex items-center ml-[550px]">
            
              <input type="text" className="border border-solid border-black w-[350px]" placeholder="Search for restaurants and food" 
               value={searchText} 
                  onChange={(e)=>{
                  setsearchText(e.target.value);

                  const filteredList = listOfResturants.filter(
                  (res) => res.info.name.toLowerCase().includes(e.target.value.toLowerCase())
                );
                setfilteredRest(filteredList);

              }}/>
              
              
              
              <button className="px-4 py-1 bg-green-100 m-4 rounded-lg"
              onClick={()=>{
              // console.log(searchText);

              const filteredRest=listOfResturants.filter((res)=>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRest(filteredRest);
              // setListOfResturants(filteredRest);
              }} 
              >Search</button> 
              

          </div>

           <div className="search m-4 p-4 flex items-end">
              <button className="px-4 py-2 bg-red-100 m-4 rounded-lg"
              onClick={()=>{
              const filteredList=listOfResturants.filter(
              (res)=>res.info.avgRating>4
              );
              // console.log(listOfResturants);
              // console.log(filteredList);
              
              setListOfResturants(filteredList);
              }}><h3>Top Rated Resturants</h3></button>
          
            </div>
            
            </div>
            

        
        <div className="flex flex-wrap">
            {filteredRest.map((restaurant)=>(
                <Link key={restaurant.info.id} to={"restaurants/"+restaurant.info.id}> 
                {restaurant.info.aggregatedDiscountInfoV3?.header?(<RestaurantCardPromoted resData={restaurant}/>):(<RestaurantCard resData={restaurant}/>
                )}
                {/* <RestaurantCard  
                  resData={restaurant}/> */}
                </Link>
            ))}
        </div>
        
    </div>
    
  )
}

export default Body;


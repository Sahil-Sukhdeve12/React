import { CDN_URL } from "../utils/constants";

export default function RestaurantCard(props){
    const {resData} =props;
    const{cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = resData?.info;
     
    return (
        <div className="m-4 p-4 w-[249px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img className="rounded-lg" src={CDN_URL+cloudinaryImageId} />
            <h2 className="font-bold py-2 text-lg" style={{ textAlign: "center" }} >{name}</h2>
            <p>{cuisines.join(", ")}</p>
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} Minutes</h4>
        </div>
    )
}

    //higher order component
    //input-ResturanrCard=>ResturantCardPromoted

    export function withPromotedLabel(RestaurantCard){
        return(props)=>{
            return(
                // enhanced component
                <div> 
                    <label className="absolute bg-black text-white p-2 m-4 rounded-lg">Promoted</label>
                    <RestaurantCard{...props}/>
                </div>
            )
        }
    }


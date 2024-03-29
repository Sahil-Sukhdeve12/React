
import { CDN_URL } from "../utils/constants";

export default function RestaurantCard(props){
    const {resData} =props;
    const{cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = resData.info;
     
    return (
        <div className="res-card">
            <img className="logo-img" src={CDN_URL+cloudinaryImageId} />
            <h2 style={{ textAlign: "center" }}>{name}</h2>
            <p>{cuisines.join(", ")}</p>
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} Minutes</h4>
        </div>
    )
}
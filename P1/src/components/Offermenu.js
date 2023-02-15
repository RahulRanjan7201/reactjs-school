import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { imageCDNURL } from "../config";
import Shimmer from "./Shimmer";
const Offermenu = () => {
  const {id} = useParams();
  const [offer, setOffer] = useState(null)
  useEffect(() => {
    getOfferInfo();
  },[]);
  async function getOfferInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=" +
        id
    );
    const json = await data.json();
    setOffer(json.data);
  }
  return (!offer) ? <Shimmer/> :  (
    <div className="menu">
        <div>
      <h1>Offer id: {id}</h1>
      <h2>{offer?.name}</h2>
      <img src={imageCDNURL + offer?.cloudinaryImageId}/>
      <h3>{offer?.area}</h3>
      <h3>{offer?.city}</h3>
      <h3>{offer?.avgRating}</h3>
      </div>
      <div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(offer?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  );
};
export default Offermenu;

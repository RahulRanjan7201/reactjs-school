import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { imageCDNURL } from "../config";
import useOffer from "../utils/useOffer";
import Shimmer from "./Shimmer";
const Offermenu = () => {
  const {id} = useParams();
  const offer = useOffer(id);

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

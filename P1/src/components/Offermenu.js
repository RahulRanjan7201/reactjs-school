import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { imageCDNURL } from "../config";
import { addItem } from "../utils/cardSlice";
import useOffer from "../utils/useOffer";
import Shimmer from "./Shimmer";
const Offermenu = () => {
  const {id} = useParams();
  const offer = useOffer(id);
  const dispatch = useDispatch();
  const addFoodItem = (item) => {
    dispatch(addItem(item))
  }
  return (!offer) ? <Shimmer/> :  (
    <div className="flex ">
        <div>
      <h1>Offer id: {id}</h1>
      <h2>{offer?.name}</h2>
      <img src={imageCDNURL + offer?.cloudinaryImageId}/>
      <h3>{offer?.area}</h3>
      <h3>{offer?.city}</h3>
      <h3>{offer?.avgRating}</h3>
      </div>
        
      <div className="p-5">
        <h1>Menu</h1>
        <ul>
          {Object.values(offer?.menu?.items).map((item) => (
            <li key={item.id}> {item.name} - {" "} <button className="bg-green-50 p-1" onClick={() =>addFoodItem(item)}>Add</button></li>
          ))}
        </ul>
      </div>
      </div>
  );
};
export default Offermenu;

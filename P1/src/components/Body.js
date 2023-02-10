import { useState } from "react";
import {  offerlist } from "../config";
import OffersCard from "../components/OfferCard";

const Body = () => {
    const [searchText, setSearchTest] = useState("KFC")
    return (
        <>
        <div className="search-container">
            <input type="text" placeholder="search" value={searchText} onChange={(e)=> setSearchTest(e.target.value)}/>
            <button className="search-btn">Search</button>
        </div>
      <div className="offer-list">
        {
          offerlist.map(offer => {
            return <OffersCard {...offer}/>
          })
        }
       
      </div>
      </>
    )
  }

export default Body;
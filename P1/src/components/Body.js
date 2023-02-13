import { useState } from "react";
import {  offerlist } from "../config";
import OffersCard from "../components/OfferCard";

function filterData(searchText, offerlist) {
 const data =  offerlist.filter(offer => offer.name.includes(searchText))
 return data;
}
const Body = () => {
    const [searchText, setSearchTest] = useState("");
    let [searchClicked, setSearchClicked] = useState(false);
    const [offers, setOffers] = useState(offerlist)
    return (
        <>
        <div className="search-container">
            <input type="text" placeholder="search" value={searchText} onChange={(e)=> setSearchTest(e.target.value)}/>
            <button className="search-btn" onClick={() =>{
              searchClicked = !searchClicked
              setSearchClicked(searchClicked)
             const data =  filterData(searchText, offers)
             setOffers(data)
            } }>Search</button>
        </div>
      <div className="offer-list">
        {
          offers.map(offer => {
            return <OffersCard {...offer}/>
          })
        }
       
      </div>
      </>
    )
  }

export default Body;
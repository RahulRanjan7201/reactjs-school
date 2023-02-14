import { useEffect, useState } from "react";
import {  offerlist } from "../config";
import OffersCard from "../components/OfferCard";
import Shimmer from "../components/Shimmer";

function filterData(searchText, offerlist) {
 const data =  offerlist.filter(offer => offer?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()))
 console.log(data)
 return data;
}
const Body = () => {
    const [searchText, setSearchTest] = useState("");
    let [searchClicked, setSearchClicked] = useState(false);
    const [offers, setOffers] = useState([])
    const [filterOffer, setFilterOffer] = useState([])
    useEffect(() => {
      getOffers();
    },[])

    async function getOffers() {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
      const json = await data.json()
      setOffers(json?.data?.cards[2]?.data?.data?.cards)
      setFilterOffer(json?.data?.cards[2]?.data?.data?.cards)
    }
    if(!offers) return <h1>All offers are not there</h1>
    if(filterOffer?.length ==0 && offers?.length !=0) return <h1>No Match Found</h1>
    return (offers?.length ===0 )? <Shimmer/> : (
        <>
        <div className="search-container">
            <input type="text" placeholder="search" value={searchText} onChange={(e)=> setSearchTest(e.target.value)}/>
            <button className="search-btn" onClick={() =>{
              searchClicked = !searchClicked
              setSearchClicked(searchClicked)
             const data =  filterData(searchText, offers)
             setFilterOffer(data)
            } }>Search</button>
        </div>
      <div className="offer-list">
        {
          filterOffer.map(offer => {
            return <OffersCard {...offer.data}/>
          })
        }
       
      </div>
      </>
    )
  }

export default Body;
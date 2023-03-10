import { useEffect, useState } from "react";
import {  offerlist } from "../config";
import OffersCard from "../components/OfferCard";
import Shimmer from "../components/Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";


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
    let isOnline = useOnline(); 
    if(!isOnline) {
      return <h1>🔴Please check your internet connection</h1>
    }
    if(!offers) return <h1>All offers are not there</h1>
    if(filterOffer?.length ==0 && offers?.length !=0) return <h1>No Match Found</h1>
    const searchButtonCss = {
      backgroundColor:"red"
    }
    return (offers?.length ===0 )? <Shimmer/> : (
        <>
        <div className="search-container p-5 bg-pink-50 my-5">
            <input className="focus:bg-green-200 p-2 m-2" type="text" placeholder="search" value={searchText} onChange={(e)=> setSearchTest(e.target.value)}/>
            <button className="p-2 m-2 bg-purple-800 text-white rounded-md" onClick={() =>{
              searchClicked = !searchClicked
              setSearchClicked(searchClicked)
             const data =  filterData(searchText, offers)
             setFilterOffer(data)
            } }>Search</button>
        </div>
      <div className="flex flex-wrap">
        {
          filterOffer.map(offer => {
            return (
              <Link to={"offer/"+ offer.data.id}>
                 <OffersCard {...offer.data}/>
              </Link>
            )
            
           
          })
        }
       
      </div>
      </>
    )
  }

export default Body;
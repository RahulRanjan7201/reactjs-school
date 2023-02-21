import { useEffect, useState } from "react";
import { FETCH_MENU } from "../config";

const useOffer =  (id) => {
    const [offer, setOffer] = useState(null)
    useEffect(() => {
        getOfferInfo();
      },[]);
      async function getOfferInfo() {
        const data = await fetch(FETCH_MENU +
              id
          );
        const json =  await data.json();
        setOffer(json.data);
      }
    return offer;
   
}
export default useOffer;
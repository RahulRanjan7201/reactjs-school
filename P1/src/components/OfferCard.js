import { useContext } from "react";
import { imageCDNURL } from "../config";
import UserContext from "../utils/userContext";

const OffersCard = ({
   name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString,
  }) => {
    const {user} = useContext(UserContext)
    return (
      <div className="w-56 p-2 m-2 shadow bg-pink-50">
        <img src={imageCDNURL + cloudinaryImageId} />
        <h2 className="font-bold text-1xl">{name}</h2>
        <h3>{cuisines?.join(", ")}</h3>
        <h4>{lastMileTravelString} minutes</h4>
        <h5 className="font-bold">Your Name {user?.name} - {user?.email}</h5>
      </div>
    );
};
export default OffersCard
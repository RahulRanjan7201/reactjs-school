import { imageCDNURL } from "../config";

const OffersCard = ({
   name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString,
  }) => {
    return (
      <div className="w-56 p-2 m-2 shadow bg-pink-50">
        <img src={imageCDNURL + cloudinaryImageId} />
        <h2 className="font-bold text-1xl">{name}</h2>
        <h3>{cuisines?.join(", ")}</h3>
        <h4>{lastMileTravelString} minutes</h4>
      </div>
    );
};
export default OffersCard
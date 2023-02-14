import { imageCDNURL } from "../config";

const OffersCard = ({
   name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString,
  }) => {
    return (
      <div className="offers-cart">
        <img src={imageCDNURL + cloudinaryImageId} />
        <h2>{name}</h2>
        <h3>{cuisines?.join(", ")}</h3>
        <h4>{lastMileTravelString} minutes</h4>
      </div>
    );
};
export default OffersCard
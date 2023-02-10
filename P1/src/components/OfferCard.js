import { imageCDNURL } from "../config";

const OffersCard =({name, rating, cusines}) => {
  return (
    <div className="offers-cart">
      <img   src={imageCDNURL} alt="Icon"/>
      <h2>{name}</h2>
      <h3>{cusines.join(" , ")}</h3>
      <h4>{rating} stars</h4>
    </div>
  )
}
export default OffersCard
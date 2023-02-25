import { useContext } from "react";
import UserContext from "../utils/userContext";

const Footer = () => {
  const {user}  = useContext(UserContext)
    return (
      <h4 className="p-10 m-10 font-bold  text-red-900">Hi {user?.email} - {user?.name}</h4>
    )
  }
  export default Footer;
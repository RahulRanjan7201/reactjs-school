import { createContext } from "react";

const UserContext = createContext(
    {
    user: {
    name:"Dummay Name",
    email:"Dummay@email"
    }
})

export default UserContext;
import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunctionComponent from './Profile'
import React from "react";
// const About2 = () => {
//     return (
//         <div>
//             <h1>About us Page</h1>
//             <p>This is the New daily service provider</p>
//             <ProfileFunctionComponent name={"Rahul"}/>
//             <Profile name={"Rahul"}/>
//             <Outlet/>
//         </div>
//     )
// }
class About extends React.Component {
    constructor(props) {
        super(props)
        console.log("constructor")
    }
    async componentDidMount(){
        console.log("Compount did mount")
    }
    render() {
        console.log("render")
        return (
            <div>
            <h1>About us Page</h1>
            <p>This is the New daily service provider</p>
            <ProfileFunctionComponent name={"Rahul"}/>
            <Profile name={"Rahul"}/>
            <Outlet/>
        </div>
        )
    }
}
export default About;
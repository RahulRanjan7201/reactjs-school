import React from "react";
class Profile extends React.Component {
    // State Management 
    constructor(props) {
        super(props)
        // create state
        this.state = {
            count:0,
            userInfo:{
            }
        }
    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/RahulRanjan7201")
        const json  = await data.json();
        console.log(json)
        this.setState({
            userInfo:json
        })
        console.log("Compo0nent did mount")
    }
    componentDidUpdate() {
        console.log("Component did update ")
    }
    render() {
        console.log("Render")
        return (
            <>
            <h1>Profile</h1>
            <img src={this.state.userInfo.avatar_url}/>
            <h2>Name : {this.state.userInfo.name}</h2>
            <h2>Bio : {this.state.userInfo.bio}</h2>
            <h2>Location : {this.state.userInfo.location}</h2>
            </>
        )
    }
}
export default Profile;
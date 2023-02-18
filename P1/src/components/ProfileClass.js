import React from "react";
class Profile extends React.Component {
    // State Management 
    constructor(props) {
        super(props)
        // create state
        this.state = {
            count:0,
            userInfo:{
                name:"Hello"
            }
        }
    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/RahulRanjan7201")
        const json  = await data.json();
        this.setState({
            userInfo:json
        })
        console.log("Compo0nent did mount")
    }
    render() {
        console.log("Render")
        return (
            <>
            <h1>Profile Class Component {this.props.name} {this.state.userInfo.name}</h1>
            <button onClick={() => {
                this.setState({
                    count:1
                })
            }}>Click</button>
            </>
        )
    }
}
export default Profile;
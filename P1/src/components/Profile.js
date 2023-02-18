import React, { useState } from 'react'

 const Profile = (props) => {
    const {name} = props;
    const [counter, setCounter] = useState("0")
  return (
    <div>
        <h1>Profile Component {name} {counter}</h1>
    </div>
  )
}
export default Profile;

import React from "react"
const PeopleInformation = (people) => {
    const divStyle = {
        display: "flex",
        margin: "10px",
        height: "100px"
    }
    const nameStyle = {
        fontWeight: "bolder"
    }
    const emailStyle = {
        weight: "300px"

    }
    return (
        <div style={divStyle}>
            <img src={people.picture} alt="pfp"/>
            <div >
                <p style={nameStyle}>{people.name}</p>
                <p style={emailStyle}>{people.email}</p>
            </div>
        </div>
    )
  }

  export default PeopleInformation
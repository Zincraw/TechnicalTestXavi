import React, { useState, useEffect } from 'react'
import PeopleInformation from './PeopleInformation'
import axios from "axios"

const baseURL = "https://randomuser.me/api/?results=5"
let counter = 0

const PeopleContainer = () => {  
  const [post, setPost] = useState(null)
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data.results)
    })
  }, [])
    const handleAddUser = () => {
      if(counter === post.length){
        setUsers([])
        counter = 0
      } else {
      const newUser = {
        name: post[counter].name.first + ' ' + post[counter].name.last ,
        picture: post[counter].picture.large,
        email: post[counter].email
      }
      setUsers([...users, newUser])
      counter++
    }}
    return (
        <div>
          <div>
            <button onClick={handleAddUser}>Click here to add a new person</button>
          </div>
          {users.map((person, index) =>{
                return (
                    <PeopleInformation key={index} name={person.name} picture={person.picture} email={person.email}/>
                )
            })}
        </div>
    )
  }
  
  export default PeopleContainer
  
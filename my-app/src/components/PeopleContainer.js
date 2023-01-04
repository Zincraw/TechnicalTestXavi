import React, { useState } from 'react'
import PeopleInformation from './PeopleInformation'
import { people } from '../data/DataSamplePeople'

let counter = 0

const PeopleContainer = () => {  
  const [users, setUsers] = useState([])
    const handleAddUser = () => {
      if(counter === people.length){
        setUsers([])
        counter = 0
      } else {
      const newUser = {
        name: people[counter].name.first + ' ' + people[counter].name.last ,
        picture: people[counter].picture.large,
        email: people[counter].email
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
  
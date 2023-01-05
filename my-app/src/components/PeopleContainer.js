import React, { useState } from 'react'
import PeopleInformation from './PeopleInformation'
import { people } from '../data/DataSamplePeople'

const PeopleContainer = () => {  
  const [counter, setCounter] = useState(0)
    const handleAddUser = () => {
      if(counter === people.length)
        setCounter(0)
       else 
        setCounter(counter + 1)
    }
    return (
        <div>
          <div>
            <button onClick={handleAddUser}>Click here to add a new person</button>
          </div>
          {people.filter((_, index) => index < counter).map((person, index) =>{
                return (
                    <PeopleInformation key={index} name={person.name.first + ' ' + person.name.last} picture={person.picture.large} email={person.email}/>
                )
            })}
        </div>
    )
  }
  
  export default PeopleContainer
  
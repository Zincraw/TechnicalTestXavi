import React from 'react'
import PeopleInformation from './PeopleInformation'
import { people } from '../data/DataSamplePeople'

const PeopleContainer = () => {       
    return (
        <div className="row">
            {people.map((person, index) =>{
                return (
                    <PeopleInformation key={index}  name={person.name.first + ' ' + person.name.last } picture={person.picture.large} email={person.email}/>
                )
            })}
        </div>
    )
  }

export default PeopleContainer
  
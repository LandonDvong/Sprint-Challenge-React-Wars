import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PeopleCard from './PeopleCard';

const PeopleList = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        axios
        .get("https://swapi.co/api/people/")
        .then(res => {
            setPeople(res.data.results);
            console.log(res.data.results);

        })
        .catch(err => {
            console.log(err);
        });
}, [])


return (
    <div>
        {people.map(people => {
            return <PeopleCard name={people.name} mass ={people.mass} height={people.height} hair_color={people.hair_color}/>
        })}
    </div>
)
    };
    export default PeopleList;
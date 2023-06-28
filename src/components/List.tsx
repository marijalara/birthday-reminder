import React from "react";
import { PropsPeople} from './App';

interface PropsList {
    people: PropsPeople[]
}

const List: React.FC<PropsList>=({people}) => {
    return(
        <>
        {people.map((person) => (
            <div className="list" key={person.id}>
                <img src={person.image} alt={person.name} />
                <div className="person">
                    <h3>{person.name}</h3>
                    <p>{person.age} years</p>
                </div>
            </div>
        ))}
        </>
    )
}

export default List
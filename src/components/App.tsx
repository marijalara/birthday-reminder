import React, { useState } from 'react';
import { Container } from '@mui/material';
import Button from './Button';
import List from './List';
import { data } from '../data';

export interface PropsPeople {
    id: number,
    name: string,
    age: number,
    image: string
}
const App: React.FC= () => {
    const [people, setPeople]=useState<PropsPeople[]>(data)
    return (
        <div className='App'>
            <Container maxWidth="sm" className='container'>
                <h2 className='header'>{people.length} birthdays today</h2>
                <List people={people}/>
                <Button setPeople={setPeople}/>
            </Container>
        </div>
    )
}

export default App
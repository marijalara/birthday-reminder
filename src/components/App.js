import React, { useState } from 'react';
import { Container } from '@mui/material';
import Button from './Button';
import List from './List';
import { data } from '../data';

const App = () => {
    const [people, setPeople]=useState(data)
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
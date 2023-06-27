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
                <h2 className='header'>birthdays today</h2>
                <List people={people}/>
                <Button />
            </Container>
        </div>
    )
}

export default App
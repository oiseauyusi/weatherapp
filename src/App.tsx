import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Weather from './components/fetch-display-wether';
import './components/styles.css';


const App: React.FC = () => {
    return (
        <Container>
            <Weather />
        </Container>
    );
};

export default App;

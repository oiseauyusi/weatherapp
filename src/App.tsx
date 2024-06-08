import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Weather from './components/fetch-display-wether';
import { TextField, Button, Typography, Paper, Box, colors } from '@mui/material';
import './components/styles.css';


const App: React.FC = () => {
    const [isFavoritesVisible, setIsFavoritesVisible] = useState(false);

    const toggleFavorites = () => {
        setIsFavoritesVisible(!isFavoritesVisible);
    };

    return (
        <Container>
            <Weather />
        </Container>
    );
};

export default App;

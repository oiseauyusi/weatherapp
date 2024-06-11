import React from 'react';
import './Favorites.css';
import { Box, Typography, Button } from '@mui/material';
import { FavoritesProps } from './FavoritesInterface';
import { DeleteCityButton } from './DeleteCityButton';


// FIXME: Be consistent if interface are in eseparate modules keep it in separate modules
// Moved

const Favorites: React.FC<FavoritesProps> = ({ isVisible, savedCities, onDeleteCity }) => {
    // TODO: Check good practices about global variables with default values. Eg: const defaultFavorite: string = ""   <Box className={`favorites-card ${isVisible ? 'visible' : defaultFavorite}`}>
    // https://www.geeksforgeeks.org/why-to-avoid-global-variables-in-javascript/
    // https://medium.com/@gecno/best-practices-for-initialising-variables-in-javascript-a26844455f8e
    // 
    // Is it good practice to use global variables in JavaScript?
    // Still, it is recommended to avoid the usage of global variables as much as possible and instead use function scoped or block-scoped variables (local scoped).

    // After checking remove TODO and add comment with best practices or refactor
    return (
        <Box className={`favorites-card ${isVisible ? 'visible' : ''}`}>
            <Typography variant='h5' className="title">Favorite Cities</Typography>
            <Box marginTop={2}>
            {
            // FIXME: move this function to more readable place and maybe refactor? - more readable == not in return
            savedCities.map((cityData, index) => (
                <Box key={index} className="city-info">
                    <Box className="city-details">
                        <Box>
                            <Typography variant="h6">{cityData.name}, {cityData.sys.country}</Typography>
                            <Typography variant="body1">Temp: {Math.round(cityData.main.temp)}°C</Typography>
                            <Typography variant="body1">Humidity: {cityData.main.humidity}%</Typography>
                            <Typography variant="body1">Wind: {cityData.wind.speed} m/s</Typography>
                            <Typography variant="body1">Description: {cityData.weather[0].description}</Typography>
                            <Typography variant="body1">Date: {cityData.savedDate}</Typography>
                        </Box>
                        <DeleteCityButton onClick={() => onDeleteCity(cityData.name)}/>
                    </Box>
                </Box>
            ))}
            </Box>
        </Box>
    );
};

export default Favorites;
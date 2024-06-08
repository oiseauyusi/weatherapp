import React from 'react';
import './Favourites.css';
import { Box, Typography, Button } from '@mui/material';
import { WeatherData } from '../Weather/WeatherInterface';
import ClearIcon from '@mui/icons-material/Clear';


interface FavoritesProps {
    isVisible: boolean;
    savedCities: WeatherData[];
    onDeleteCity: (cityName: string) => void;
}

const Favorites: React.FC<FavoritesProps> = ({ isVisible, savedCities, onDeleteCity }) => {
    return (
        <Box className={`favorites-card ${isVisible ? 'visible' : ''}`}>
            <Typography variant='h5' className="title">Favorite Cities</Typography>
            <Box marginTop={2}>
            {savedCities.map((cityData, index) => (
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
                        <Button  
                            color="error"
                            onClick={() => onDeleteCity(cityData.name)}
                        >
                            <ClearIcon/>
                        </Button>
                    </Box>
                </Box>
            ))}
            </Box>
        </Box>
    );
};

export default Favorites;
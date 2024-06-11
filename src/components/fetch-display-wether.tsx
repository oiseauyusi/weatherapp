import React, { useState } from 'react';
import './styles.css';
import { Typography, Paper, Box, Button } from '@mui/material';
import { EmptyCityError } from './CustomErrors';
import { WeatherData } from './Weather/WeatherInterface';
import { ForecastData } from './Forecast/ForecastInterface';
import { WeatherDisplay, getWhetherDetails } from './Weather/WeatherDisplay';
import { Forecast, getForecastDetails } from './Forecast/5DaysForecast';
import SearchBar from './SearchBar/SearchBar';
import SearchButton from './SearchBar/SearchButton';
import Favorites from './Favourites/EjectButton';


const Weather: React.FC = () => {
    const [city, setCity] = useState<string>('');
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [forecastData, setForecastData] = useState<ForecastData[] | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [currentDate, setCurrentDate] = useState<string>(''); 
    const [isFavoritesVisible, setIsFavoritesVisible] = useState(false);
    const [savedCities, setSavedCities] = useState<WeatherData[]>([]);


    const fetchWeather = async () => {
        try {
            const wheatherDetails = await getWhetherDetails(city)
            const forecastDetails = await getForecastDetails(city);
            //console.log(wheatherDetails)
            setWeatherData(wheatherDetails);
            setForecastData(forecastDetails);
            setError(null);
            setCurrentDate(new Date().toLocaleDateString());
        } catch (err) {
            if (err instanceof EmptyCityError) {
                setError('City name cannot be empty!');
            } else {
                setError('City not found!');
                setWeatherData(null);
                setForecastData(null);
            }
        }
    };

    const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newCity = event.target.value;
        setCity(newCity);
        if (!newCity.trim()) {
            setError('City name cannot be empty!');
        } else {
            setError(null);
        }
    };

    const toggleFavorites = () => {
        setIsFavoritesVisible(!isFavoritesVisible);
    };


    const handleSaveCity = (cityData: WeatherData) => {
        setSavedCities(prevSavedCities => {
            if (!prevSavedCities.find(city => city.name === cityData.name)) {
                return [...prevSavedCities, cityData];
            }
            return prevSavedCities;
        });
    };

    const handleDeleteCity = (cityName: string) => {
        setSavedCities(prevSavedCities => prevSavedCities.filter(city => city.name !== cityName));
    };


    return (
        <Paper className='paper'>
            <Button variant="contained" onClick={toggleFavorites}>{isFavoritesVisible ? "Hide Favorites" : "Show Favorites"}</Button>
            <Favorites isVisible={isFavoritesVisible} savedCities={savedCities} onDeleteCity={handleDeleteCity}/>
            <Typography variant="h2" className='title'>Weather App</Typography>
            <Box className="search-bar-button">
                <SearchBar city={city} handleCityChange={handleCityChange}/>
                <SearchButton fetchWeather={fetchWeather}/>
            </Box>
            <WeatherDisplay data={weatherData} error={error} currentDate={currentDate} onSaveCity={handleSaveCity}/>
            <Forecast data={forecastData} />
        </Paper>
    );
};

export default Weather;
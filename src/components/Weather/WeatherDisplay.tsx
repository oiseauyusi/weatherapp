import React from 'react';
import { Box, Typography } from '@mui/material';
import { WeatherDisplayProps } from './WeatherInterface';
import './WeatherDisplay.css'
import WeatherIcon from './WeatherIcon';
import axios from 'axios';
import { EmptyCityError, WheatherApiDead } from '../CustomErrors';
import { SaveCityButton } from '../Favourites/SaveCityButton';


const config = require("../../config.json");
const apiKey: string = config["wheather-api"]["api-key"];
const weatherUrl = config["wheather-api"]["url"];

export async function getWhetherDetails(city: string) {

    if (!city) {
        console.log(`Provided empty city!`)
        throw new Error('Provided empty city!')
    }

    try {
        console.log(`Getting whether information for city: '${city}'`)
        // FIXME: Change response when status code returned is >= 500 then return that wheather api is not working correctly when 400<=status<500 return correct responses (404, 400 etc)
        // Done
        const response = await axios.get(`${weatherUrl}?q=${city}&appid=${apiKey}&units=metric`);
        console.log("status od response jest traki jak po prawej ---->", response.status)
        return response.data
    } catch (err) {
        if (axios.isAxiosError(err)) {
            if (err.response) {
                switch (err.response.status) {
                    case 400:
                        throw new Error('400 Bad Request: The request was unacceptable.');
                    case 401:
                        throw new Error('401 Unauthorized: Invalid API key.');
                    case 403:
                        throw new Error('403 Forbidden: You do not have access to this resource.');
                    case 404:
                        throw new Error('404 Not Found: The city was not found.');
                    case 500:
                        throw new Error('500 Internal Server Error: Something went wrong on the server.');
                    default:
                        throw new Error(`Unexpected error: ${err.response.status}`);
                }
            } else {
                throw WheatherApiDead;
            }
        } else {
            throw WheatherApiDead;
        }
    }
}

export const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ data, error, currentDate, onSaveCity }) => {
    const handleSaveCity = () => {
        if (data) {
            onSaveCity({ ...data, savedDate: currentDate });
        }
    };

    return (
        <>
            {error && (<Typography className='error'>{error}</Typography>)}
            {data && (
                <Box>
                    <SaveCityButton onClick={handleSaveCity} />
                    <Box display="flex">
                        <Box className="city-name-code-temp">
                            <WeatherIcon icon={data.weather[0]?.icon} />
                            <Box>
                                <Typography variant="h4">{data.name}, {data.sys.country} {Math.round(data.main?.temp)}°C</Typography>
                            </Box>
                        </Box>
                        <Box className="box-description-date">
                            <Typography variant='h4'>Weather</Typography>
                            <Typography variant='h6' className='description-date'> {data.weather[0]?.description}</Typography>
                            <Typography variant='h6' className='description-date'> {currentDate} </Typography>
                        </Box>
                    </Box>
                        <Typography variant='h6'>Humidity: {data.main?.humidity}%</Typography>
                        <Typography variant='h6'>Feels like: {Math.round(data.main?.feels_like)}°C</Typography>
                        <Typography variant='h6'>Wind speed: {data.wind?.speed}m/s</Typography>
                        <Typography variant='h5' className='forecast-title'>5 DAYS FORECAST</Typography>
                </Box>
            )}
        </>
    );
};
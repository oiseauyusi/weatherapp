import { Box, Typography } from '@mui/material';
import { getWeatherIcon } from './ForecastIcon';
import './Forecast.css'
import { ForecastProps } from './ForecastInterface'
import { ForecastData } from '../Forecast/ForecastInterface';
import axios from 'axios';


const config = require("../../config.json");
const apiKey: string = config["wheather-api"]["api-key"];
const forecastUrl = config["forecast-api"]["url"];

export async function getForecastDetails(city: string, days: number = 5) {
  try {
      const response = await axios.get(`${forecastUrl}?q=${city}&appid=${apiKey}&units=metric`);
      const data = response.data;
      const forecastMap: { [key: string]: ForecastData } = {};
      const currentDate = new Date().toISOString().split('T')[0];

      data.list.forEach((item: any) => {
          const date = item.dt_txt.split(' ')[0];
          if (!forecastMap[date] && date !== currentDate) {
              forecastMap[date] = {
                  date,
                  temperature: Math.round(item.main.temp),
                  description: item.weather[0].description,
                  icon: item.weather[0].icon,
              };
          }
      });

      const processedData: ForecastData[] = Object.values(forecastMap);
      return processedData.slice(0, days);
  } catch (err) {
      console.error('Error fetching the forecast data:', err);
      throw err;
  }
}

// FIXME: make the forecast days number adjustable variable - what if i want to display 7 days?
// max 5 forecast days https://openweathermap.org/price 
/**
 * Forecast component displays the weather forecast for 5 days.
 * 
 * @param ForecastProps - The props for the Forecast component.
 * @param data - An array of weather data objects for each day.
 * @returns date, icon, temperature, weather description
 */
export const Forecast: React.FC<ForecastProps> = ({ data }) => {

  return (
    <Box className='forecast-content'>
      <Box className='forecast-place'>
        {data?.map((day) => (
          <Box key={day.date} className='forecast-box'>
            <Typography variant="h6">{day.date}</Typography>
            {getWeatherIcon(day.icon, day.description)}
            <Typography variant="body1">{day.temperature}°C</Typography>
            <Typography variant="body2">{day.description}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};


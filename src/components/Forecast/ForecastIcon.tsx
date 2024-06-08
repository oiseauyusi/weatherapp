import { CardMedia } from '@mui/material';
import './Forecast.css'

/**
 * Returns the appropriate weather icon based on the provided icon and description.
 *
 * @param icon - The icon code representing the weather condition.
 * @param description - The description of the weather condition.
 * @returns The JSX element for the weather icon.
 */
export const getWeatherIcon = (icon: string, description: string) => {
    return (
        <CardMedia
            component="img"
            image={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={description}
            title={description}
            className='weather-icon'
        />
    );
};
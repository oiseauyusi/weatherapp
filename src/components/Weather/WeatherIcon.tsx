import React from 'react';
import { WeatherIconProps } from './WeatherInterface';

// FIXME: BE CONSISTENT
// Moved

/**
 * WeatherIcon component renders an image of the weather icon based on the provided icon code.
 *
 * @param WeatherIconProps - The props for the WeatherIcon component.
 * @param props.icon - The icon code representing the weather condition.
 * @returns Renders an image of the weather icon based on the provided icon code.
 */
const WeatherIcon: React.FC<WeatherIconProps> = ({ icon }) => {
    const getWeatherIconUrl = (icon: string) => `http://openweathermap.org/img/wn/${icon}@2x.png`;
    
    return (
        <img
            src={icon ? getWeatherIconUrl(icon) : ''}
            alt="Weather Icon"
        />
    );
};

export default WeatherIcon;
import React from 'react';

// FIXME: BE CONSISTENT
/**
 * Props for the WeatherIcon component.
 *
 * @property icon - The icon code representing the weather condition.
 */
interface WeatherIconProps {
    icon: string | undefined;
}

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
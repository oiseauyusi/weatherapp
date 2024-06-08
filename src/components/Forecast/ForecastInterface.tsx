/**
 * Represents the weather data for a single day.
 *
 * @property date - The date of the forecast.
 * @property temperature - The temperature for the day in degrees Celsius.
 * @property description - A brief description of the weather.
 * @property icon - The icon code representing the weather condition.
 */
export interface ForecastData {
    date: string;
    temperature: number;
    description: string;
    icon: string;
}

/**
 * Props for the Forecast component.
 *
 * @interface ForecastProps
 * @property data - An array of weather data objects for each day.
 */
export interface ForecastProps {
    data: ForecastData[] | null;
}
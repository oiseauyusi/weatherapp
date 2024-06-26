export interface WeatherData {
    main: {
        temp: number;
        humidity: string;
        feels_like: number;
    };
    weather: {
        description: string;
        icon: string;
    }[];
    name: string;
    sys: {
        country: string;
    };
    wind: {
        speed: number;
    };
    savedDate?: string;
}

export interface WeatherDisplayProps {
    data: any;
    error: string | null;
    currentDate: string;
    onSaveCity: (cityData: any) => void;
}

/**
 * Props for the WeatherIcon component.
 *
 * @property icon - The icon code representing the weather condition.
 */
export interface WeatherIconProps {
    icon: string | undefined;
}

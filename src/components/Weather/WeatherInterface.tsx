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
    data: WeatherData | null;
    error: string | null;
    currentDate: string;
    onSaveCity: (cityData: WeatherData) => void;
}

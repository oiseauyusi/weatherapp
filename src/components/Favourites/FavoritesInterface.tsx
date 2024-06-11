import { WeatherData } from "../Weather/WeatherInterface";

export interface FavoritesProps {
    isVisible: boolean;
    savedCities: WeatherData[];
    onDeleteCity: (cityName: string) => void;
}

export interface StarIconButtonProps {
    onClick: () => void;
}

export interface DeleteCityButtonProps {
    onClick: () => void;
}
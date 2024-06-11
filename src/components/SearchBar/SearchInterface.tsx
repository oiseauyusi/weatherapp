/**
 * Props for the SearchButton component.
 *
 * @property fetchWeather - The function to call when the button is clicked.
 */
export interface SearchButtonProps {
    fetchWeather: () => void;
}

/**
 * Props for the SearchBar component.
 *
 * @property city - The current value of the city input.
 * @property handleCityChange - The function to call when the city input value changes.
 */
export interface SearchBarProps {
    city: string;
    handleCityChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
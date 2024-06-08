import React from 'react';
import TextField from '@mui/material/TextField';


/**
 * Props for the SearchBar component.
 *
 * @property city - The current value of the city input.
 * @property handleCityChange - The function to call when the city input value changes.
 */
interface SearchBarProps {
    city: string;
    handleCityChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * SearchBar allows you to enter a city.
 *
 * @param props - The props for the SearchBar component.
 * @param props.city - The current value of the city input.
 * @param props.handleCityChange - The function to call when the city input value changes.
 * @returns renders a search bar that allows you to enter a city.
 */
const SearchBar: React.FC<SearchBarProps> = ({ city, handleCityChange }) => {
    return (
        <TextField
            label="City"
            value={city}
            onChange={handleCityChange}
            fullWidth
            margin="normal"
            size="medium"
        />
    );
};

export default SearchBar;
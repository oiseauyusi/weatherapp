import React from 'react';
import Button from '@mui/material/Button';

// TODO: What does "props" mean?
// FIXME: You want to keep interfaces in separate files or above the functions that implemeents it? Be consistent
/**
 * Props for the SearchButton component.
 *
 * @property fetchWeather - The function to call when the button is clicked.
 */
interface SearchButtonProps {
    fetchWeather: () => void;
}

/**
 * SearchButton component renders a button that triggers a weather fetch operation when clicked.
 *
 * @param SearchButtonProps - The props for the SearchButton component.
 * @param props.fetchWeather - The function to call when the button is clicked.
 * @returns A clickable button 
 */
const SearchButton: React.FC<SearchButtonProps> = ({ fetchWeather }) => {

    const sxButton = { height: '40px' }

    return (
        <Button variant="contained" onClick={fetchWeather} sx={sxButton}> Search </Button>
    );
};

export default SearchButton;
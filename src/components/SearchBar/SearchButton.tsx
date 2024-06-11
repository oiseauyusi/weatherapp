import React from 'react';
import Button from '@mui/material/Button';
import { SearchButtonProps } from './SearchInterface';

// TODO: What does "props" mean?
// ForecastProps is an interface that defines the properties (props) that are passed to a Forecast 
// component in a React application. It specifies the structure and types of the data that the Forecast 
// component expects to receive.

// FIXME: You want to keep interfaces in separate files or above the functions that implemeents it? Be consistent
// Moved

/**
 * SearchButton component renders a button that triggers a weather fetch operation when clicked.
 *
 * @param SearchButtonProps - The props for the SearchButton component.
 * @param props.fetchWeather - The function to call when the button is clicked.
 * @returns A clickable button 
 */
const SearchButton: React.FC<SearchButtonProps> = ({ fetchWeather }) => {
    return (
        <Button variant="contained" onClick={fetchWeather}> Search </Button>
    );
};

export default SearchButton;
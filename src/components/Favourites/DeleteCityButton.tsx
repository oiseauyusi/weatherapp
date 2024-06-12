import { DeleteCityButtonProps } from './FavoritesInterface';
import { Button } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';


export const DeleteCityButton: React.FC<DeleteCityButtonProps> = ({ onClick }) => {
    return (
        <Button color="error" onClick={onClick}> <ClearIcon /> </Button>
    );
};
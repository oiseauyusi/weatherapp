import { Button } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import { StarIconButtonProps } from "./FavoritesInterface";


export const SaveCityButton: React.FC<StarIconButtonProps> = ({ onClick }) => {
    return (
        <Button
            color='warning'
            variant="contained"
            sx={{ height: '40px' }}
            onClick={onClick}
        >
            <StarIcon />
        </Button>
    );
};
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
function StarRating(props) {
    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Box sx={{
                    mr:1,
                    alignItems: "center"
                }}>Rating    {props.rating}</Box>
                <Rating name="half-rating-read" defaultValue={props.rating} precision={0.1} readOnly />
                <Box sx={{ ml: 2 }}>({props.count})</Box>
            </Box>
        </div>
    )
}
export default StarRating
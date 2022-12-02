import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarRating from '../ratings/index'
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{}}>
      <CardMedia
        component="img"
        width="512px"
        height="512px"
        image={props.data.image}
        alt="Image"
        sx={{objectFit: "fill"}}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {props.data.title}({props.data.category})
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Box sx={{mr:8}}>{"$"}{props.data.price}</Box>
        <StarRating rating={props.data.rating.rate} count={props.data.rating.count}></StarRating>
        <Tooltip title="Description">
                    <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                    </ExpandMore>
                </Tooltip>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {props.data.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedCard = ({article}) => {
    const {title, image, date, info} = article;
    const maxCharacters = 150;
    const truncatedInfo = info.length > maxCharacters ? info.substring(0, maxCharacters) + '....' : info;
    return (
        <Card>
            <CardMedia component="img" alt="image not found" height="200px" image={image}/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {truncatedInfo}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">{date}</Button>
                <Button size="small"><Link to="/details">Read More</Link></Button>
            </CardActions>
        </Card>
    );
};

export default FeaturedCard;
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedCard = ({article}) => {
    const {title, image, date, info} = article;
    return (
        <Card>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {info}
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
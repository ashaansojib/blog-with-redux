import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedCard = () => {
    return (
        <Card>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://images.wondershare.com/drfone/article/2022/08/how-to-bypass-icloud-activation-lock-screen-on-ios-16-01.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small"><Link to="/details">Learn More</Link></Button>
            </CardActions>
        </Card>
    );
};

export default FeaturedCard;
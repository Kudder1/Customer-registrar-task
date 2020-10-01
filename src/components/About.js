import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

export default function About() {
    return (
        <>
            <Card>
                <CardMedia
                    image="https://avatars2.githubusercontent.com/u/45853973?s=460&u=d7a6ce31b7ecb5f8c6fd03781871cfc2834fa298&v=4"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="h1">
                        Vladimir Fishelev
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                        I'm a passionate front-end developer with sufficient experience in websites development. I'm fond of billiards, chess and sport exercices.
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}

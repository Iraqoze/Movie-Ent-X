import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Movie({ movie }) {
    return (
        <Link to={`/watch/${movie.id}`}>
            <Card sx={{ maxWidth: 365, marginRight: 2 }}>
                <CardMedia
                    component='img'
                    height='300'
                    image={movie.thumbnailImage}
                    alt={movie.title}
                />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                        {movie.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {movie.description}
                    </Typography>
                </CardContent>
            </Card>

        </Link>

    )
}

export default Movie
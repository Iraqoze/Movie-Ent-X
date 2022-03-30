import { Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import { state } from '../store'

function Category({ title, id }) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios
            .get(`https://localhost:7067/api/movies/getMovies`)
            .then(res => {
                state.movies = res.data
                let moviesData = res.data.filter(movie => movie.categoryId === id
                )

                setMovies(moviesData)

            })

    }, [id])
    return (
        <Container>
            <Typography variant="h3">{title} </Typography>
            <Grid container spacing={2}>
                {movies && movies.map(movie =>
                    <Grid item xs={12} sm={6} md={4} sx={{ marginBottom: 10 }}>

                        <Movie movie={movie} />

                    </Grid>
                )}

            </Grid>
        </Container>
    )
}

export default Category
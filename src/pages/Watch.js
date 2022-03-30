import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Iframe from 'react-iframe'
import { useParams } from 'react-router-dom'
import { useSnapshot } from 'valtio'
import Navbar from '../components/Navbar'
import { state } from '../store'

function Watch() {
    const snap = useSnapshot(state)
    const { id } = useParams()
    const movieArr = snap.movies.filter(movie => movie.id === id)
    const movie = movieArr[0]

    console.log("The movie: ", movie);
    return (
        <Box className='section-2'>
            <Navbar />
            <Grid container
                direction="column"
                alignItems="center"
            >

                {movie &&
                    <Iframe url={movie.videoLink}
                        position="absolute"
                        width="90%"
                        id={movie.id}
                        className="myClassname"
                        height="80%"
                        styles={{ height: "25px" }} />
                }

                <Typography variant='h3' sx={{ color: "inherit", margin: "10px 0" }}>{movie.title} ({movie.releaseDate.substring(0, 4)})</Typography>
            </Grid>



        </Box>

    )
}

export default Watch
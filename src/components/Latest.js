import {
	Box,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from '@mui/material'
import React from 'react'

function Latest() {
	return (
		<Box>
			<Typography variant='h4' sx={{ marginBottom: 2 }}>
				Latest Movies
			</Typography>
			<Grid container>
				<Grid item sx={12} sm={6} md={4}>
					<Card sx={{ maxWidth: 365, marginRight: 2 }}>
						<CardMedia
							component='img'
							height='300'
							image='https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
							alt='green iguana'
						/>
						<CardContent>
							<Typography gutterBottom variant='h5' component='div'>
								The Gully Creeper
							</Typography>
						</CardContent>
					</Card>
				</Grid>

				<Grid item sx={12} sm={6} md={4}>
					<Card sx={{ maxWidth: 365, marginRight: 2 }}>
						<CardMedia
							component='img'
							height='300'
							image='https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
							alt='green iguana'
						/>
						<CardContent>
							<Typography gutterBottom variant='h5' component='div'>
								The Gully Creeper
							</Typography>
						</CardContent>
					</Card>
				</Grid>

				<Grid item sx={12} sm={6} md={4}>
					<Card sx={{ maxWidth: 365, marginRight: 2 }}>
						<CardMedia
							component='img'
							height='300'
							image='https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
							alt='green iguana'
						/>
						<CardContent>
							<Typography gutterBottom variant='h5' component='div'>
								The Gully Creeper
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Box>
	)
}

export default Latest

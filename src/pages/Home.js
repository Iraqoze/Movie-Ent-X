import { Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Latest from '../components/Latest'
import Navbar from '../components/Navbar'
import Category from '../components/Category'
import Upcoming from '../components/Upcoming'
import { useNavigate } from 'react-router-dom'
import { useSnapshot } from 'valtio'
import { state } from '../store'
import Iframe from 'react-iframe'

function Home() {
	const navigate = useNavigate()
	const snap = useSnapshot(state)
	const [categories, setCategories] = useState([])

	if (!snap.user) {
		navigate('/login')
	}

	useEffect(() => {
		window.scrollTo(0, 0)
		axios
			.get('https://localhost:7067/api/categories/getcategories')
			.then((res) => setCategories(res.data))
			.catch((err) => console.log("Err fetching", err))
	}, [])

	return (
		<Box>
			<Box className='section-2'>
				<Navbar />
				<Grid container
					direction="column"
					alignItems="center"
				>
					<Iframe url={snap.movies[0].videoLink}
						position="absolute"
						width="90%"
						id={snap.movies[0].id}
						className="myClassname"
						height="80%"
						styles={{ height: "25px" }} />
				</Grid>

				<Box sx={{ marginTop: '85vh' }}>
					{categories && categories.map(cat =>
						<Category title={cat.title} id={cat.id} />
					)}
				</Box>


			</Box>
			<Container sx={{ marginTop: 2 }}>
				<Latest />
			</Container>
			<Upcoming />
			<Container sx={{ marginTop: 2 }}>
				<Latest />
			</Container>
		</Box>
	)
}

export default Home

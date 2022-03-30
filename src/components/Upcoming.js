import {
	Box,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Container,
	Grid,
	Typography,
} from '@mui/material'

function Upcoming() {
	return (
		<Box className='upcoming'>
			<Container>
				<Typography
					variant='h4'
					sx={{ textAlign: 'center', margin: 3, padding: 3 }}
					color='white'>
					Upcoming Movies & TV Shows
				</Typography>
				<Grid container spacing={4}>
					<Grid item md={6}>
						<img
							src='https://images.unsplash.com/photo-1597268489488-28be7e3e2baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
							alt=''
							style={{ width: '100%' }}
						/>
					</Grid>
					<Grid item md={6}>
						<img
							src='https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
							alt=''
							style={{ width: '90%', marginBottom: 10 }}
						/>
						<img
							src='https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80'
							alt=''
							style={{ width: '90%' }}
						/>
					</Grid>
				</Grid>
			</Container>
		</Box>
	)
}

export default Upcoming

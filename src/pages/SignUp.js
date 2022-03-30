import * as React from 'react'
import PersonIcon from '@mui/icons-material/Person'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockIcon from '@mui/icons-material/Lock'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const theme = createTheme()

function SignUp() {

	const [loading, setLoading] = React.useState(false)
	const navigate = useNavigate()

	const handleSubmit = (event) => {
		setLoading(true)
		event.preventDefault()
		const data = new FormData(event.currentTarget)
		// eslint-disable-next-line no-console
		const newUser = {
			firstname: `${data.get('firstName')}`,
			lastname: `${data.get('lastName')}`,
			email: `${data.get('email')}`,
			phoneNumber: `${data.get('phoneNumber')}`,
			password: `${data.get('password')}`,
			confirmPassword: `${data.get('confirmPassword')}`,
		}




		axios.post("https://localhost:7067/api/userauth/registeruser", newUser)
			.then(res => {
				setLoading(false)
				navigate('/login')
			})
			.catch(err => {
				setLoading(false)
				console.log(err)
			})
	}

	return (
		<ThemeProvider theme={theme}>
			<div className='section-1'>
				<Navbar />
				<Container component='main' maxWidth='xs'>
					<CssBaseline />
					<Box
						sx={{
							marginTop: 2,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}>
						<PersonIcon sx={{ m: 1, bgcolor: 'secondary.main' }}>
							<LockIcon />
						</PersonIcon>
						<Typography component='h1' variant='h5'>
							Sign up
						</Typography>
						<Box
							component='form'
							noValidate
							onSubmit={handleSubmit}
							sx={{ mt: 3, background: "#ccc", padding: 4, marginBottom: 8, borderRadius: "10px" }}>
							<Grid container spacing={2} >
								<Grid item xs={12} sm={6}>
									<TextField
										autoComplete='given-name'
										name='firstName'
										required
										fullWidth
										id='firstName'
										label='First Name'
										autoFocus
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										variant='outlined'
										required
										fullWidth
										id='lastName'
										label='Last Name'
										name='lastName'
										autoComplete='family-name'
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										variant='outlined'
										required
										fullWidth
										id='email'
										label='Email Address'
										name='email'
										autoComplete='email'
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										variant='outlined'
										required
										fullWidth
										id='phoneNumber'
										label='Phone Number'
										name='phoneNumber'
										autoComplete='phoneNumber'
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										variant='outlined'
										required
										fullWidth
										name='password'
										label='Password'
										type='password'
										id='password'
										autoComplete='new-password'
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										variant='outlined'
										required
										fullWidth
										name='confirmPassword'
										label='Confirm Password'
										type='password'
										id='confirmPassword'
										autoComplete='new-password'
									/>
								</Grid>
							</Grid>
							<Button
								type='submit'
								fullWidth
								variant='contained'
								disabled={loading}
								sx={{
									mt: 3,
									mb: 2,
									background: '#00b7ff',
									'&:hover': {
										background: '#0099ff',
									},
								}}>
								{loading ? "Loading..." : "Sign Up"}
							</Button>
							<Grid container justifyContent='flex-end'>
								<Grid item>
									<Link href='/login' style={{ color: "#fff" }}>
										<Typography variant='body2'>Already have an account? Sign in </Typography>
									</Link>
								</Grid>
							</Grid>
						</Box>
					</Box>

				</Container>
			</div>
		</ThemeProvider>
	)
}

export default SignUp
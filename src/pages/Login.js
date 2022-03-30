import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { state } from '../store'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


const theme = createTheme()

function Login() {
	const [loading, setLoading] = useState(false)
	const navigate = useNavigate()
	const handleSubmit = (event) => {
		setLoading(true)
		event.preventDefault()
		const data = new FormData(event.currentTarget)
		// eslint-disable-next-line no-console
		const getUser = {
			email: `${data.get('email')}`,
			password: `${data.get('password')}`,
		}
		axios.post("https://localhost:7067/api/userauth/loginuser", getUser)
			.then(res => {
				state.user = res.data
				console.log(res.data);
				setLoading(false)
				navigate('/')
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
						<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
							<LockOutlinedIcon />
						</Avatar>
						<Typography component='h1' variant='h5'>
							Sign in
						</Typography>
						<Box
							component='form'
							onSubmit={handleSubmit}
							noValidate
							sx={{ mt: 3, background: "#ccc", padding: 4, marginBottom: 8, borderRadius: "10px" }}>
							<TextField
								variant='outlined'
								margin='normal'
								required
								fullWidth
								id='email'
								label='Email Address'
								name='email'
								autoComplete='email'
								autoFocus
							/>
							<TextField
								variant='outlined'
								margin='normal'
								required
								fullWidth
								name='password'
								label='Password'
								type='password'
								id='password'
								autoComplete='current-password'
							/>
							<FormControlLabel
								control={<Checkbox value='remember' color='primary' />}
								label='Remember me'
							/>
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
								{loading ? "Loading..." : "Sign In"}
							</Button>
							<Grid container>
								<Grid item xs>
									<Link href='#' variant='body2'>
										Forgot password?
									</Link>
								</Grid>
								<Grid item>
									<Link href='/signup' variant='body2'>
										{"Don't have an account? Sign Up"}
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

export default Login
import {
	AppBar,
	Box,
	Button,
	Container,
	FormControl,
	InputLabel,
	ListSubheader,
	MenuItem,
	Select,
	Toolbar,
	Typography,
} from '@mui/material'
import axios from 'axios'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSnapshot } from 'valtio'
import { state } from '../store'

function Navbar() {
	const navigate = useNavigate()
	const snap = useSnapshot(state)
	const handlelogout = () => {
		state.user = ''
		navigate('/login')
	}

	return (
		<Box sx={{ flexGrow: 1 }} className='navbar'>
			<AppBar
				position='static'
				sx={{
					background: 'transparent',
					boxShadow: 'none',
				}}>
				<Container>
					<Toolbar>
						<Typography
							variant='h6'
							noWrap
							component='div'
							sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
							MovieEnt X
						</Typography>

						<Box display='flex' sx={{ margin: '0 auto' }}>
							<Link to='/' style={{ color: "#fefefe" }}>
								<Typography
									variant='h6'
									sx={{ margin: 2, marginRight: 4 }}>
									<Button color='inherit'>Home</Button>
								</Typography>
							</Link>
							<Typography
								variant='h6'
								sx={{ margin: 2, marginRight: 4 }}>
								<Button color='inherit'>Movies & Series</Button>
							</Typography>
							<Typography
								variant='h6'
								sx={{ margin: 2, marginRight: 4 }}>
								<Button color='inherit'>About Us</Button>
							</Typography>

						</Box>

						{snap.user ? <>
							<Typography
								variant='h6'
								sx={{ margin: 2, marginRight: 4 }}>
								Welcome, {snap.user.firstName}
							</Typography>
							<Link to='/signup' style={{ color: 'inherit' }}>
								<Button color='inherit' onClick={handlelogout}>Logout</Button>
							</Link></> : <><Link to='/login' style={{ color: 'inherit' }}>
								<Button color='inherit'>Login</Button>
							</Link>
							<Link to='/signup' style={{ color: 'inherit' }}>
								<Button color='inherit'>Sign Up</Button>
							</Link></>}
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
	)
}

export default Navbar

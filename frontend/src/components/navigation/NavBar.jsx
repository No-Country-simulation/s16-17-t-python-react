/* eslint-disable arrow-body-style */

import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import logo from '../../assets/img/logo_green.svg'
import { NavLink } from 'react-router-dom'
import { Profile, SearchBar, GuestProfile, SideBar } from '../navigation'
import { Stack } from '@mui/material'
import useUserStore from '../../store/store'

const pages = ['Descubrir', 'Nosotros', 'Servicios', 'Contacto']

export const NavBar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null)
	const [anchorElUser, setAnchorElUser] = React.useState(null)

	const { user, setUser } = useUserStore() /* Confirmacion de uso */

	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}

	const handleCloseUserMenu = () => {
		setAnchorElUser(null)
	}

	return (
		<AppBar position="fixed" sx={{ backgroundColor: '#fff' }}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Box
						sx={{
							flexGrow: 1,
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<NavLink
							to="/"
							className="hidden md:flex mr-2 flex-nowrap"
						>
							<img src={logo} alt="Logo" />
						</NavLink>
						<Box
							sx={{
								flexGrow: 1,
								display: { xs: 'flex', md: 'none' },
							}}
						>
							<SideBar />
						</Box>
						<NavLink
							to="/"
							className="flex md:hidden mr-1 flex-nowrap flex-grow"
						>
							<img
								src={logo}
								alt=""
								className="mr-2 flex md:hidden"
							/>
						</NavLink>
						<Box
							sx={{
								flexGrow: 1,
								display: { xs: 'none', md: 'flex' },
							}}
						>
							{pages.map((page) => (
								<Button
									key={page}
									onClick={handleCloseNavMenu}
									sx={{
										color: '#313031',
										display: 'flex',
										px: 2,
										py: 0,
									}}
									className="h-full"
								>
									{page}
								</Button>
							))}
						</Box>

						<Stack
							direction="row"
							sx={{
								flexGrow: 0,
								display: 'flex',
								gap: '20px',
								alignItems: 'center',
							}}
						>
							<SearchBar />
							{user ?
								<Profile />
							:	<Box>
									<Box
										sx={{
											display: { sm: 'flex', xs: 'none' },
											gap: '20px',
											alignItems: 'center',
										}}
									>
										<NavLink
											to="/login"
											className="text-primaryText font-semibold"
										>
											{/* Se el repite codigo para la prueba en ambos botones */}
											Iniciar Sesion
										</NavLink>
										<NavLink
											to="/register"
											className="text-white bg-bgButton h-10 w-36 
										rounded-full flex items-center justify-center 
										text-base font-medium leading-5 tracking-wide 
										hover:bg-hoverBtn transition duration-300"
										>
											Registrarme
										</NavLink>
									</Box>
									<Box
										sx={{
											display: { sm: 'none', xs: 'flex' },
											gap: '20px',
											alignItems: 'center',
										}}
									>
										<GuestProfile />
									</Box>
								</Box>
							}
						</Stack>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	)
}

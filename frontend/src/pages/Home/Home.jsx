/* eslint-disable arrow-body-style */
import { Box, Container, Fab, Stack, Typography } from '@mui/material'
import { NavBar } from '../../components'
import banner from '../../assets/img/banner.png'
import people from '../../assets/img/people-banner.png'
import bg from '../../assets/img/bg_section.png'
import { HomeEventSwiper } from './HomeEventSwiper'
import { HomeFeaturedSwiper } from './HomeFeaturedSwiper'
import { ContactForm } from './ContactForm'

export const Home = () => {
	return (
		<>
			<NavBar />
			<Box
				sx={{
					width: '100%',
					mt: { xs: '55px' },
				}}
			>
				<Box
					sx={{
						backgroundImage: `url(${banner})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
						height: '500px',
						width: { xs: '100%' },
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						textAlign: 'center',
						px: '10px',
					}}
				>
					<Typography
						sx={{
							fontWeight: '600',
							fontSize: '2.5rem',
							color: '#fff',
						}}
					>
						Planifica tu viaje fotográfico perfecto
					</Typography>
					<Typography
						sx={{
							fontWeight: '700',
							fontSize: '1.25rem',
							color: '#fff',
							opacity: '0.7',
						}}
					>
						Descubre como SnapTrip puede ayudarte a planificar tu
						viaje.
					</Typography>
					<Fab
						variant="extended"
						sx={{
							backgroundColor: '#6E9E30',
							color: '#fff',
							width: { xs: '188px' },
							fontSize: { xs: '12px' },
							mt: '106px',
						}}
					>
						Crear
					</Fab>
				</Box>
				<Container
					sx={{
						mt: '43px',
						display: 'flex',
						flexDirection: 'column',
						gap: '1.5rem',
					}}
				>
					<Typography
						sx={{
							fontSize: '1.5rem',
							fontWeight: '500',
							color: '#313031',
						}}
					>
						Eventos de la comunidad
					</Typography>
					<Typography sx={{ color: '#313031', fontWeight: '400' }}>
						Los viajes más recientes de nuestra comunidad.
					</Typography>
					<HomeEventSwiper />
					<Box
						sx={{
							position: 'relative',
							width: '100vw',
							left: '50%',
							right: '50%',
							ml: '-50vw',
							mr: '-50vw',
							backgroundColor: '#0D4937',
							mt: '90px',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							textAlign: 'center',
						}}
					>
						<img src={bg} />
						<Stack>
							<Typography
								sx={{ color: '#fff', fontWeight: '500' }}
							>
								Planifica tus rutas
							</Typography>
							<Typography
								sx={{ color: '#fff', fontSize: '14px' }}
							>
								Organiza cada detalle de tu viaje con nuestras
								herramientas de planificación.
							</Typography>
						</Stack>
						<Fab
							variant="extended"
							sx={{
								backgroundColor: '#6E9E30',
								color: '#fff',
								width: { xs: '148px' },
								fontSize: { xs: '12px' },
								my: '50px',
							}}
						>
							Crear evento
						</Fab>
					</Box>
					<Typography
						sx={{
							fontSize: '1.5rem',
							fontWeight: '500',
							color: '#313031',
						}}
					>
						Fotos destacadas
					</Typography>
					<Typography sx={{ color: '#313031', fontWeight: '400' }}>
						Los viajes más recientes de nuestra comunidad.
					</Typography>
					<HomeFeaturedSwiper />
					<Box
						sx={{
							my: '60px',
							textAlign: 'center',
							display: 'flex',
							flexDirection: 'column',
							gap: '1rem',
						}}
					>
						<img src={people} />
						<Typography
							sx={{ fontSize: '1.5rem', fontWeight: '500' }}
						>
							Quiénes Somos
						</Typography>
						<Typography sx={{ fontSize: '14px' }}>
							Somos una comunidad de fotógrafos y viajeros
							dedicados a capturar y compartir la belleza del
							mundo. Ofrecemos una plataforma para planificar
							viajes, descubrir destinos impresionantes y conectar
							con otros entusiastas de la fotografía.
						</Typography>
					</Box>
				</Container>
				<ContactForm />
			</Box>
		</>
	)
}

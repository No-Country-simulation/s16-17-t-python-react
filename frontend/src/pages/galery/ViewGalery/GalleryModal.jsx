/* eslint-disable arrow-body-style */
import Checkbox from '@mui/material/Checkbox'
import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import { Favorite, FavoriteBorder } from '@mui/icons-material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import images from '../photos.json'

import { useState, forwardRef } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles

import './galleryStyles.css'

import { EffectFade, Navigation, Pagination } from 'swiper/modules'
import { NavLink } from 'react-router-dom'

export const GalleryModal = forwardRef((props, ref) => {
	return (
		<>
			<Swiper
				spaceBetween={30}
				effect={'fade'}
				navigation={true}
				pagination={{
					clickable: true,
				}}
				modules={[EffectFade, Navigation, Pagination]}
				className="mySwiper"
			>
				{images.map((img, index) => (
					<SwiperSlide key={index}>
						<img src={img.imagen} alt={`Foto ${img.id}`} />
					</SwiperSlide>
				))}
			</Swiper>
			<Box
				sx={{
					backgroundColor: '#FBFCFF',
					borderRadius: '20px',
					px: '10px',
					py: '20px',
					display: 'flex',
					flexDirection: 'column',
					gap: '10px',
					width: '100%',
					maxWidth: '425px',
					alignSelf: 'center',
				}}
			>
				<Stack direction="row">
					<Checkbox
						icon={<FavoriteBorder />}
						checkedIcon={<Favorite sx={{ color: 'red' }} />}
					/>
					<Checkbox
						icon={<BookmarkBorderIcon />}
						checkedIcon={<BookmarkIcon />}
					/>
				</Stack>
				<Stack
					direction="row"
					alignItems="center"
					justifyContent="space-between"
				>
					<Typography
						sx={{
							ml: '10px',
							fontSize: '14px',
						}}
					>
						1 Like
					</Typography>
					<Box sx={{ display: 'flex' }}>
						<LocationOnIcon sx={{ fontSize: '20px' }} />
						<Typography sx={{ fontSize: '14px' }}>
							San Jose, Costa Rica
						</Typography>
					</Box>
				</Stack>
				<Divider />
				<Typography sx={{ fontSize: '14px' }}>
					Tomada con una Canon EOS R5 al amanecer. Apertura f/2.8, ISO
					100. La luz dorada realza los colores, capturando cada
					detalle con nitidez impresionante y un increíble rango
					dinámico.
				</Typography>
				<Button
					startIcon={<EditIcon />}
					component={NavLink}
					to="/create/photo"
				>
					Editar Álbum
				</Button>
				<Button startIcon={<DeleteIcon />}>Eliminar Álbum</Button>
			</Box>
		</>
	)
})

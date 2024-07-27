/* eslint-disable no-magic-numbers */
/* eslint-disable arrow-body-style */

import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { UploadPhoto } from './UploadPhoto'
import 'swiper/css'
import './styles.css'
import {
	Typography,
	TextField,
	Button,
	Box,
	Checkbox,
	FormControlLabel,
} from '@mui/material'
import images from './photos.json'

export const PhotoSwipe = () => {
	const [currentImage, setCurrentImage] = useState(images[0] || {})

	const handleSlideChange = (swiper) => {
		const newIndex = swiper.activeIndex
		const newImage = images[newIndex]

		if (!newImage) {
			setCurrentImage({
				id: '',
				ubicacion: '',
				apertura: '',
				sensibilidad: '',
				velocidad_obturacion: '',
				distancia_focal: '',
			})
			return
		}

		const allValuesUndefined = Object.values(newImage).every(
			(value) => value === undefined
		)
		if (allValuesUndefined) {
			setCurrentImage({
				id: '',
				ubicacion: '',
				apertura: '',
				sensibilidad: '',
				velocidad_obturacion: '',
				distancia_focal: '',
			})
		} else {
			setCurrentImage(newImage)
		}
	}

	return (
		<>
			<Swiper
				slidesPerView={'auto'}
				centeredSlides={true}
				spaceBetween={30}
				className="mySwiper"
				onSlideChange={handleSlideChange}
			>
				{images.map((img, index) => (
					<SwiperSlide key={index}>
						<img src={img.imagen} alt={`Foto ${img.id}`} />
					</SwiperSlide>
				))}
				<SwiperSlide>
					<UploadPhoto />
				</SwiperSlide>
			</Swiper>

			<Box mt={2} sx={{ px: '15px' }}>
				<TextField
					label="Ubicación"
					value={currentImage.ubicacion || ''}
					fullWidth
					margin="normal"
					variant="outlined"
				/>
				<Box display="flex" gap={2}>
					<TextField
						label="Apertura"
						value={currentImage.apertura || ''}
						fullWidth
						margin="normal"
						variant="outlined"
					/>
					<TextField
						label="Sensibilidad"
						value={currentImage.sensibilidad || ''}
						fullWidth
						margin="normal"
						variant="outlined"
					/>
				</Box>
				<TextField
					label="Velocidad de obturación"
					value={currentImage.velocidad_obturacion || ''}
					fullWidth
					margin="normal"
					variant="outlined"
				/>
				<TextField
					label="Distancia focal"
					value={currentImage.distancia_focal || ''}
					fullWidth
					margin="normal"
					variant="outlined"
				/>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: '1.75rem',
					}}
				>
					<FormControlLabel
						control={
							<Checkbox color="success" sx={{ ml: '10px' }} />
						}
						label="Aplicar a todas las fotos"
						sx={{
							'& .MuiFormControlLabel-label': {
								fontSize: '14px',
							},
						}}
					/>
					<Button
						variant="contained"
						sx={{
							alignSelf: 'flex-end',
							backgroundColor: '#6E9E30',
							borderRadius: '100px',
							height: '40px',
							width: '82px',
							fontSize: '12px',
							mr: '10px',
						}}
					>
						Subir
					</Button>
				</Box>
			</Box>
		</>
	)
}

/* eslint-disable arrow-body-style */

import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import './styles.css'
import images from './galleryHome.json'

import { Pagination, Autoplay } from 'swiper/modules'
import { ListItem, ListItemText, Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'

export const HomeEventSwiper = () => {
	return (
		<>
			<Swiper
				slidesPerView={'auto'}
				spaceBetween={30}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				navigation={true}
				modules={[Autoplay, Pagination]}
				className="mySwiper"
			>
				{images.sections?.events.map((img, index) => (
					<SwiperSlide key={index} className="flex flex-col">
						<img src={img.image_url} alt={img.title} />
						<ListItem>
							<ListItemText
								primary={img.description}
								sx={{
									'& .MuiListItemText-primary': {
										fontSize: '16px',
										fontWeight: '600',
										color: '#313031',
									},
								}}
							/>
						</ListItem>
						<ListItem sx={{ px: 0 }}>
							<LocationOnIcon sx={{ color: '#313031' }} />
							<ListItemText
								primary={img.location}
								sx={{
									'& .MuiListItemText-primary': {
										fontSize: '14px',
										color: '#313031',
										fontWeight: '500',
									},
								}}
							/>
						</ListItem>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	)
}

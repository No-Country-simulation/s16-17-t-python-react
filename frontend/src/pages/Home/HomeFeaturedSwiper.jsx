/* eslint-disable arrow-body-style */

import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import './styles.css'
import images from './galleryHome.json'

import { Pagination, Autoplay } from 'swiper/modules'
import {
	Box,
	Checkbox,
	ListItem,
	ListItemText,
	Typography,
} from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import Favorite from '@mui/icons-material/Favorite'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'

export const HomeFeaturedSwiper = () => {
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
				{images.sections?.featured.map((img, index) => (
					<SwiperSlide key={index} className="flex flex-col">
						<img src={img.image_url} alt={img.title} />
						<ListItem sx={{ p: 0, gap: '5px' }}>
							<AccountCircleOutlinedIcon
								sx={{ color: '#5e5c5e' }}
							/>
							<ListItemText
								primary={img.user}
								sx={{
									'& .MuiListItemText-primary': {
										fontSize: '16px',
										fontWeight: '500',
										color: '#313031',
									},
								}}
							/>
							<Box
								sx={{
									display: 'flex',
									fontSize: '14px',
									alignItems: 'center',
									gap: '5px',
								}}
							>
								{img.likes}
								<Checkbox
									icon={<FavoriteBorder />}
									checkedIcon={
										<Favorite sx={{ color: 'red' }} />
									}
									sx={{
										px: 0,
									}}
								/>
							</Box>
							<Box
								sx={{
									display: 'flex',
									fontSize: '14px',
									alignItems: 'center',
									gap: '5px',
								}}
							>
								{img.favorites}
								<Checkbox
									icon={<BookmarkBorderIcon />}
									checkedIcon={
										<BookmarkIcon
											sx={{ color: '#6E9E30' }}
										/>
									}
									sx={{
										px: 0,
									}}
								/>
							</Box>
						</ListItem>
						<ListItem sx={{ p: 0 }}>
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

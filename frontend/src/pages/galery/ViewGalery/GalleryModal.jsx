/* eslint-disable arrow-body-style */
import Checkbox from '@mui/material/Checkbox'
import { Box, Stack } from '@mui/material'
import { Favorite, FavoriteBorder } from '@mui/icons-material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'

import { useState, forwardRef } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles

import './galleryStyles.css'

import { EffectFade, Navigation, Pagination } from 'swiper/modules'

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
				<SwiperSlide>
					<img src="https://swiperjs.com/demos/images/nature-1.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="https://swiperjs.com/demos/images/nature-2.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="https://swiperjs.com/demos/images/nature-3.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="https://swiperjs.com/demos/images/nature-4.jpg" />
				</SwiperSlide>
			</Swiper>
			<Box sx={{ backgroundColor: '#FBFCFF' }}>
				<Stack>
					<Checkbox
						icon={<FavoriteBorder />}
						checkedIcon={<Favorite sx={{ color: 'red' }} />}
					/>
					<Checkbox
						icon={<BookmarkBorderIcon />}
						checkedIcon={<BookmarkIcon />}
					/>
				</Stack>
			</Box>
		</>
	)
})

/* eslint-disable no-magic-numbers */
/* eslint-disable arrow-body-style */
import { useState } from 'react'
import datos from './galery.json'
import Fab from '@mui/material/Fab'
import Checkbox from '@mui/material/Checkbox'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import Favorite from '@mui/icons-material/Favorite'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'
import CameraAltIcon from '@mui/icons-material/CameraAlt'
import CameraIcon from '@mui/icons-material/Camera'
import { Modal, Typography } from '@mui/material'
import { CreateAlbum } from './CreateAlbum'
import { GalleryModal } from './ViewGalery/GalleryModal'

export const AlbumComponent = () => {
	const [open, setOpen] = useState(false)
	const [galleryOpen, setGalleryOpen] = useState(false)
	const [albums, setAlbums] = useState(datos)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)
	const handleGalleryOpen = (e) => {
		if (!e.target.closest('.like-button')) {
			return setGalleryOpen(true)
		}
	}
	const handleGalleryClose = () => setGalleryOpen(false)

	const handleLikeChange = (id) => {
		setAlbums((prevAlbums) =>
			prevAlbums.map((album) =>
				album.id === id ?
					{
						...album,
						liked: !album.liked,
						likes: album.liked ? album.likes - 1 : album.likes + 1,
					}
				:	album
			)
		)
	}
	return (
		<section className="grid grid-cols-1 gap-6 w-full md:grid-cols-2 md:gap-[1rem] md:justify-center p-3 md:grid-rows-2 md:w-full md:mx-auto xl:gap-20">
			{albums.map((e) => (
				<div
					className="w-full 
                    mx-auto h-full hover:scale-105  
                    transition-all .5s ease-in-out border 
                    rounded-lg shadow-lg p-6 
                    flex flex-col gap-3 cursor-pointer"
					key={e.id}
					onClick={handleGalleryOpen}
				>
					<div className="grid">
						<img
							className="h-auto w-[100%] rounded-lg "
							src={e?.imagen || 'Cargando..'}
						/>
					</div>
					<h3 className=" text-[1rem]">{e.title}</h3>
					<div className="flex flex-col justify-between gap-3">
						<div className="text-xs flex items-center justify-between">
							<div className="flex gap-1 items-center">
								<LocationOnIcon />
								{e.ubicacion}
							</div>
							<div className="text-xs flex items-center">
								{' '}
								{/* codigo refactorizado para la funcion de like */}
								<Checkbox
									icon={<FavoriteBorder />}
									checkedIcon={
										<Favorite sx={{ color: 'red' }} />
									}
									onChange={(event) => handleLikeChange(e.id)}
									className="like-button"
								/>
								{e.likes}
							</div>
						</div>
						<div className="text-xs flex items-center gap-1">
							<CameraAltIcon />
							{e.modeloCamara}
						</div>
						<div className="text-xs flex items-center gap-1">
							<CameraIcon />
							{e.lente}
						</div>
					</div>
				</div>
			))}
			<Modal
				open={galleryOpen}
				onClose={handleGalleryClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				sx={{
					display: 'flex',
					flexDirection: { xs: 'column', md: 'row' },
					px: '1rem',
					mt: { xs: '50px', md: 'none' },
				}}
			>
				<GalleryModal />
			</Modal>
			<Fab
				variant="extended"
				onClick={handleOpen}
				sx={{
					position: 'fixed',
					bottom: 16,
					right: 16,
					backgroundColor: '#fff',
					color: '#6E9E30',
					width: { xs: '156px', sm: '164px' },
					fontSize: { xs: '12px' },
				}}
			>
				<DriveFileRenameOutlineIcon className="text-[#6E9E30] mr-1" />
				Crear
			</Fab>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<CreateAlbum />
			</Modal>
		</section>
	)
}

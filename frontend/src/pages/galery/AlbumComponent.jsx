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
		<section className="grid grid-cols-1 gap-6 w-full md:grid-cols-2 md:gap-[1rem] md:justify-center p-3 md:grid-rows-2 md:w-full md:max-w-[658px] md:mx-auto lg:max-w-[1042px]">
			{albums.map((e) => (
				<div
					className="w-[19rem] lg:w-[30rem] 
                    mx-auto h-full hover:scale-105  
                    transition-all .5s ease-in-out border 
                    rounded-lg shadow-lg p-6 
                    flex flex-col gap-3 cursor-pointer"
					key={e.id}
					onClick={handleGalleryOpen}
				>
					<div className="grid grid-cols-2 grid-rows-2 gap-[.5rem]">
						<img
							className="h-auto w-[100%] rounded-lg"
							src={e?.imagen || 'Cargando..'}
						/>
						<img
							className="h-auto w-[100%] rounded-lg"
							src={e?.imagen1}
							alt=""
						/>
						<img
							className="h-auto w-[100%] rounded-lg"
							src={e?.imagen3}
							alt=""
						/>
						<img
							className="h-auto w-[100%] rounded-lg"
							src={e?.imagen2}
							alt=""
						/>
					</div>
					<h3 className=" text-[1rem]">{e.title}</h3>
					<div className="flex flex-row justify-between gap-5">
						<div className="text-xs flex items-center gap-2">
							<LocationOnIcon />
							{e.ubicacion}
						</div>
						<div className="text-xs text-right">
							{' '}
							{/* codigo refactorizado para la funcion de like */}
							<Checkbox
								icon={<FavoriteBorder />}
								checkedIcon={<Favorite sx={{ color: 'red' }} />}
								onChange={(event) => handleLikeChange(e.id)}
								className="like-button"
							/>
							{e.likes}
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
					flexDirection: 'column',
					px: '2rem',
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

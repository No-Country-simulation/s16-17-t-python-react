/* eslint-disable arrow-body-style */
import { useState } from 'react'
import datos from './galery.json'
import Fab from '@mui/material/Fab'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'
import { Modal } from '@mui/material'
import { CreateAlbum } from './CreateAlbum'

export const AlbumComponent = () => {
	const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)
	return (
		<section className="grid grid-cols-1 gap-2 w-full md:grid-cols-2 md:gap-[1rem] md:justify-center p-3 md:grid-rows-2 md:w-full md:max-w-[658px] md:mx-auto lg:max-w-[1042px]">
			{datos.map((e) => (
				<div
					className="w-[19rem]  lg:w-[30rem] mx-auto h-full hover:scale-105  transition-all .5s ease-in-out border rounded-lg shadow-lg p-6 flex flex-col gap-3"
					key={e.id}
				>
					<div className="grid grid-cols-2 grid-rows-2 gap-[.5rem]">
						<img
							className="h-auto w-[100%] rounded-lg"
							src={e?.imagen || 'Cargando..'}
						></img>
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
							<FavoriteBorderIcon className="bg-red cursor-pointer hover:text-[#f13a3a]" />
							{e.likes}
						</div>
					</div>
				</div>
			))}
			<Fab
				variant="extended"
				onClick={handleOpen}
				sx={{
					position: 'fixed',
					bottom: 16,
					right: 16,
					backgroundColor: '#fff',
					color: '#6E9E30',
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

/* eslint-disable no-magic-numbers */
/* eslint-disable no-console */
// import { useParams } from "react-router-dom"
import { CreateAlbumStore } from './store'
import style from './style.module.css'
import { useState, forwardRef } from 'react'
import {
	Button,
	Fab,
	FormControl,
	FormControlLabel,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
} from '@mui/material'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'
import { Toaster, toast } from 'sonner'
import data from './DefineAlbum.json'
import { CheckboxGallery } from './checkbox/CheckboxGallery'

export const CreateAlbum = forwardRef((props, ref) => {
	const { checkboxOptions, define_camera, define_objevtive } = data

	const [dataTitle, setDatatitle] = useState('')
	const [dataComent, setdataComent] = useState('')
	const [OptionsCamera, setOptionsCamera] = useState('')
	const [OptionsObjective, setOptionsObjective] = useState('')
	const [checkOptions, setCheckOptions] = useState({
		paisaje: false,
		naturaleza: false,
		street: false,
		nocturno: false,
		aereo: false,
		retrato: false,
		personas: false,
		cultura: false,
		otros: false,
	})

	const handleOptions = (e) => {
		setCheckOptions({
			...checkOptions,
			[e.target.name]: e.target.checked,
		})
	}
	// const {
	//     store_TitleAlbum,
	//     store_dataComent,
	//     store_dataCheckbox,
	//     store_OptionsCamera,
	//     store_OptionsObjective
	// } = CreateAlbumStore()

	const SubmitAlbum = (e) => {
		const MIN_ALBUM_LENGTH = 140
		e.preventDefault()

		console.log({
			album: dataTitle,
			coment: dataComent,
			camera: OptionsCamera,
			objective: OptionsObjective,
		})
		if (dataTitle.length >= MIN_ALBUM_LENGTH || dataTitle.length < 1) {
			toast.error(`ingresa mas de ${MIN_ALBUM_LENGTH} caracteres`)
		} else {
			toast.success(
				`Cantidad de caracteres correcta, menor a ${MIN_ALBUM_LENGTH}`
			)
		}
	}
	const { form_create_album } = style

	return (
		<div ref={ref} {...props}>
			<form
				onSubmit={SubmitAlbum}
				className="bg-[#fff] p-[1rem] rounded-md"
			>
				<FormControl fullWidth margin="normal" className="flex gap-3">
					<InputLabel
						className={form_create_album}
						htmlFor="outlined-adornment-confirm-password"
					>
						Crear Album
					</InputLabel>
					<OutlinedInput
						id="outlined-adornment-confirm-password"
						value={dataTitle}
						onChange={(e) => setDatatitle(e.target.value)}
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle confirm password visibility"
									edge="end"
								></IconButton>
							</InputAdornment>
						}
						label="Crear"
					/>
					<p className="opacity-[50%] p-2">
						Dale un nombre que represente tu album
					</p>
					<textarea
						className="w-full  border-2 border-[#a5a1a1] placeholder:p-1 p-3 min-h-[10vh]  rounded-md"
						value={dataComent}
						onChange={(e) => setdataComent(e.target.value)}
						placeholder="Esto es el text area"
					></textarea>
					<div className="flex flex-col gap-3">
						<b className="text-2xl">Equipo</b>
						Camara
						<select
							onChange={(e) => setOptionsCamera(e.target.value)}
							defaultValue={OptionsCamera}
							className="border-2  border-slate-600 p-2 rounded-md cursor-pointer"
						>
							<option className="cursor-pointer">
								-Elige una camara-
							</option>
							{define_camera.map((e) => (
								<option key={e.id} className="cursor-pointer">
									{e.camera}
								</option>
							))}
						</select>
						Objetivo
						<select
							onChange={(e) =>
								setOptionsObjective(e.target.value)
							}
							defaultValue={OptionsObjective}
							className="border-2  border-slate-600 p-2 rounded-md cursor-pointer"
						>
							<option className="cursor-pointer">
								-Elige un objetivo-
							</option>
							{define_objevtive.map((e) => (
								<option key={e.id} className="cursor-pointer">
									{e.objective}
								</option>
							))}
						</select>
					</div>
					<section>
						<b>Definí tu album</b>
						<article>
							<div className="grid grid-cols-2 justify-center max-w-[1100px] mx-auto">
								{/* checkbox modularizado */}
								{checkboxOptions.map((data) => (
									<FormControlLabel
										className="w-1/3"
										key={data.id}
										control={
											<CheckboxGallery
												// key es el identificador unico
												label={data.label}
												optionName={data.name}
												checkOptions={checkOptions}
												handleOptions={handleOptions}
											/>
										}
										label={data.label}
									/>
								))}
							</div>
						</article>
					</section>

					<Fab
						variant="extended"
						type="submit"
						sx={{
							backgroundColor: '#fff',
							color: '#6E9E30',
							width: { xs: '156px', sm: '164px' },
							fontSize: { xs: '12px' },
						}}
					>
						Crear Album
					</Fab>
				</FormControl>
			</form>
		</div>
	)
})

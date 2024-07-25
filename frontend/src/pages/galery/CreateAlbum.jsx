/* eslint-disable no-console */
// import { useParams } from "react-router-dom"
import { useState, forwardRef } from 'react'
import { CreateAlbumStore } from './store'
import style from './style.module.css'
import {
	Button,
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
} from '@mui/material'
const { form_create_album } = style
import { Toaster, toast } from 'sonner'
export const CreateAlbum = forwardRef((props, ref) => {
	// const {TitleAlbum } = CreateAlbumStore()
	const [dataTitle, setDatatitle] = useState('')

	// console.log(dataTitle)
	const InputAlbumSubmit = (e) => {
		console.log({ album: e })
	}
	// toast
	// const hasNonalphas = /\W/.test(password)

	const SubmitAlbum = (e) => {
		const hasUpperCase = /[A-Z]/.test(dataTitle)
		const hasLowerCase = /[a-z]/.test(dataTitle)
		const MIN_ALBUM_LENGTH = 140
		const hasNumbers = /\d/.test(dataTitle)
		e.preventDefault()
		console.log({ album: dataTitle })
		if (dataTitle.length < MIN_ALBUM_LENGTH) {
			toast.error('ingresa mas de 8 caracteres')
		} else {
			toast.success('Cantidad de caracteres correcta')
		}
		// if(dataTitle != ){

		// }
	}

	const { button_register, form_create_album } = style
	return (
		<div ref={ref} {...props}>
			<form onSubmit={SubmitAlbum} className='bg-white'>
				<FormControl fullWidth margin="normal">
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
					<Button
						variant="contained"
						color="primary"
						type="submit"
						// onClick={handleRegister}
						className={button_register}
						fullWidth
					>
						Crear
					</Button>
				</FormControl>
			</form>
		</div>
	)
});
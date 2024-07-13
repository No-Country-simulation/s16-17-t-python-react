import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import validator from 'validator' // Importación de validator
import { Toaster, toast } from 'sonner'
import styles from '../register/Register.module.css'

const MIN_PASSWORD_LENGTH = 8
const MIN_USERNAME_LENGTH = 6
const RESERVED_USERNAMES = ['admin', 'root', 'invitado']

// Simular una llamada a la API para verificar si el correo electrónico ya está registrado.
const checkEmailAvailability = async (email) => {
	const registeredEmails = [
		'user1@example.com',
		'user2@example.com',
		'user3@example.com',
	] // Estos son solo ejemplos.
	return registeredEmails.includes(email)
}

const isValidUsername = (username) => {
	const validChars = /^[a-zA-Z0-9_-]+$/
	return validChars.test(username) && !RESERVED_USERNAMES.includes(username)
}

const isValidEmail = (email) => validator.isEmail(email)

export const RegisterComponente = () => {


	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [username, setUsername] = useState('')
	const [showPassword, setShowPassword] = useState(false)
	const [showConfirmPassword, setShowConfirmPassword] = useState(false)
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [error, setError] = useState('')
	const [showButtonRegister, setshowButtonRegister] = useState(false)
	const [ValidPasswordIcon, setValidPasswordIcon] = useState(false)
	const handleClickShowPassword = () => setShowPassword((show) => !show)
	const handleClickShowConfirmPassword = () =>
		setShowConfirmPassword((show) => !show)

	const handleMouseDownPassword = (event) => {
		event.preventDefault()
	}


	const handleRegister = async () => {
		if (name.trim() === '') {
			setError('El nombre completo es obligatorio.')
			toast.error("Fallo en el registro")

			return
		}

		if (username.length < MIN_USERNAME_LENGTH) {
			setError(
				`El nombre de usuario debe tener al menos ${MIN_USERNAME_LENGTH} caracteres.`
			)
			toast.error("Fallo en el registro")
			return
		}

		if (!isValidUsername(username)) {
			setError(
				'El nombre de usuario contiene caracteres inválidos o es una palabra reservada.'
			)
			toast.error("Fallo en el registro")
			return
		}

		if (!isValidEmail(email)) {
			setError('El correo electrónico no es válido.')
			toast.error("Fallo en el registro")
			return
		}

		if (await checkEmailAvailability(email)) {
			setError('El correo electrónico ya está registrado.')
			toast.error("Fallo en el registro")
			return
		}

		if (password.length < MIN_PASSWORD_LENGTH) {
			setError(
				`La contraseña debe tener al menos ${MIN_PASSWORD_LENGTH} caracteres.`
			)
			toast.error("Fallo en el registro")
			return
		}

		const hasUpperCase = /[A-Z]/.test(password)
		const hasLowerCase = /[a-z]/.test(password)
		const hasNumbers = /\d/.test(password)
		const hasNonalphas = /\W/.test(password)

		if (!hasUpperCase || !hasLowerCase || !hasNumbers || !hasNonalphas) {
			toast.error("Fallo en el registro")
			setError(
				'La contraseña debe contener mayúsculas, minúsculas, números y caracteres especiales.'
			)
			return
		}

		if (password !== confirmPassword) {
			toast.error("Fallo en el registro")
			setError('Las contraseñas no coinciden.')
			return
		} else {
			setValidPasswordIcon(true)
		}

		// Aquí iría el código para registrar al usuario si el correo electrónico está disponible.
		console.log('Registrando usuario:', { name, email, username })
		setshowButtonRegister(true)
		setError('')
		// Reiniciar el formulario
		setName('')
		setEmail('')
		setUsername('')
		setPassword('')
		setConfirmPassword('')
		toast.success('Registro exitosa!')
		// toast.error('Registro erroneo')

	}
	const { section_form, div_iconSuccesPassword, form_password , formstyles} = styles

	return (
		<>
			<h2>Registro de usuario</h2>
			<section className={section_form}	>

				<TextField
					required
					id="outlined-required-name"
					label="Nombre completo"
					value={name}
					onChange={(e) => setName(e.target.value)}
					fullWidth
					margin="normal"
				/>
				<TextField
					required
					id="outlined-required-email"
					label="Correo electrónico"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					fullWidth
					margin="normal"
				/>
				<TextField
					required
					id="outlined-required-username"
					label="Nombre de usuario"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					fullWidth
					margin="normal"
				/>
				<div className={form_password}>

					<FormControl
						className={formstyles}
						// sx={{ w: '100%' }}
						variant="outlined"
						fullWidth
						margin="normal"
					>
						<InputLabel htmlFor="outlined-adornment-password">
							Contraseña
						</InputLabel>
						<OutlinedInput
							id="outlined-adornment-password"
							type={showPassword ? 'text' : 'password'}
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							endAdornment={
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={handleClickShowPassword}
										onMouseDown={handleMouseDownPassword}
										edge="end"
									>
										{showPassword ?
											<VisibilityOff />
											: <Visibility />}
									</IconButton>
								</InputAdornment>
							}
							label="Password"
						/>
						{
							ValidPasswordIcon &&
							<div className={div_iconSuccesPassword}>

								<CheckCircleIcon color='success' />
								Valida
							</div>
						}
					</FormControl>
					<FormControl
					className={formstyles}
						// sx={{ m: 1, width: '100%' }}
						variant="outlined"
						fullWidth
						margin="normal"
					>
						<InputLabel htmlFor="outlined-adornment-confirm-password">
							Repetir contraseña
						</InputLabel>
						<OutlinedInput
							id="outlined-adornment-confirm-password"
							type={showConfirmPassword ? 'text' : 'password'}
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							endAdornment={
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle confirm password visibility"
										onClick={handleClickShowConfirmPassword}
										onMouseDown={handleMouseDownPassword}
										edge="end"
									>
										{showConfirmPassword ?
											<VisibilityOff />
											: <Visibility />}
									</IconButton>
								</InputAdornment>
							}
							label="Confirm Password"
						/>
						{
							ValidPasswordIcon &&
							<div className={div_iconSuccesPassword}>

								<CheckCircleIcon color='success' />
								Coindicen
							</div>
						}
					</FormControl>
				</div>
				{
					showButtonRegister === false ?
						<Button
							variant="contained"
							color="primary"
							disabled
							onClick={handleRegister}
							fullWidth
						>
							Registrar
						</Button>
						:
						<Button
							variant="contained"
							color="primary"
							onClick={handleRegister}
							fullWidth
						>
							Registrar
						</Button>
				}

				{error && (
					<Alert severity="error" style={{ marginTop: '20px' }}>
						{error}
					</Alert>
				)}

				<Toaster richColors position="bottom-center" />
			</section>
		</>
	)
}
import React, { useEffect, useState } from 'react'
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
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import validator from 'validator' // Importación de validator
import { Toaster, toast } from 'sonner'
import styles from '../register/Register.module.css'
import useRegisterUser from '../../store/store'
import { useNavigate } from 'react-router-dom'

// hola
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

const registeredUser = () => {
	const userName = []
}

const isValidUsername = (username) => {
	const validChars = /^[a-zA-Z0-9_-]+$/
	return validChars.test(username) && !RESERVED_USERNAMES.includes(username)
}

const isValidEmail = (email) => validator.isEmail(email)

export const RegisterComponente = () => {
	const Nav = useNavigate()
	// const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	// const [username, setUsername] = useState('')
	const [showPassword, setShowPassword] = useState(false)
	const [showConfirmPassword, setShowConfirmPassword] = useState(false)
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [error, setError] = useState('')
	// estos estados todavia no funcionan automaticamente, pero si manualmente
	const [ActiveButtonRegister, setActiveButtonRegister] = useState(false)

	const [PasswordHas8char, setPasswordHas8char] = useState(false)
	const [MatchPassword, setMatchPassword] = useState(false)
	const [PasswordHasNumbers, setPasswordHasNumbers] = useState(false)
	const [PasswordHasUpperCase, setPasswordUpperCase] = useState(false)
	const [PasswordHasLowercase, setPasswordHasLowercase] = useState(false)
	const [PasswordHasSpecialChar, setPasswordHasSpecialChar] = useState(false)
	const [correctCharactert, setcorrectCharactert] = useState(false)
	const handleClickShowPassword = () => setShowPassword((show) => !show)
	const handleClickShowConfirmPassword = () =>
		setShowConfirmPassword((show) => !show)

	const handleMouseDownPassword = (event) => {
		event.preventDefault()
	}

	const hasUpperCase = /[A-Z]/.test(password)
	const hasLowerCase = /[a-z]/.test(password)
	const hasNumbers = /\d/.test(password)
	const hasNonalphas = /\W/.test(password)

	const { setUser, resStatus } = useRegisterUser((state) => ({
		...state,
	}))

	const handleRegister = async () => {
		// if (name.trim() === '') {
		// 	setError('El nombre completo es obligatorio.')
		// 	toast.error('Fallo en el registro')

		// 	return
		// }

		// if (username.length < MIN_USERNAME_LENGTH) {
		// 	setError(
		// 		`El nombre de usuario debe tener al menos ${MIN_USERNAME_LENGTH} caracteres.`
		// 	)
		// 	toast.error('Fallo en el registro')
		// 	return
		// }

		// if (!isValidUsername(username)) {
		// 	setError(
		// 		'El nombre de usuario contiene caracteres inválidos o es una palabra reservada.'
		// 	)
		// 	toast.error('Fallo en el registro')
		// 	return
		// }

		if (!isValidEmail(email)) {
			setError('El correo electrónico no es válido.')
			toast.error('Fallo en el registro')
			return
		}

		if (await checkEmailAvailability(email)) {
			setError('El correo electrónico ya está registrado.')
			toast.error('Fallo en el registro')
			return
		}

		if (password.length < MIN_PASSWORD_LENGTH) {
			setError(
				`La contraseña debe tener al menos ${MIN_PASSWORD_LENGTH} caracteres.`
			)
			toast.error('Fallo en el registro')
			return
		} else {
			setActiveButtonRegister(true)
		}

		if (!hasUpperCase || !hasLowerCase || !hasNumbers || !hasNonalphas) {
			toast.error('Fallo en el registro')
			setError(
				'La contraseña debe contener mayúsculas, minúsculas, números y caracteres especiales.'
			)
			return
		} else {
		}

		if (password !== confirmPassword) {
			toast.error('Fallo en el registro')
			setError('Las contraseñas no coinciden.')
			return
		} else {
			setcorrectCharactert(true)
			setActiveButtonRegister(true)

			setActiveButtonRegister(true)
		}
		if (hasUpperCase) {
			// console.log('está entrando mayusculas')
			setPasswordUpperCase(true)
		}
		if (hasNumbers) {
			setPasswordHasNumbers(true)
		}
		if (hasLowerCase) {
			setPasswordHasLowercase(true)
		}

		if (hasNonalphas) {
			setPasswordHasSpecialChar(true)
		}
		if (confirmPassword) {
			setMatchPassword(true)
		}
		console.log('la peticion fue exitosa ' + resStatus)
		setUser('http://127.0.0.1:8000/account/register-user/', {
			email: email,
			password: password,
			confirm_password: confirmPassword,
		})

		// Aquí iría el código para registrar al usuario si el correo electrónico está disponible.
		// console.log('Registrando usuario:', { name, email, username })
		setError('')
		// Reiniciar el formulario
		// setName('')
		setEmail('')
		setPassword('')
		setConfirmPassword('')

		const PostValidUser = async () => {
			if (resStatus === true) {
				await toast.success('Cuenta creada con éxito')
			} else {
				await toast.error('Fallo en la creacion de la cuenta')
			}
		}

		const MILISECONDS = 1000

		setTimeout(() => {
			Nav('/auth')
		}, MILISECONDS)
	}

	const handleValidationPassword = (e) => {
		if (e.length >= MIN_PASSWORD_LENGTH) {
			setPasswordHas8char(true)
			setActiveButtonRegister(true)
			setPasswordUpperCase(true)
			setPasswordHasLowercase(true)
			setPasswordHasNumbers(true)
			setPasswordHasSpecialChar(true)
		}

		if (hasUpperCase) {
			// console.log("Tiene")
			// setMatchPassword(true)
		}
	}

	const {
		section_form,
		div_iconSuccesPassword,
		form_password,
		formstyles,
		div__button_password,
		div_button_password_styles_nice,
		div_button_password_styles_none,
		section_title,
		section_title_b,
		section_div_title,
		div_title_p,
		passwordValid_focus,
		button_register,
		div_section_form,
	} = styles

	const User = useRegisterUser((state) => state.user)

	return (
		<>
			<section className={section_title}>
				<div className={section_div_title}>
					<p className={section_title_b}>Empecemos</p>
					<p className={div_title_p}>
						Completa el form para crear tu cuenta.
					</p>
				</div>
			</section>
			<div className={div_section_form}>
				<form onSubmit={() => User()} className={section_form}>
					<TextField
						required
						id="outlined-required-email"
						label="Correo electrónico"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						fullWidth
						margin="normal"
					/>

					<div className={form_password}>
						<FormControl
							className={formstyles}
							sx={{ w: '100%' }}
							variant="outlined"
							fullWidth
							value={password}
							onChange={(e) =>
								handleValidationPassword(e.target.value)
							}
							color="success"
							margin="normal"
						>
							{/* <div className={`${passwordValid_focus} `}	>
						</div> */}

							<InputLabel htmlFor="outlined-adornment-password">
								Contraseña
							</InputLabel>
							<OutlinedInput
								id="outlined-adornment-password"
								className={passwordValid_focus}
								type={showPassword ? 'text' : 'password'}
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={
												handleMouseDownPassword
											}
											edge="end"
										>
											{showPassword ?
												<VisibilityOff />
											:	<Visibility />}
										</IconButton>
									</InputAdornment>
								}
								label="Password"
							/>

							{MatchPassword ?
								<div className={div_iconSuccesPassword}>
									<CheckCircleIcon color="success" />
									Contraseña Valida
								</div>
							:	<div className={div__button_password}>
									<div className="flex flex-row items-center gap-3">
										<button
											className={`${!PasswordHas8char ? div_button_password_styles_none : div_button_password_styles_nice}  `}
										></button>
										<p>minimo 8 caracteres</p>
									</div>
									<div className="flex flex-row items-center gap-3">
										<button
											className={`${!PasswordHasUpperCase ? div_button_password_styles_none : div_button_password_styles_nice}  `}
										></button>
										<p>tiene mayusculas</p>
									</div>
									<div className="flex flex-row items-center gap-3">
										<button
											className={`${!PasswordHasNumbers ? div_button_password_styles_none : div_button_password_styles_nice}  `}
										></button>
										<p>tiene un numero o varios</p>
									</div>
									<div className="flex flex-row items-center gap-3">
										<button
											className={`${!PasswordHasLowercase ? div_button_password_styles_none : div_button_password_styles_nice}  `}
										></button>
										<p>tiene una minuscula o mas</p>
									</div>
									<div className="flex flex-row items-center gap-3">
										<button
											className={`${!PasswordHasSpecialChar ? div_button_password_styles_none : div_button_password_styles_nice}  `}
										></button>
										<p>tiene caracteres especiales</p>
									</div>
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
								onChange={(e) =>
									setConfirmPassword(e.target.value)
								}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle confirm password visibility"
											onClick={
												handleClickShowConfirmPassword
											}
											onMouseDown={
												handleMouseDownPassword
											}
											edge="end"
										>
											{showConfirmPassword ?
												<VisibilityOff />
											:	<Visibility />}
										</IconButton>
									</InputAdornment>
								}
								label="Confirm Password"
							/>
							{MatchPassword && (
								<div className={div_iconSuccesPassword}>
									<CheckCircleIcon color="success" />
									Coindicen
								</div>
							)}
						</FormControl>
					</div>
					{!ActiveButtonRegister ?
						<Button
							variant="contained"
							color="primary"
							disabled
							fullWidth
						>
							Registrar
						</Button>
					:	<Button
							variant="contained"
							color="primary"
							onClick={handleRegister}
							className={button_register}
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

					{resStatus === true && (
						<>
							<p>Usuario creado</p>
						</>
					)}
					{resStatus === false && <p>Error al crear usuario</p>}
					<Toaster richColors position="bottom-center" />
				</form>
			</div>
		</>
	)
}

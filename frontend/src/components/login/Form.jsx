import { useEffect, useState } from 'react'
import { CustomTextField } from './CustomTextField'
import {
	Button,
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
} from '@mui/material'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Visibility from '@mui/icons-material/Visibility'
import { useUserStoreTemp } from '../../store'
import { useNavigate } from 'react-router-dom'

export const Form = () => {
	const { login } = useUserStoreTemp()
	const navigate = useNavigate()

	const [showPassword, setShowPassword] = useState(false)
	const [disabled, setDisabled] = useState(true)
	const [loginInfo, setLoginInfo] = useState({
		email: '',
		password: '',
	})

	const handleChange = (e) => {
		setLoginInfo({
			...loginInfo,
			[e.target.name]: e.target.value,
		})
	}

	const isDisable = () => {
		const trimmedEmail = loginInfo.email.trim()
		const trimmedPassword = loginInfo.password.trim()
		const minPasswordChar = 8
		setDisabled(
			trimmedEmail && trimmedPassword.length >= minPasswordChar ?
				false
			:	true
		)
	}

	useEffect(() => {
		isDisable()
	}, [loginInfo])

	return (
		<>
			<div className="flex flex-col gap-6 px-4 md:px-44 mt-11">
				{/* Email input */}
				<CustomTextField
					label="Email"
					type="text"
					value={loginInfo.email}
					name={'email'}
					handleChange={handleChange}
				/>

				{/* Password input */}
				<FormControl variant="outlined">
					<InputLabel htmlFor="password">Password</InputLabel>
					<OutlinedInput
						id="password"
						type={showPassword ? 'text' : 'password'}
						label="Password"
						name="password"
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									onClick={() =>
										setShowPassword(!showPassword)
									}
									edge="end"
								>
									{showPassword ?
										<VisibilityOff />
									:	<Visibility />}
								</IconButton>
							</InputAdornment>
						}
						onChange={handleChange}
					/>
				</FormControl>
			</div>

			<div className="px-4 md:px-44">
				<p className="text-[#807D84] text-xs flex gap-1 mt-2">
					¿Olvidaste tu contraseña?
					<span className="text-[#6E9E30]">Recuperar</span>
				</p>
			</div>

			<div className="p-8 md:px-48 flex justify-center">
				<Button
					disabled={disabled}
					variant="contained"
					className="w-full"
					sx={{
						bgcolor: '#6E9E30',
						color: 'white',
						borderRadius: '20px',
						':hover': {
							bgcolor: '#6E9E30',
						},
						':disabled': {
							color: 'white',
							bgcolor: '#b5cd98',
						},
					}}
					onClick={() => {
						login(loginInfo, navigate)
					}}
				>
					Ingresar
				</Button>
			</div>
		</>
	)
}

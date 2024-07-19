/* eslint-disable arrow-body-style */

import '../App.css'
import styles from './Register.module.css'
import background_gen from '../assets/img/background_gen.png'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
/* import { RegNav } from "../components"; */

const { container, containerBanner, buttonFirst, textLink, listButton } = styles

export const Register = () => {
	const Nav = useNavigate()

	const Waiting = () => {
		Nav('/register')
	}

	return (
		<>
			<div className={container}>
				<div className={containerBanner}>
					<img src={background_gen} alt="" />
					<h2>Bienvenido</h2>
				</div>
				<div className={listButton}>
					<Button
						variant="contained"
						onClick={Waiting}
						className={buttonFirst}
					>
						Registrarse
					</Button>
					<hr />
					{/* <Button variant="contained"  className={buttonFirst}>
                                <GoogleIcon/>
                                Registrarme con Google</Button> */}
					<p>
						Al registrarme, acepto los
						<a href="#" className={textLink}>
							Términos de uso
						</a>{' '}
						y la{' '}
						<a href="#" className={textLink}>
							Política de privacidad
						</a>{' '}
						de la empresa.
					</p>
				</div>
			</div>
		</>
	)
}

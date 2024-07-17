import { useEffect, useState } from 'react'
import estilos from './style.module.css'
import { useNavigate } from 'react-router-dom'

const { loader, spinner, path } = estilos
const usuariofalso = "santiagofotos@ejemplo.com"

export const AuthUser = () => {
	const Nav = useNavigate()
	const [auth, setauth] = useState(false)
	const [load, setload] = useState(false)


	const goToLogin = () => {

		setTimeout(() => {

			Nav("/login")
		}, 1000)

	}

	useEffect(() => {
		setload(true)
		setTimeout(() => {

			setload(false)
		}, 1000)

	}, [])

	return (

		<section className="h-[40vh]">
			<div className="h-[10vh] bg-[#0D4937]">

			</div>
			{
				!auth ?
					<div className='flex justify-center flex-col '>

						<h2 className="flex justify-center text-[2rem]">Valida tu email</h2>
						<p className='flex justify-center  w-full  min-w-[300px] text-center '>Te enviamos			un email de verificación a
							{usuariofalso}
						</p>
						<p className='flex justify-center  w-full'>Recordá revisar el spam.</p>
					</div>
					:
					<div className='flex justify-center flex-col '>

						<h2 className="flex justify-center text-[2rem]">Bienvenido</h2>
						<p className='flex justify-center  w-full  min-w-[300px] text-center '> ¡Gracias! Hemos verificación tu correo electrónico.
							{usuariofalso}
						</p>
					</div>
			}

			<div className="flex justify-center p-[4rem]">

				<img src="https://placehold.co/200x200" alt="" />
			</div>
			{
				load &&
				<div className="flex justify-center pt-[2rem]">

					<div className={loader}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 66" height="100px" width="100px" className={spinner}>
							<circle stroke="url(#gradient)" r="20" cy="33" cx="33" strokeWidth="1" fill="transparent" className={path}></circle>
							<linearGradient id="gradient">
								<stop stopOpacity="1" stopColor="#65558F" offset="0%"></stop>
								<stop stopOpacity="0" stopColor="#5f5b62" offset="100%"></stop>
							</linearGradient>

						</svg>
					</div>
				</div>



			}
			{
				!load && !auth &&
				<div className='flex justify-center gap-[2rem] flex-col pt-[4rem]'>

					<p className='flex justify-center text-4xl'>¿Ya te llegó el mail?</p>
					<button className='flex justify-center border p-3 text-[#0D4937] rounded-3xl border-slate-500 mx-auto w-[300px] hover:bg-[#0d49373c] hover:text-[#fff]'>Reenviar mail</button>
				</div>
			}

			{
				auth &&
				<>
					<div className='flex justify-center gap-[2rem] flex-col pt-[4rem]'>

						<button className='flex justify-center border p-3
							text-[#ffffff]
							cursor-pointer rounded-3xl
							border-slate-500 mx-auto w-[300px] bg-[#6E9E30] border-none hover:bg-[#93d044] transition-all ease-in-out .5s'>Completa el perfil</button>
						<p className='flex justify-center text-xl text-[#6DA02B] cursor-pointer'>Completar mas tarde</p>
					</div>
				</>
			}

		</section>
	)
}

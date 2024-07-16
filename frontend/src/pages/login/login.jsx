import { Divider } from '@mui/material'
import { Header, Form } from '../../components'
import { Link } from 'react-router-dom'

export const Login = () => (
	<div className="min-h-screen">
		<Header />
		<div className="lg:flex">
			<div className="lg:w-[45%]">
				<Form />

				<div className="px-8 flex justify-center">
					<p className="text-[#807D84] text-xs flex gap-1 mt-2">
						¿No tenés una cuenta?
						<Link to="/register" className="text-[#6E9E30]">
							Registrarme
						</Link>
					</p>
				</div>

				{/* <Divider variant='middle' className='text-[#807D84]'>O</Divider> */}
				{/* 
					// TODO: Google auth 
				*/}
			</div>

			<div className="hidden md:flex md:justify-center rounded-3xl mb-9 mt-14 lg:m-0">
				<span className="lg:hidden">
					<img
						className="rounded-3xl"
						src="https://placehold.co/500x300"
						alt="placeholder"
					/>
				</span>
				<span className="hidden lg:block -translate-y-20">
					<img
						className="rounded-3xl"
						src="https://placehold.co/680x760"
						alt="placeholder"
					/>
				</span>
			</div>
		</div>
	</div>
)

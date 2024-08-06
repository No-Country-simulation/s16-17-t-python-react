import { Header, Form } from '../../components'
import { Link } from 'react-router-dom'
import banner from '../../assets/img/login-banner.png'

export const Login = () => (
	<div className="min-h-screen">
		<Header />
		<div className="lg:flex">
			<div className="items-center flex-col w-full flex lg:w-[45%]">
				<Form />
				<div>
					<p className="text-[#807D84] text-xs flex gap-1 mt-2">
						¿No tienes una cuenta?
						<Link to="/register" className="text-[#6E9E30]">
							Registrarme
						</Link>
					</p>
				</div>
				{/* 
					// TODO: Google auth 
				*/}
			</div>

			<div className="hidden md:flex md:justify-center rounded-3xl mb-9 mt-14 lg:m-0">
				<span className="lg:hidden">
					<img
						className="rounded-3xl md:h-80 md:w-[529px]"
						src={banner}
						alt="placeholder"
					/>
				</span>
				<span className="hidden lg:block -translate-y-20">
					<img
						className="rounded-3xl"
						src={banner}
						alt="placeholder"
					/>
				</span>
			</div>
		</div>
	</div>
)

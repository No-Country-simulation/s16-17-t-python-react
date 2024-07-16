import { Divider } from '@mui/material'
import { Header, Form } from '../../components'

export const Login = () => (
	<div className="min-h-screen">
		<Header />
		<Form />

		<div className="px-8 mb-6 flex justify-center">
			<p className="text-[#807D84] text-xs flex gap-1 mt-2">
				¿No tenés una cuenta?
				<span className="text-[#6E9E30]">Registrarme</span>
			</p>
		</div>

		{/* <Divider variant='middle' className='text-[#807D84]'>O</Divider> */}
		{/* 
			// TODO: Google auth 
		*/}
	</div>
)

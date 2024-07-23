import React from 'react'
import { DataProfile } from '../../components/account'
import { NavBar } from '../../components/navigation'

export const EditAccountPage = () => (
	<div className="w-[100%] lg:h-[100vh]">
		<NavBar />
		<div className="h-44 bg-[#0D4937] py-[21px] flex items-end mb-[32px] w-[100%]">
			<div className="w-[90%] md:w-[50%] ml-5">
				<h1 className="text-white text-[28px] font-medium">¡Hola!</h1>
			</div>
		</div>
		<div className="flex justify-center items-center lg:h-[calc(100vh-202px)]">
			<DataProfile />
		</div>
	</div>
)

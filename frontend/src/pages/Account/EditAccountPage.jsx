import React from 'react'
// import { AccountPhotoProfile } from '../../components/account/AccountPhotoProfile'
import { DataProfile } from '../../components/account'

export const EditAccountPage = () => (
	<div className="w-[100%] lg:h-[100vh]">
		<div className="h-[170px] bg-[#0D4937] py-[21px] flex items-end mb-[32px] w-[100%]">
			{/* <AccountPhotoProfile /> */}
			<div className="w-[90%] md:w-[50%]">
				<h1 className="text-white text-[28px] font-bold">¡Hola!</h1>
			</div>
		</div>
		<div className="flex justify-center items-center lg:h-[calc(100vh-202px)]">
			<DataProfile />
		</div>
	</div>
)

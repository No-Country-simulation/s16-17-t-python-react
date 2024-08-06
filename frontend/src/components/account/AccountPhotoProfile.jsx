/* eslint-disable arrow-body-style */
import { Badge } from '@mui/material'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'
import { NavLink } from 'react-router-dom'
import Tooltip from '@mui/material/Tooltip'
import useUserStore from '../../store/store'

export const AccountPhotoProfile = () => {
	const { user } = useUserStore()
	const profileImage = user?.image || '/src/assets/img/profile_default.png'

	return (
		<Badge
			overlap="circular"
			anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
			badgeContent={
				<div className="bg-bgButton rounded-[12px] w-[40px]  h-[40px] flex justify-center items-center">
					<Tooltip title="Cambiar Foto de perfil">
						<NavLink to="">
							<DriveFileRenameOutlineIcon className="text-[#FFF]" />
						</NavLink>
					</Tooltip>
				</div>
			}
		>
			<img
				src={profileImage}
				alt="profile image"
				className="w-[140px] h-[140px] rounded-[50%] object-cover"
				style={{ zIndex: 1 }}
			/>
		</Badge>
	)
}

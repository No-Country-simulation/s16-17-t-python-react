import { Badge } from '@mui/material'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { NavLink } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip'

export const AccountPhotoProfile = () => (
	<Badge
		overlap="circular"
		anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
		badgeContent={
			<div className="bg-bgButton rounded-[12px] w-[40px]  h-[40px] flex justify-center items-center">
				<Tooltip title='Editar Perfil'>
					<NavLink to='/account/edit'>
						<DriveFileRenameOutlineIcon className="text-[#FFF]" />
					</NavLink>
				</Tooltip>
				
			</div>
		}
	>
		<img
			src="/src/assets/img/profile_default.png"
			alt="profile image"
			className="w-[140px] h-[140px] rounded-[50%] object-cover"
			style={{ zIndex: 1 }}
		/>
	</Badge>
)

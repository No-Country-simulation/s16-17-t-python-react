import { Avatar, Badge } from '@mui/material'
import CreateIcon from '@mui/icons-material/Create'

export const AccountPhotoProfile = () => (
	<Badge
		overlap="circular"
		anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
		badgeContent={
			<div className="bg-white rounded-[12px] w-[40px]  h-[40px] flex justify-center items-center">
				<CreateIcon className="text-[#6E9E30]" />
			</div>
		}
	>
		<img
			src="https://thumbor.forbes.com/thumbor/fit-in/1290x/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg"
			alt="profile image"
			className="w-[140px] h-[140px] rounded-[50%] object-cover"
			style={{ zIndex: 1 }}
		/>
	</Badge>
)

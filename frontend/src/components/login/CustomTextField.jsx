import { TextField } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

export const CustomTextField = ({
	type = 'text',
	label,
	name,
	handleChange,
	value,
	icon,
	setShowPassword,
	showPassword,
}) => (
		<div className="flex flex-col gap-2 justify-center">
			<TextField
				label={label}
				type={type}
				name={name}
				value={value}
				onChange={handleChange}
				variant="outlined"
				className=""
			/>
			{/* {icon ? (
                <span
                className="absolute flex flex-start w-full"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </span>
            ): null} */}
		</div>
	)

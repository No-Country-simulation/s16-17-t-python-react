/* eslint-disable arrow-body-style */

import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'
import './style.css'

export const SearchBar = () => {
	const [active, setActive] = useState(false)

	const handleToggle = () => {
		setActive(!active)
	}

	return (
		<>
			<div
				className={`relative w-12 h-12 rounded-full transition duration-100 overflow-hidden ${active ? 'active' : ''}`}
			>
				<span
					className="absolute top-0 left-0 z-50 cursor-pointer w-12 h-12 rounded-full flex justify-center items-center"
					onClick={handleToggle}
				>
					<SearchIcon sx={{ color: '#49454F' }} />
				</span>
				<div className="absolute w-72 h-12 left-[60px] flex justify-center items-center text-black ">
					<input
						type="text"
						placeholder="Buscar..."
						className="top-0 w-full h-full border-none outline-none"
					/>
				</div>
			</div>
		</>
	)
}
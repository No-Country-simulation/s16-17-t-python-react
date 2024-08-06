/* eslint-disable no-magic-numbers */
/* eslint-disable arrow-body-style */

import { Box, IconButton, Typography } from '@mui/material'
import TuneIcon from '@mui/icons-material/Tune'
import SearchIcon from '@mui/icons-material/Search'
import json_galery from './favgallery.json'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

// la ultima foto está desproporcionada, por eso el slice
const json_withoutLastIndex = json_galery.slice(0, 5)
export const EventsFav = () => {
	return (
		<>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: '50px',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						width: '100%',
					}}
				>
					<Typography>Galería</Typography>
					<IconButton
						aria-label="filter"
						sx={{ alignSelf: 'flex-end' }}
					>
						<TuneIcon />
					</IconButton>
				</Box>
				{
					<section className="grid grid-cols-2 gap-[1rem] mx-auto max-w-[1200px] pt-[2rem]">
						{json_withoutLastIndex.map((e) => (
							<div
								key={e.id}
								className=" bg-[#F2F5FA] rounded-lg cursor-pointer h-[12rem] w-[156px] gap-2 hover:scale-105 transition-all .5s ease-in-out"
							>
								<div className="flex">
									<img
										className="h-auto  w-full max-w-[202px] p-1 rounded-[1.2rem] object-cover"
										src={e.imagen}
										alt=""
									/>
								</div>
								<div className="flex items-center w-full p-1">
									<AccountCircleIcon />
									<p className="text-xs">Elvira Mendoza</p>
								</div>
							</div>
						))}
					</section>
				}
				{/* dejo comentando el codigo por si acaso */}
				{/* <Box
					sx={{
						backgroundColor: '#F2F5FA',
						width: { xs: '189px' },
						height: { xs: '183px' },
						borderRadius: '12px',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						px: '20px',
						gap: '20px',
					}}
				> */}

				{/* <IconButton
						sx={{
							backgroundColor: '#E5E5E9',
						}}
					>
						<SearchIcon
							sx={{
								color: '#1D1B20',
							}}
						/>
					</IconButton>
					<Typography
						sx={{
							color: '#BBC1C7',
							fontSize: '12px',
							textAlign: 'center',
						}}
					>
						Tu galería esta vacia. Aquí aparecerán las álbumes que
						hayas guardado.
					</Typography> */}
				{/* </Box> */}
			</Box>
		</>
	)
}

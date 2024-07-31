/* eslint-disable arrow-body-style */
/* eslint-disable no-magic-numbers */
import { useState } from 'react'
import TravelIcon from '../../../../assets/img/travel-icon.svg'
import SpotIcon from '../../../../assets/img/spot-icon.svg'
import {
	Button,
	TextField,
	Typography,
	Stack,
	Box,
	IconButton,
	styled,
} from '@mui/material'
import useStepStore from '../../../../store/step'
import TravelExploreIcon from '@mui/icons-material/TravelExplore'
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff'
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus'
import DirectionsTransitIcon from '@mui/icons-material/DirectionsTransit'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'
import CloseIcon from '@mui/icons-material/Close'
import CheckIcon from '@mui/icons-material/Check'

export const StepperCard = () => {
	const StyledTextField = styled(TextField)`
		& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
			border-color: #bbc1c7;
		}
		& .MuiFormLabel-root {
			color: #bbc1c7;
		}
		& .Mui-focused .MuiOutlinedInput-notchedOutline {
			border-color: #fff;
		}
		& .MuiInputBase-input {
			color: #fff;
		}
		& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
			border-color: #fff;
		}
		& .MuiInputLabel-outlined:hover {
			color: #fff;
		}
		& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input {
			color: #fff;
		}
		& .MuiInputLabel-outlined.Mui-focused {
			color: #fff;
		}
	`
	const [showSpotForm, setShowSpotForm] = useState(false)
	const [showTravelForm, setShowTravelForm] = useState(false)
	const [showSpotDetails, setShowSpotDetails] = useState(false)

	const handleTravelClick = () => {
		setShowTravelForm(true)
	}

	const closeTravel = () => {
		setShowTravelForm(false)
	}

	const handleSpotClick = () => {
		setShowSpotForm(true)
	}

	const closeSpot = () => {
		setShowSpotForm(false)
	}

	const { nextStep } = useStepStore()

	return (
		<>
			{!showTravelForm && !showSpotForm && (
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: '3px',
					}}
				>
					<Typography fontSize="14px">Dia 1</Typography>
					<Typography fontSize="12px">
						Agrega un spot fotográfico, transporte o evento
					</Typography>
					<Stack direction="row" spacing={1}>
						<Button
							variant="outlined"
							startIcon={
								<img
									src={TravelIcon}
									width="20px"
									height="20px"
								/>
							}
							onClick={handleTravelClick}
							sx={{
								borderColor: '#c9c9c9',
								color: '#fff',
								'&:hover': {
									borderColor: 'transparent',
									backgroundColor: '#6E9E30',
								},
							}}
						>
							Viaje
						</Button>
						<Button
							variant="outlined"
							onClick={handleSpotClick}
							startIcon={
								<img
									src={SpotIcon}
									width="20px"
									height="20px"
								/>
							}
							sx={{
								borderColor: '#c9c9c9',
								color: '#fff',
								'&:hover': {
									borderColor: 'transparent',
									backgroundColor: '#6E9E30',
								},
							}}
						>
							Spot
						</Button>
					</Stack>
				</Box>
			)}

			{showTravelForm /* Refactorizar código */ && (
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						mt: '10px',
					}}
				>
					<Typography fontSize="14px">Dia 1</Typography>
					<Stack
						direction="row"
						sx={{
							justifyContent: 'space-around',
							py: '10px',
						}}
					>
						<IconButton sx={{ color: '#fff' }}>
							<FlightTakeoffIcon />
						</IconButton>
						<IconButton sx={{ color: '#fff' }}>
							<DirectionsBusIcon />
						</IconButton>
						<IconButton sx={{ color: '#fff' }}>
							<DirectionsTransitIcon />
						</IconButton>
						<IconButton sx={{ color: '#fff' }}>
							<DirectionsCarIcon />
						</IconButton>
					</Stack>
					<Stack spacing={2}>
						<StyledTextField label="Origen" variant="outlined" />
						<StyledTextField label="Destino" variant="outlined" />
						<Box
							sx={{
								display: 'flex',
								gap: '10px',
							}}
						>
							<StyledTextField
								label="Empieza"
								variant="outlined"
							/>
							<StyledTextField
								label="Termina"
								variant="outlined"
							/>
						</Box>
					</Stack>
					<Stack
						direction="row"
						sx={{
							alignSelf: 'flex-end',
							mt: '15px',
						}}
					>
						<IconButton
							sx={{ color: '#fff' }}
							onClick={closeTravel}
						>
							<CloseIcon />
						</IconButton>
						<IconButton
							sx={{
								color: '#6E9E30',
								backgroundColor: '#EFEFEF',
							}}
						>
							<CheckIcon />
						</IconButton>
					</Stack>
				</Box>
			)}
			{showSpotForm && (
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						mt: '10px',
						gap: '15px',
					}}
				>
					<Typography fontSize="14px">Dia 1</Typography>
					<Stack spacing={2}>
						<StyledTextField label="Nombre" variant="outlined" />
						<StyledTextField label="Lugar" variant="outlined" />
						<Box
							sx={{
								display: 'flex',
								gap: '10px',
							}}
						>
							<StyledTextField
								label="Empieza"
								variant="outlined"
							/>
							<StyledTextField
								label="Termina"
								variant="outlined"
							/>
						</Box>
						<StyledTextField label="Notas" variant="outlined" />
					</Stack>
					<Stack
						direction="row"
						sx={{
							alignSelf: 'flex-end',
							mt: '15px',
						}}
					>
						<IconButton sx={{ color: '#fff' }} onClick={closeSpot}>
							<CloseIcon />
						</IconButton>
						<IconButton
							sx={{
								color: '#6E9E30',
								backgroundColor: '#EFEFEF',
							}}
							onClick={nextStep}
						>
							<CheckIcon />
						</IconButton>
					</Stack>
				</Box>
			)}
		</>
	)
}

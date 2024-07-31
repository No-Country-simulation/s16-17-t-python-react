/* eslint-disable arrow-body-style */
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea, List, ListItem } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import events from './events.json'

export const EventsCard = () => {
	return (
		<>
			{events.map((event, index) => (
				<Card sx={{ minWidth: 325, borderRadius: '20px' }} key={index}>
					<CardActionArea
						sx={{
							display: 'flex',
							justifyContent: 'flex-start',
							p: '10px',
							gap: '20px',
						}}
					>
						<CardMedia
							component="img"
							image="https://cloudfront.slrlounge.com/wp-content/uploads/2019/09/Top-10-Event-Photography-Gear-SLR-Lounge_0001.jpg"
							alt="Evento de fotografía"
							style={{
								width: '91px',
								height: '84px',
								borderRadius: '15px',
							}}
						/>
						<CardContent sx={{ flex: 1, p: 0 }}>
							<List>
								<ListItem sx={{ p: 0 }}>
									<Typography
										gutterBottom
										component="div"
										sx={{
											fontSize: '1rem',
											fontWeight: 'bold',
										}}
									>
										{event.eventName}
									</Typography>
								</ListItem>
								<ListItem sx={{ p: 0, gap: '10px' }}>
									<LocationOnIcon />
									<Typography
										variant="body2"
										color="text.secondary"
										sx={{ fontSize: '12px' }}
									>
										{event.location}
									</Typography>
								</ListItem>
								<ListItem sx={{ p: 0, gap: '10px', mt: '5px' }}>
									<CalendarMonthIcon />
									<Typography
										variant="body2"
										color="text.secondary"
										sx={{ fontSize: '12px' }}
									>
										{event.date}
									</Typography>
								</ListItem>
							</List>
						</CardContent>
					</CardActionArea>
				</Card>
			))}
		</>
	)
}

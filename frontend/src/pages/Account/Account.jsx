/* eslint-disable arrow-body-style */
import * as React from 'react'
import { Container } from '@mui/material'
import { NavBar } from '../../components'
import { AccountCardProfile } from '../../components/account/AccountCardProfile'
import { TabsPanel } from '../../components/tabs/TabsPanel'
// import { CreateAlbum } from '../galery/CreateAlbum'

export const Account = () => {
	return (
		<>
			<NavBar />
			<Container
				sx={{
					backgroundColor: '#FBFCFF',
					mt: { xs: '2.5rem', md: '5rem' },
					width: '100%',
					display: 'flex',
					flexDirection: { xs: 'column', md: 'row' },
					gap: { lg: '60px' },
				}}
				maxWidth="xl"
			>
				<AccountCardProfile />
				<TabsPanel />
			</Container>
		</>
	)
}

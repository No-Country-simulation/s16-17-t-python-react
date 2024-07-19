import React from 'react'
import { Login, RegisterComponente } from './pages'
import { NavBar } from './components'
import { EditAccountPage } from './pages/Account/EditAccountPage'

export const routes = [
	{
		path: '/',
		element: <NavBar />,
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/register',
		element: <RegisterComponente />,
	},
	{
		path: '/profile/account',
		element: <EditAccountPage />,
	},
]

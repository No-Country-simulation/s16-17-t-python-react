import React from 'react'
import { Login } from './pages'
import { EditAccountPage } from './pages/Account/EditAccountPage'

export const routes = [
	{
		path: '/',
		element: <h1>Hola</h1>,
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/profile/account',
		element: <EditAccountPage />,
	},
]

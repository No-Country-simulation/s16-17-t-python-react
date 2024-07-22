import React from 'react'
import { Login, RegisterComponente } from './pages'
import { NavBar } from './components'
import { EditAccountPage } from './pages/Account/EditAccountPage'
import { Account } from './pages/Account/Account'

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
		path: '/account/edit',
		element: <EditAccountPage />,
	},
	{
		path: '/account',
		element: <Account />
	}
]

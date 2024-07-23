import React from 'react'
import { Login, RegisterComponente } from './pages'
import { NavBar } from './components'
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
		path: '/auth',
		element: <AuthUser />,
	},
]

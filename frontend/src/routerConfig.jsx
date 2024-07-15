import React from 'react'
import { RegisterComponente } from './components/Register/Register'
import { Home, Login } from './pages'

export const routes = [
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/register',
		element: <RegisterComponente />,
	},
	{
		path: '/login',
		element: <Login />,
	},
]

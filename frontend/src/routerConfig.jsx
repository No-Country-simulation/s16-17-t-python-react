import React from 'react'
import { RegisterComponente } from './components/Register/Register'
import { Home } from './pages'

export const routes = [
	{
		path: '/register',
		element: <RegisterComponente />,
	},
	{
		path: '/',
		element: <Home />,
	},
]

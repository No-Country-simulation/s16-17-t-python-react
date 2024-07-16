import React from 'react'
import { Login, RegisterComponente } from './pages'
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
		path: '/register',
		element: <RegisterComponente />,
	},
]

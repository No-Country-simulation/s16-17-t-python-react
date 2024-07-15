import React from 'react'
import { RegisterComponente } from './components/register/Register'
import { ErrorPage, Home } from './pages'

export const routes = [
	{
		path: 'register',
		element: <RegisterComponente />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/',
		element: <Home />,
	},
]

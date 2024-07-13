import React from 'react'
import { RegisterComponente } from './components/Register/Register'
import { ErrorPage, Home } from './pages'

export const routes = [
	{
		path: 'register',
		element: <RegisterComponente />,
		errorElement: <ErrorPage />
	},
	{
		path: "/",
		element: <Home />
	}
]

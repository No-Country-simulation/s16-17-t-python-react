import React from 'react'
import { ErrorPage, Home } from './pages'
import {RegisterComponente} from './components/register/RegisterComponente2'

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

import React from 'react'
<<<<<<< HEAD
import { RegisterComponente } from './components/register/Register'

=======
import { RegisterComponente } from './components/Register/Register'
import { ErrorPage, Home } from './pages'
>>>>>>> 2c89f1e3e365682b8aa8aae647709f8ea82baf1d

export const routes = [
	{
		path: 'register',
		element: <RegisterComponente />,
<<<<<<< HEAD
		
		// loader: <Loader />
=======
		errorElement: <ErrorPage />,
	},
	{
		path: '/',
		element: <Home />,
>>>>>>> 2c89f1e3e365682b8aa8aae647709f8ea82baf1d
	},
]

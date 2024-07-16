import React from 'react'
// import { RegisterComponente  } from './pages/index'
// no me carga el export dentro del barril
import { ErrorPage, Home } from './pages'
import {RegisterComponente} from './components/register/RegisterComponente2'
import { SuccesRegister} from './pages/SuccesRegister'

export const routes = [
	{
		path: 'register',
		element: <RegisterComponente />,
		errorElement: <ErrorPage />,
	},
	{
		path: 'succesregister',
		element: <SuccesRegister />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/',
		element: <Home />,
	},
]

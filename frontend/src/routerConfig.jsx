import React from 'react'
import {
	Login,
	RegisterComponente,
	AuthUser,
	AlbumForm,
	EventsForm,
	Home,
} from './pages'
import { NavBar } from './components'
import { EditAccountPage } from './pages/Account/EditAccountPage'
import { Account } from './pages/Account/Account'

export const routes = [
	{
		path: '/',
		element: <Home />,
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
		element: <Account />,
	},
	{
		path: '/create/photo',
		element: <AlbumForm />,
	},
	{
		path: '/create/events',
		element: <EventsForm />,
	},
]

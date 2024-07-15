/* eslint-disable arrow-body-style */

/* Este es un componente de pruebas para el navbar, para la versión final pueden borrarlo de ser necesario!!! */

import { NavBar } from '../components/navigation/NavBar'

export const Home = () => {
	return (
		<>
			<NavBar />
			<div className="bg-green-800 h-28 text-white flex justify-center items-center text-3xl font-bold">
				Hola
			</div>
		</>
	)
}

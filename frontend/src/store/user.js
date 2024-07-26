/* eslint-disable no-console */
import { create } from 'zustand'
import { errorToast, successToast } from '../utils/toast'

export const useUserStoreTemp = create(() => ({
	login: async (data, navigate) => {
		const response = await fetch(
			`${import.meta.env.VITE_BACKEND_URL}/account/token/`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			}
		)
		console.log(data)
		const STATUS_OK = 200
		if (response.status !== STATUS_OK) {
			errorToast({
				title: 'Algo salió mal.',
				description: 'Por favor intentelo de nuevo.',
			})
			return
		}
		const body = await response.json()
		localStorage.setItem('token', body.access)

		successToast({
			title: 'Inicio de sesión exitoso.',
			description: 'Pronto será redirigido.',
		})

		const MILLISECONDS_TO_REDIRECT = 2000
		setTimeout(() => {
			navigate('/')
		}, MILLISECONDS_TO_REDIRECT)
	},
}))

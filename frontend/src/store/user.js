import { create } from 'zustand'
console.log(import.meta.env.VITE_BACKEND_URL)

export const useUserStoreTemp = create(() => ({
	login: async (data) => {
		console.log('Informacion del login', data)
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
		const body = await response.json()
		localStorage.setItem('token', body.access)
	},
}))

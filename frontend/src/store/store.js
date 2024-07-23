/* eslint-disable no-console */
import { create } from 'zustand'

const useUserStore = create((set) => ({
	user: 'John',
	setUser: (user) => set({ user }),
	clearUser: () => set({ user: null }),

	// Nueva función para obtener los datos del perfil
	fetchUserProfile: async () => {
		try {
			const response = await fetch(
				`${import.meta.env.VITE_BACKEND_URL}/account/profile/`,
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						// Agrega el token de autenticación si es necesario
						Authorization: `Bearer ${localStorage.getItem('token')}`,
					},
				}
			)

			if (!response.ok) {
				throw new Error('Error al obtener los datos del perfil')
			}

			const data = await response.json()
			set({ user: data })
		} catch (error) {
			console.error('Error:', error)
		}
	},
}))

export default useUserStore

/* eslint-disable no-console */
import { create } from 'zustand'
import { errorToast, successToast } from '../utils/toast'

const useUserStore = create((set) => ({
	user: null,
	setUser: (user) => set({ user }),
	clearUser: () => set({ user: null }),
	fetchUserProfile: async () => {
		try {
			const response = await fetch(
				`${import.meta.env.VITE_BACKEND_URL}/account/profile/`,
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
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
	editUserProfile: async (updatedData) => {
		try {
			const isFormData = updatedData instanceof FormData

			const headers = {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			}

			if (!isFormData) {
				headers['Content-Type'] = 'application/json'
			}

			const response = await fetch(
				`${import.meta.env.VITE_BACKEND_URL}/account/profile/`,
				{
					method: 'PUT',
					headers: headers,
					body:
						isFormData ? updatedData : JSON.stringify(updatedData),
				}
			)

			if (!response.ok) {
				const errorData = await response.json()
				throw new Error(
					`Error al obtener datos: ${response.status} - ${errorData.message || response.statusText}`
				)
			}

			const updatedUser = await response.json()
			set({ user: updatedUser })
			console.log(updatedUser)

			successToast({
				title: 'Datos actualizados exitosamente!.',
				description: 'Pronto serás redirigido.',
			})
		} catch (error) {
			console.error(error)
			errorToast({
				title: 'Algo salió mal.',
				description: 'Por favor intentelo de nuevo.',
			})
		}
	},
}))

export default useUserStore

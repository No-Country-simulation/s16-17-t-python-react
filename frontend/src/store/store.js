import { create } from 'zustand'

const headerTypeJson = { 'Content-Type': 'application/json' }
const headerGetMailValid = {}
const IP = 'http://127.0.0.1:8000/account'
// const api = "http://127.0.0.1:8000/account/register-user/"
// const verifY = "http://127.0.0.1:8000/account/verify-email/?uid=6&"

// endpoint verificacion de email /account/verify-email/?uid=6&otp=4I5MJIVLUvgv7XQSb3Bl9q9gZskcIl38hQghdwtNGhkvFUbBXgcWCPe3c8tIDx9I
export const useRegisterUser = create((set) => ({
	dataReq: null,
	errorReq: null,
	isLoad: false,
	AuthValid: false,
	ErrorGetValidUser: null,
	GetVadilUser: [],
	resStatus: false,

	// Invalid request
	setUser: async (endpoint, DataUser) => {
		try {
			
			const req = await fetch(endpoint, {
				method: 'POST',
				headers: headerTypeJson,
				body: JSON.stringify(DataUser),
			})
			console.log(
				'esto viene del res final: ' + req.status + ' ' + req.statusText
			)
			set({ resStatus: req.status === '201' ? true : false })

			const res = req.json()
			console.log(res)
		} catch (error) {
			set({ dataReq: null, errorReq: error.message })

			console.log('Hubo un error en la peticion ' + error)
		}
	},
	getUser: async (endpoint) => {
		set({ isLoad: true })
		try {
			const ReqUser = await fetch(`${endpoint}`)
			// "http://127.0.0.1:8000/account/verify-email/"
			const ResUser = await ReqUser.json()
			set({ GetVadilUser: ResUser, ErrorGetValidUser: null })

			set({ AuthValid: 'Invalid request' ? false : true })
		} catch (error) {
			set({ AuthValid: false })
			set({ isLoad: false })
			set({ GetVadilUser: null, ErrorGetValidUser: error })
			console.log('Ocurrió un error en get => ' + error)
		} finally {
			set({ isLoad: false })
		}
	},
}))

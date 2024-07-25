import { create } from 'zustand'

const headerTypeJson = { 'Content-Type': 'application/json' }

export const CreateAlbumStore = create((set) => {
	TitleAlbum: null
	postTitleAlbum: async (endpoint, data) => {
		try {
			const req = await fetch(endpoint, {
				method: 'POST',
				headers: headerTypeJson,
				body: JSON.stringify(data),
			})
			console.log(
				req.status === 201 && ' La peticion se creó ' + req.status
			)
		} catch (error) {
			console.log('Ocurrió un error')
			console.log(req.status != 201 && ' La peticion falló ' + req.status)
		}
	}
})

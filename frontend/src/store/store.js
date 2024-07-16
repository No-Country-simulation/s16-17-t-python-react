import { create } from 'zustand'
import Axios from 'axios'
const useUserStore = create((set) => ({
	user: null,
	error: null,
	lead: false,
	setUser:async  (url, payload) =>{
		set({load: true})
		try {
			const req = await Axios.post(url, payload)
			set({ user: req.data, error: null })
			
		} catch (error) {
			set({user: null, error: error})
		}finally{
			set({load: false})
		}
		 /* Estado para vincular con confirmación de usuario */
		},
		clearUser: () => set({ user: null })
}))

export default useUserStore

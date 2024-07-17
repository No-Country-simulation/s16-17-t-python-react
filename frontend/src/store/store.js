import { create } from 'zustand'

const useUserStore = create((set) => ({
	user: null,
	setUser: (user) =>
		set({ user }) /* Estado para vincular con confirmación de usuario */,
	clearUser: () => set({ user: null }),
}))

export default useUserStore

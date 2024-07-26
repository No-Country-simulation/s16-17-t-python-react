import create from 'zustand'

const like = 1

const useAlbumStore = create((set) => ({
	data: [],
	setData: (newData) => set((state) => ({ data: newData })),
	toggleLike: (id) =>
		set((state) => ({
			data: state.data.map((item) =>
				item.id === id ?
					{
						...item,
						liked: !item.liked,
						likes:
							item.liked ? item.likes - like : item.likes + like,
					}
				:	item
			),
		})),
}))

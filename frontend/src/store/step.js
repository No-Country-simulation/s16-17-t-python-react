/* eslint-disable no-magic-numbers */
import { create } from 'zustand'

const useStepStore = create((set) => ({
	activeStep: 0,
	nextStep: () => set((state) => ({ activeStep: state.activeStep + 1 })),
	previousStep: () => set((state) => ({ activeStep: state.activeStep - 1 })),
	resetStep: () => set({ activeStep: 0 }),
	setActiveStep: (step) => set({ activeStep: step }),
}))

export default useStepStore

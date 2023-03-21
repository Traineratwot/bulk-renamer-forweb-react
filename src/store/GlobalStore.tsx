import { create } from "zustand"
import { immer } from "zustand/middleware/immer"
import { persist, createJSONStorage } from "zustand/middleware"
import { devtools } from "zustand/middleware"

export interface IGlobalStore {
	isAuthenticated: boolean
	setAuthentication: (isAuthenticated: boolean) => void
}


export const UseGlobalStore = create<IGlobalStore>()(devtools(immer((set) => ({
	isAuthenticated: false,
	setAuthentication: (isAuthenticated: boolean) => set(state => {
		state.isAuthenticated = isAuthenticated
	}),
}))))
export default UseGlobalStore

import {create} from 'zustand'

interface ToggleState {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}

export const useToggleState = create<ToggleState>()((set)=> ({
    isOpen:false,
    setIsOpen: (isOpen: boolean) => set({isOpen})
}))
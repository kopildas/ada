import { news } from '@/utils/types'
import {create} from 'zustand'

interface ToggleState {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
    
    is_Search_Open: boolean
    setIs_Search_Open: (is_Search_Open: boolean) => void

    newsData: news[]
  setNewsData: (newsData: news[]) => void; 
}

export const useToggleState = create<ToggleState>()((set)=> ({
    isOpen:false,
    setIsOpen: (isOpen: boolean) => set({isOpen}),

    is_Search_Open:false,
    setIs_Search_Open: (is_Search_Open: boolean) => set({is_Search_Open}),

    newsData: [] as news[],
    setNewsData: (newsData: news[]) => set({ newsData }),
}))
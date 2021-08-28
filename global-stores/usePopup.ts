import create from "zustand";

type CountBears  = {
    showSettings:boolean;
    showWorkrate:boolean;
    toggleSettings: () => void;
    toggleWorkrate: () => void;
    
}

export const usePopup = create<CountBears>(set => ({
    showSettings: false,
    showWorkrate:false,
    toggleSettings:():void => set(state =>({showSettings: !state.showSettings, showWorkrate:false})),
    toggleWorkrate:():void => set(state =>({showWorkrate: !state.showWorkrate, showSettings:false}))
}))
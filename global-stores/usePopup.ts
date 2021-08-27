import create from "zustand";

type CountBears  = {
    showSettings:boolean;
    toggleSettings: () => void;
}

export const usePopup = create<CountBears>(set => ({
    showSettings: false,
    toggleSettings:():void => set(state =>({showSettings: !state.showSettings}))
}))
import create from "zustand";

type PopupProps  = {
    showSettings:boolean;
    showWorkrate:boolean;
    showProfile:boolean;
    toggleSettings: () => void;
    toggleWorkrate: () => void;
    toggleProfile:() => void;
}

export const usePopup = create<PopupProps>(set => ({
    showSettings: false,
    showWorkrate:false,
    showProfile:false,
    toggleSettings:():void => set(state =>({showSettings: !state.showSettings, showProfile:false,showWorkrate:false})),
    toggleWorkrate:():void => set(state =>({showWorkrate: !state.showWorkrate,showProfile:false, showSettings:false})),
    toggleProfile:():void => set(state =>({showProfile:!state.showProfile,showWorkrate: false, showSettings:false})),

}))
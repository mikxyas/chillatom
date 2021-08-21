import create from "zustand";

type CountBears  = {
    bears:number;
    increasePop: () => void;
}

export const useTestStore = create<CountBears>(set => ({
    bears: 0,
    increasePop:():void => set(state =>({bears: state.bears + 1}))
}))
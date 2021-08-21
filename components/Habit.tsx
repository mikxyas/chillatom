import Image from "next/image";
import { useTestStore } from "../global-stores/useTestStore";
import { useEffect,useContext } from "react";

const Habit:React.FC = () => {
    const bears = useTestStore(state => state.bears)
    const addBears = useTestStore(state => state.increasePop)
    
    return(
        <div className='flex justify-center items-center flex-col h-full mt-1'>
            {bears} around here
            <div onClick={addBears} className='cursor-pointer habit-card transition ease-in duration-100 transform hover:-translate-y-1 font-bold text-4xl text-white mb-1 p-2 rounded-lg flex items-center justify-center'><Image width={50} height={50} src='/study.png'/><p className='w-full text-right'>Study</p></div>
            <div className='cursor-pointer habit-card transition ease-in duration-100 transform hover:-translate-y-1 font-bold text-4xl text-white mb-1 p-2 rounded-lg flex items-center justify-center'><Image width={50} height={50} src='/read.png'/><p className='w-full text-right'>Read</p></div>
            <div className='cursor-pointer habit-card transition ease-in duration-100 transform hover:-translate-y-1 font-bold text-4xl text-white mb-1 p-2 rounded-lg flex items-center justify-center'><Image width={50} height={50} src='/write.png'/><p className='w-full text-right'>Write</p></div>
            <div className='cursor-pointer habit-card transition ease-in duration-100 transform hover:-translate-y-1 font-bold text-4xl text-white mb-1 p-2 rounded-lg flex items-center justify-center'><Image width={50} height={50} src='/draw.png'/><p className='w-full text-right'>Draw</p></div>
        </div>
    )
}

export default Habit;
import Image from "next/image";
import { useTestStore } from "../global-stores/useTestStore";
import { useEffect,useContext } from "react";
import { useUserStore } from "../global-stores/useUserStore";
import { useFortnightStore } from "../global-stores/useFortnightStore";

const BoltIcon =  () =>(
    <svg
                    width="33"
                    height="33"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z" fill="currentColor" />
                    </svg>
)

const Habit:React.FC = () => {
    const focusingOn = useUserStore(state => state.user.focusingOn)
    const loading = useUserStore(state => state.loading)
    const updateFocusingOn = useUserStore(state => state.updateFocusingOn)
    const sumFort = useFortnightStore(state => state.sumFort)

    const sendData = (data) => {
        const object = {
            focusingOn:data
        }
        updateFocusingOn(object)
    }

    return(
        <div className='flex justify-center items-center w-full flex-col h-full'>
            <div onClick={() => sendData('studying')} className={focusingOn==='studying' ? 'cursor-pointer w-full transition ease-in duration-100 transform hover:-translate-y-1 font-bold text-3xl text-white mb-1  rounded-lg flex items-center justify-start pl-4' :'cursor-pointer w-full transition ease-in duration-100 transform hover:-translate-y-1 font-bold text-3xl text-white mb-1  rounded-lg flex items-center justify-start pl-12'}>
                {focusingOn=='studying' ?<BoltIcon/> :null}
                <div>
                    <p className='w-full '>Study</p>
                    <p className='text-sm mt-1 font-light'>Studied for {sumFort.studiedFor} minutes</p>
                </div> 
            </div>
            <div onClick={() => sendData('reading')} className={focusingOn==='reading' ? 'cursor-pointer w-full transition ease-in duration-100 transform hover:-translate-y-1 font-bold text-3xl text-white mb-1  rounded-lg flex items-center justify-start pl-4' :'cursor-pointer w-full transition ease-in duration-100 transform hover:-translate-y-1 font-bold text-3xl text-white mb-1  rounded-lg flex items-center justify-start pl-12'}>
                {focusingOn=='reading' ?<BoltIcon/> :null}
                <div>
                    <p className='w-full'>Read</p>
                    <p className='text-sm mt-1 font-light'>Read for {sumFort.readFor} minutes</p>
                </div>
            </div>
            <div onClick={() => sendData('writing')} className={focusingOn==='writing' ? 'cursor-pointer w-full transition ease-in duration-100 transform hover:-translate-y-1 font-bold text-3xl text-white mb-1  rounded-lg flex items-center justify-start pl-4' :'cursor-pointer w-full transition ease-in duration-100 transform hover:-translate-y-1 font-bold text-3xl text-white mb-1  rounded-lg flex items-center justify-start pl-12'}>
                {focusingOn=='writing' ?<BoltIcon/> :null}
                <div>
                    <p className='w-full'>Write</p>
                    <p className='text-sm mt-1 font-light'>Written for {sumFort.wroteFor} minutes</p>
                </div>
            </div>
            <div onClick={() => sendData('drawing')} className={focusingOn==='drawing' ? 'cursor-pointer w-full transition ease-in duration-100 transform hover:-translate-y-1 font-bold text-3xl text-white mb-1  rounded-lg flex items-center justify-start pl-4' :'cursor-pointer w-full transition ease-in duration-100 transform hover:-translate-y-1 font-bold text-3xl text-white mb-1  rounded-lg flex items-center justify-start pl-12'}>
                {focusingOn=='drawing' ?<BoltIcon/> :null}
                <div>
                    <p className='w-full'>Draw</p>
                    <p className='text-sm mt-1 font-light'>Drawn for {sumFort.drewFor} Minutes</p>
                </div>
            </div>
        </div>
    )
}

export default Habit;
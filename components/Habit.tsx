import Image from "next/image";
import { useTestStore } from "../global-stores/useTestStore";
import { useEffect,useContext } from "react";
import { useUserStore } from "../global-stores/useUserStore";
import { useFocusLogStore } from "../global-stores/useFocusLogStore";

export function minuteTohour(time) {
    if(time === undefined){
        // return minutes
        return '0 seconds'
    }
    if(time < 60){
        // return minutes
        return time +' minutes'
    }
    if(time >=60){
        // return hours
        return Math.round(time / 60) +' hours'
    }
    if(time >=1440){
        // return days
        return Math.round(time/1440) + ' days'
    }
   
    
}

const BoltIcon =  () =>(
    <svg
                    width="33"
                    height="33"
                    viewBox="0 0 24 24"
                    className='hidden md:block text-white'
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
    const focusLogSum = useFocusLogStore(state => state.focusLogSum)

    const sendData = (data) => {
        const object = {
            focusingOn:data
        }
        updateFocusingOn(object)
    }

    return(
        <div className='flex justify-center items-center w-full md:flex-col h-full'>
            <div onClick={() => sendData('studying')} className={focusingOn==='studying' ? 'cursor-pointer w-full transition ease-in duration-100 transform hover:-translate-y-1  font-bold text-2xl text-white  mb-1 rounded-lg flex items-center justify-start pl-4 md:no-underline underline' :'cursor-pointer w-full transition ease-in duration-100 transform hover:-translate-y-1  mb-1  rounded-lg flex  font-bold text-2xl items-center justify-start md:pl-12 pl-4 '}>
                {focusingOn=='studying' ?<BoltIcon/> :null}
                <div>
                    <p className='w-full font-bold  md:text-3xl text-white'>Study</p>
                    <p className='text-white text-sm mt-1 font-light md:block hidden'>Studied for {minuteTohour(focusLogSum.studiedFor)} </p>
                </div> 
            </div>
            <div onClick={() => sendData('reading')} className={focusingOn==='reading' ? 'cursor-pointer w-full transition ease-in duration-100 transform hover:-translate-y-1 mb-1  font-bold text-white text-2xl rounded-lg flex items-center justify-start pl-4 md:no-underline underline' :'cursor-pointer w-full transition ease-in duration-100 transform hover:-translate-y-1 mb-1  rounded-lg flex  font-bold text-2xl items-center justify-start pl-4 md:pl-12'}>
                {focusingOn=='reading' ?<BoltIcon/> :null}
                <div>
                    <p className='w-full font-bold  md:text-3xl text-white'>Read</p>
                    <p className='text-white text-sm mt-1 font-light md:block hidden'>Read for {minuteTohour(focusLogSum.readFor)}</p>
                </div>
            </div>
            <div onClick={() => sendData('writing')} className={focusingOn==='writing' ? 'cursor-pointer w-full transition ease-in duration-100 transform hover:-translate-y-1 font-bold text-white mb-1  rounded-lg flex items-center justify-start pl-4 md:no-underline underline' :'cursor-pointer w-full transition ease-in duration-100 transform hover:-translate-y-1 font-bold text-2xl text-white mb-1  rounded-lg flex items-center justify-start pl-4 md:pl-12'}>
                {focusingOn=='writing' ?<BoltIcon/> :null}
                <div>
                    <p className='w-full text-2xl md:text-3xl font-bold text-white'>Write</p>
                    <p className='text-sm mt-1 font-light md:block hidden'>Wrote for {minuteTohour(focusLogSum.wroteFor)}</p>
                </div>
            </div>
            <div onClick={() => sendData('drawing')} className={focusingOn==='drawing' ? 'cursor-pointer w-full transition ease-in duration-100 transform hover:-translate-y-1 font-bold  text-white mb-1  rounded-lg flex items-center justify-start pl-4 md:no-underline underline' :'cursor-pointer w-full transition ease-in duration-100 transform hover:-translate-y-1 font-bold  text-white mb-1  rounded-lg flex items-center justify-start pl-4 md:pl-12'}>
                {focusingOn=='drawing' ?<BoltIcon/> :null}
                <div>
                    <p className='w-full text-2xl md:text-3xl font-bold text-white'>Draw</p>
                    <p className='text-sm mt-1 font-light md:block hidden'>Drawn for {minuteTohour(focusLogSum.drewFor)}</p>
                </div>
            </div>
        </div>
    )
}

export default Habit;
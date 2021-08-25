import Image from "next/image";
import { useTestStore } from "../global-stores/useTestStore";
import { useEffect,useContext } from "react";
import { useUserStore } from "../global-stores/useUserStore";

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

    const sendData = (data) => {
        const object = {
            focusingOn:data
        }
        updateFocusingOn(object)
    }

    return(
        <div className='flex justify-center items-center flex-col h-full'>
            <div onClick={() => sendData('studying')} className='cursor-pointer transition ease-in duration-100 transform hover:-translate-y-1 font-bold text-3xl text-white mb-1  rounded-lg flex items-center justify-center'>
                {focusingOn=='studying' ?<BoltIcon/> :null}
                <div>
                    <p className='w-full'>Study</p>
                    <p className='text-sm mt-1 font-light'>You have studied for 12 hours</p>
                </div> 
            </div>
            <div onClick={() => sendData('reading')} className='cursor-pointer transition ease-in duration-100 transform hover:-translate-y-1 font-bold text-3xl text-white mb-1 rounded-lg flex items-center justify-center'>
                {focusingOn=='reading' ?<BoltIcon/> :null}
                <div>
                    <p className='w-full'>Read</p>
                    <p className='text-sm mt-1 font-light'>You have read for 12 hours</p>
                </div>
            </div>
            <div onClick={() => sendData('writing')} className='cursor-pointer transition ease-in duration-100 transform hover:-translate-y-1 font-bold text-3xl text-white mb-1  rounded-lg flex items-center justify-center'>
                {focusingOn=='writing' ?<BoltIcon/> :null}
                <div>
                    <p className='w-full'>Write</p>
                    <p className='text-sm mt-1 font-light'>You have written for 12 hours</p>
                </div>
            </div>
            <div onClick={() => sendData('drawing')} className='cursor-pointer transition ease-in duration-100 transform hover:-translate-y-1 font-bold text-3xl text-white mb-1  rounded-lg flex items-center justify-center'>
                {focusingOn=='drawing' ?<BoltIcon/> :null}
                <div>
                    <p className='w-full'>Draw</p>
                    <p className='text-sm mt-1 font-light'>You have drawn for 12 hours</p>
                </div>
            </div>
        </div>
    )
}

export default Habit;
import Button from "./Button";
import { useState } from "react";
import Dropdown from "./Dropdown";
import { useUserStore } from "../global-stores/useUserStore";
import { useEffect } from "react";
import { usePopup } from "../global-stores/usePopup";

const Settings:React.FC = () => {
    const [show,setShow] = useState(false);
    const user = useUserStore(state => state.user)
    const [focusFor, setFocusFor] = useState(user.focusFor)
    const [chillFor, setChillFor] = useState(user.chillFor)
    const updatePomoTime = useUserStore(state => state.updatePomoTime)

    const showSettings = usePopup(state => state.showSettings)
    const toggleSettings = usePopup(state => state.toggleSettings)

    const sendTime = () => {
        const object = {
            focusFor: focusFor,
            chillFor:chillFor
        }
        updatePomoTime(object)
    }
    useEffect(() => {
        setFocusFor(user.focusFor)
        setChillFor(user.chillFor)
        return () => {
          
        }
    }, [user])
    return(
        <>
        {showSettings
            ?    
            <div className='absolute z-50 h-auto mt-20 w-full flex items-center flex-col justify-center'>

                <div  className='p-8 items-center justify-center w-2/5 h-auto bg-white shadow-lg rounded-xl grid gap-5 grid-cols-2'>
                    <div className='col-span-2 flex justify-between'>
                        <p className='text-3xl font-semibold'>Settings</p>
                        <i onClick={toggleSettings} className="gg-close-o cursor-pointer"></i>
                    </div>

                    <div className='p-4 font-semibold shadow  bg-opacity-20   rounded-xl flex  flex-col'>
                        <p className='text-xl mb-2'>Update time</p>
                        <div className='flex justify-between mb-1'>
                            Focus Time <input type='number' onChange={(e) => setFocusFor(e.target.value)} value={focusFor} className='w-12 border-gray-800  border-2 border-opacity-10 text-center rounded'/>
                        </div>
                        <div className='flex justify-between'>
                            Chill Time <input type='number' onChange={(e) => setChillFor(e.target.value)} value={chillFor} className='w-12 border-gray-800 border-2 border-opacity-10 text-center rounded'/>
                        </div>
                        <button onClick={() => sendTime()} className='p-2 mt-2 rounded-md w-full bg-opacity-60 hover:bg-opacity-100 text-white font-semibold text-sm bg-black'>Update</button>
                    </div>

                    <div className='p-4  font-semibold shadow bg-opacity-20 rounded-xl flex flex-col'>
                        <p className='text-xl'>Change Background</p>
                        <input placeholder='Paste unsplash link here' className='bg-white border-2 mt-2 p-1 rounded border-black border-opacity-10'/>
                        
                        <button className='p-2 mt-2 rounded-md bg-opacity-60 hover:bg-opacity-100 text-white font-semibold text-sm bg-black'>Update</button>
                    </div>
                    <div className='p-4  font-semibold shadow bg-opacity-20 rounded-xl flex flex-col'>
                        <p className='text-xl'>Change Theme</p>
                        <div className='flex mt-2 justify-around'>
                            <span className='w-12 h-12 border-2 border-black border-opacity-50 rounded-3xl bg-white'></span>
                            <span className='w-12 h-12 border-2 border-black border-opacity-50 rounded-3xl bg-purple-700'></span>
                            <span className='w-12 h-12 border-2 border-black border-opacity-50 rounded-3xl bg-blue-600'></span>
                            <span className='w-12 h-12 border-2 border-black border-opacity-50 rounded-3xl bg-red-600'></span>
                        </div>
                    </div>
                </div>
            </div>
           
            : null
        }
        
        </>
    )
}

export default Settings;
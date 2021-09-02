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
    const updateBackground = useUserStore(state => state.updateBackground)
    const updatePomoTime = useUserStore(state => state.updatePomoTime)

    const showSettings = usePopup(state => state.showSettings)
    const toggleSettings = usePopup(state => state.toggleSettings)

    const updateTheme = useUserStore(state => state.updateTheme)

    const handleTheme = (theme) => {
        const data = {
            theme:theme
        };
        updateTheme(data)
    }

    const sendTime = () => {
        const object = {
            focusFor: focusFor,
            chillFor:chillFor
        }
        updatePomoTime(object)
    }
    const sendBackground = (keyword) => {
        const obj = {
            background: keyword
        };
        updateBackground(obj)
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
            <div className='absolute z-50 h-auto mt-20 w-full flex items-center flex-col justify-center md:pl-0 md:pr-0 pl-2 pr-2'>

                <div  className='pb-8 pl-8 pr-8 pt-8 items-center justify-center w-full md:w-2/5 h-auto bg-white shadow-lg rounded-xl grid gap-5 grid-cols-2'>
                    <div className='col-span-2 pb-3 flex justify-between'>
                        <p className='text-3xl font-semibold'>Settings</p>
                        <i onClick={toggleSettings} className="gg-close-o cursor-pointer"></i>
                    </div>

                    <div className='p-4 font-semibold shadow col-span-2 md:col-span-1   bg-opacity-20   rounded-xl flex  flex-col'>
                        <p className='text-xl mb-2'>Update time</p>
                        <div className='flex justify-between mb-1'>
                            Focus Time <input type='number' onChange={(e) => setFocusFor(e.target.value)} value={focusFor} className='w-12 border-gray-800  border-2 border-opacity-10 text-center rounded'/>
                        </div>
                        <div className='flex justify-between'>
                            Chill Time <input type='number' onChange={(e) => setChillFor(e.target.value)} value={chillFor} className='w-12 border-gray-800 border-2 border-opacity-10 text-center rounded'/>
                        </div>
                        <button onClick={() => sendTime()} className='p-2 mt-2 rounded-md w-full bg-opacity-60 hover:bg-opacity-100 text-white font-semibold text-sm bg-black'>Update</button>
                    </div>

                    <div className='p-4 col-span-2 md:col-span-1 font-semibold shadow bg-opacity-20 rounded-xl flex flex-col'>
                        <p className='text-xl'>Select keyword for background</p>
                        <div className='grid gap-2 grid-cols-3 items-center mt-3'>
                            <div onClick={() => sendBackground("nature")} className='p-1 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-xl flex items-center justify-center'>Nature</div>
                            <div onClick={() => sendBackground("sunset")} className='p-1 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-xl flex items-center justify-center'>Sunset</div>
                            <div onClick={() => sendBackground("forest")} className='p-1 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-xl flex items-center justify-center'>Forest</div>
                            <div onClick={() => sendBackground("mountain")} className='p-1 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-xl flex items-center justify-center'>Mountain</div>
                            <div onClick={() => sendBackground("valley")} className='p-1 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-xl flex items-center justify-center'>Valley</div>
                            <div onClick={() => sendBackground("snow")} className='p-1 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-xl flex items-center justify-center'>Snow</div>
                        </div>
                        <div className='flex text-xs mt-2 items-center justify-center text-center text-gray-500'>Your background will update daily based on the keyword you select</div>

                    </div>
                    <div className='p-4 col-span-2 md:col-span-1 font-semibold shadow bg-opacity-20 rounded-xl flex flex-col'>
                        <p className='text-xl'>Change Theme</p>
                        <div className='grid grid-cols-3 justify-center mt-2 gap-2'>
                            <div onClick={()=>handleTheme('bg-white')} className=' cursor-pointer flex justify-center items-center border-2 border-black border-opacity-20 rounded-xl bg-white p-1 font-bold'>White</div>
                            <div onClick={()=>handleTheme('bg-purple-800')} className='cursor-pointer flex justify-center items-center border-2 border-black border-opacity-20 rounded-xl bg-purple-500 p-1 font-bold text-white'>Purple</div>
                            <div onClick={()=>handleTheme('bg-blue-800')} className='cursor-pointer flex justify-center items-center  border-2 border-black border-opacity-20 rounded-xl bg-blue-500 p-1 font-bold text-white'>Blue</div>
                            <div onClick={()=>handleTheme('bg-red-800')} className='cursor-pointer flex justify-center items-center  border-2 border-black border-opacity-20 rounded-xl bg-red-500 p-1 font-bold text-white'>Red</div>
                            <div onClick={()=>handleTheme('bg-pink-800')} className='cursor-pointer flex justify-center items-center  border-2 border-black border-opacity-20 rounded-xl bg-pink-500 p-1 font-bold text-white'>Pink</div>
                            <div onClick={()=>handleTheme('bg-black')} className='cursor-pointer flex justify-center items-center border-2 border-black border-opacity-50 rounded-xl bg-black p-1 font-bold text-white'>Black</div>
                            <div onClick={()=>handleTheme('bg-transparent')} className='cursor-pointer flex justify-center items-center  border-2 border-black border-opacity-20 rounded-xl bg-transparent p-1 font-bold '>None</div>

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
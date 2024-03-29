import { useState } from "react";
import { useUserStore } from "../global-stores/useUserStore";
import { useEffect } from "react";

const Settings: React.FC = () => {
    const user = useUserStore(state => state.user)
    const [focusFor, setFocusFor] = useState<any>(user.focusFor)
    const [chillFor, setChillFor] = useState<any>(user.chillFor)
    const updatePomoTime = useUserStore(state => state.updatePomoTime)

    const sendTime = () => {
        const object = {
            focusFor: focusFor,
            chillFor: chillFor
        }
        updatePomoTime(object)
    }
    const handleChange = (e) => {
        if (e.target.value < 0) {
            return
        }
        if (e.target.name === 'focus') {
            setFocusFor(e.target.value)
        }
        if (e.target.name === 'chill') {
            setChillFor(e.target.value)
        }
    }
  
    useEffect(() => {
        setFocusFor(user.focusFor)
        setChillFor(user.chillFor)
        return () => {

        }
    }, [user])
    return (
        <>
           
                {/* <div className=' z-50 h-auto mt-20 w-full flex items-center flex-col justify-center lg:pl-0 lg:pr-0 pl-2 pr-2'> */}

                    {/* <div className='pb-8 pl-8 pr-8 pt-8 items-center justify-center w-full  h-auto bg-white shadow-lg rounded-xl grid gap-5 grid-cols-2'> */}

                        <div className='p-6 font-semibold shadow col-span-2 lg:col-span-1 w-72  bg-opacity-20   rounded-xl flex  flex-col'>
                            {/* <p className='text-xl mb-2'>Update time</p> */}
                            <div className='flex justify-between mb-1'>
                                Focus Time <input  name='focus' type='number' onChange={(e) => handleChange(e)} value={focusFor} className='w-16  bg-gray-200 bg-opacity-50 pl-2  p-1 text-left rounded' />
                            </div>
                            <div className='flex justify-between'>
                                Chill Time <input name='chill' type='number' onChange={(e) => handleChange(e)} value={chillFor} className='w-16 bg-gray-200 bg-opacity-50 pl-2 p-1 text-left rounded' />
                            </div>
                            <button onClick={() => sendTime()} className='p-2 mt-2 rounded-md w-full bg-opacity-60 hover:bg-opacity-100 text-white font-semibold text-sm bg-black'>Update</button>
                        {/* </div> */}
                        {/* 
                    <div className='p-4 col-span-2 lg:col-span-1 font-semibold shadow bg-opacity-20 rounded-xl flex flex-col'>
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

                    </div> */}
                        {/* <div className='p-4 col-span-2 lg:col-span-1 font-semibold shadow bg-opacity-20 rounded-xl flex flex-col'>
                            <p className='text-xl'>Change Theme</p>
                            <div className='grid grid-cols-2 justify-center mt-2 gap-2'>
                                <div onClick={() => handleTheme('bg-white')} className=' cursor-pointer flex justify-center items-center border-2 border-black border-opacity-20 rounded-xl bg-white p-1 font-bold aqua-effect relative'>White</div>
                                <div onClick={() => handleTheme('bg-purple-800')} className='cursor-pointer flex justify-center items-center border-2 border-black border-opacity-20 rounded-xl bg-purple-500 p-1 font-bold text-white aqua-effect relative'>Purple</div>
                                <div onClick={() => handleTheme('bg-blue-800')} className='cursor-pointer flex justify-center items-center  border-2 border-black border-opacity-20 rounded-xl bg-blue-500 p-1 font-bold text-white aqua-effect relative'>Blue</div>
                                <div onClick={() => handleTheme('bg-red-800')} className='cursor-pointer flex justify-center items-center  border-2 border-black border-opacity-20 rounded-xl bg-red-500 p-1 font-bold text-white aqua-effect relative'>Red</div>
                                <div onClick={() => handleTheme('bg-pink-800')} className='cursor-pointer flex justify-center items-center  border-2 border-black border-opacity-20 rounded-xl bg-pink-500 p-1 font-bold text-white aqua-effect relative'>Pink</div>
                                <div onClick={() => handleTheme('bg-black')} className='cursor-pointer flex justify-center items-center border-2 border-black border-opacity-50 rounded-xl bg-black p-1 font-bold text-white aqua-effect relative'>Black</div>
                                <div onClick={() => handleTheme('bg-transparent')} className='cursor-pointer flex justify-center items-center  border-2 border-black border-opacity-20 rounded-xl bg-transparent p-1 font-bold aqua-effect relative'>Transparent</div>

                            </div>
                        </div> */}
                    {/* </div> */}
                </div>

            

        </>
    )
}

export default Settings;
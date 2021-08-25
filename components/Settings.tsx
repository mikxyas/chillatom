import Button from "./Button";
import { useState } from "react";
import Dropdown from "./Dropdown";
import { useUserStore } from "../global-stores/useUserStore";
import { useEffect } from "react";

const Settings:React.FC = () => {
    const [show,setShow] = useState(false);
    const user = useUserStore(state => state.user)
    const [focusFor, setFocusFor] = useState(user.focusFor)
    const [chillFor, setChillFor] = useState(user.chillFor)
    const updatePomoTime = useUserStore(state => state.updatePomoTime)

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
            <Dropdown show={show} dropdownContent={
                                            <div  className='dropdown-item  w-60 p-2 justify-center flex-col'>
                                                <div className='p-4 font-semibold shadow bg-gray-200 bg-opacity-20 w-full rounded-xl flex  flex-col'>
                                                    <div className='flex justify-between mb-2'>Focus Time <input type='number' onChange={(e) => setFocusFor(e.target.value)} value={focusFor} className='w-12 border-gray-800  border-2 text-center rounded'/></div>
                                                    <div className='flex justify-between'>Chill Time <input type='number' onChange={(e) => setChillFor(e.target.value)} value={chillFor} className='w-12 border-gray-800 border-2 text-center rounded'/></div>
                                                    <button onClick={() => sendTime()} className='p-2 mt-2 rounded-md w-full bg-opacity-60 hover:bg-opacity-100 text-white font-semibold text-sm bg-black'>Update</button>
                                                </div>
                                                <div className='p-4  mt-4 font-semibold shadow bg-gray-200  bg-opacity-20 w-full rounded-xl flex  flex-col'>
                                                    <p className='text-xl'>Change Background</p>
                                                    <button className='p-2 mt-2 rounded-md w-full bg-opacity-60 hover:bg-opacity-100 text-white font-semibold text-sm bg-black'>Choose file</button>

                                                </div>
                                            </div>} main={<div onClick={() => setShow(!show)}><Button name='Settings'/></div>}/>
        </>
    )
}

export default Settings;
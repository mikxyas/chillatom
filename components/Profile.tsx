import Image from "next/image";
import { useState } from "react";
import Button from "./Button";
import Dropdown from "./Dropdown";
import { useUserStore } from "../global-stores/useUserStore";
import { usePopup } from "../global-stores/usePopup";
import {signOut} from 'next-auth/client'
import { minuteTohour } from "./Habit"
import { useFocusLogStore } from "../global-stores/useFocusLogStore";
import Workrate from "./Workrate";

const Profile:React.FC = (props) => {
    const user = useUserStore(state => state.user)
    const focusLogSum = useFocusLogStore(state => state.focusLogSum)
    const showpopup = usePopup(state => state.showProfile)
    const toggleProfile = usePopup(state => state.toggleProfile) 
    return(
        <>
        {showpopup 
        ?// Container

            <div  className='flex  flex-col items-center justify-center h-full w-full p-2 rounded-2xl absolute z-20 '> 
                    <div onClick={() => toggleProfile()} className='bg-gray-600 bg-opacity-50 absolute w-full h-full z-20'> </div>
                    <div className='h-auto bg-white z-30 p-12 w-auto rounded-2xl'>
                        <div className='flex'>
                            <div className='rounded-5xl mr-4'>
                                <Image className=' rounded-full' width={100} height={100} src={user.image}/>
                            </div>
                            <div>
                                <p className='font-semibold text-2xl mb-4'>Mikiyas Ayele</p>
                                <div style={{width:'35em'}} className='flex overflow-x-scroll w-3/2 flex-nowrap'>
                                    <div className='bg-gray-100 p-4 rounded-lg w-full'><h1 className='text-xl font-semibold'>{minuteTohour(focusLogSum.totFocusedMin)}</h1> <p>Focused</p></div>
                                    <div className='bg-gray-100 p-4 rounded-lg ml-2'><h1 className='text-xl font-semibold'>{minuteTohour(focusLogSum.studiedFor)}</h1> <p>Studied</p></div>
                                    <div className='bg-gray-100 p-4 rounded-lg ml-2'><h1 className='text-xl font-semibold'>{minuteTohour(focusLogSum.readFor)}</h1> <p>Read</p></div>
                                    <div className='bg-gray-100 p-4 rounded-lg ml-2'><h1 className='text-xl font-semibold'>{minuteTohour(focusLogSum.wroteFor)}</h1> <p>Wrote</p></div>
                                    <div className='bg-gray-100 p-4 rounded-lg ml-2'><h1 className='text-xl font-semibold'>{minuteTohour(focusLogSum.drewFor)}</h1> <p>Drawn</p></div>

                                </div>
                            </div>
                        </div>
                        <div>
                            <Workrate/>
                        </div>
                        <div>
                            focus time
                        </div>
                    </div>
                </div>
                
        :null
        }
        </>
        
    )
}

export default Profile;
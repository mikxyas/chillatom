import { useState } from "react";

import { useUserStore } from "../global-stores/useUserStore";
import { usePopup } from "../global-stores/usePopup";

import { useFocusLogStore } from "../global-stores/useFocusLogStore";
import Workrate from "./Workrate";
import StatsPieChart from "./StatsPieChart";
import Settings from "./Settings";
import ProgressCalandar from "./ProgressCalandar";
import UserCard from "./UserCard";

const Profile: React.FC = (props) => {
    const user = useUserStore(state => state.user)
    const focusLogSum = useFocusLogStore(state => state.focusLogSum)
    const showpopup = usePopup(state => state.showProfile)
    const toggleProfile = usePopup(state => state.toggleProfile)

    return (
        <>
            {showpopup
                ?// Container

                <div style={{height:'100%', width:'100%'}} className='flex  flex-col items-center justify-center  lg:p-2 lg:rounded-2xl absolute z-20 '>
                    <div onClick={() => toggleProfile()} className='bg-gray-600 bg-opacity-50 absolute w-full h-full z-20'> </div>
                    <div style={{overflowX:'auto', whiteSpace:"nowrap", display:'inline'}} className='  bg-white z-30 p-12 lg:w-auto w-full lg:rounded-2xl'>
                        <div onClick={() => toggleProfile()} className="flex justify-end">
                            <div style={{marginTop:"-1.5em", marginRight:'-1.8em'}} className="absolute cursor-pointer shadow rounded-2xl bg-gray-100 pl-4 pr-4 pt-2 pb-2 font-bold text-gray-500">X</div>
                        </div>
                        <div className='lg:flex items-center justify-center'>
                            <div style={{ marginTop: '-1em', marginLeft: '-1em' }} className='flex justify-between items-center'>
                                <StatsPieChart
                                    data={[
                                        { title: 'Studied', value: Number(focusLogSum.studiedFor), color: '#003f5c' },
                                        { title: 'Read', value: Number(focusLogSum.readFor), color: '#58508d' },
                                        { title: 'Wrote', value: Number(focusLogSum.wroteFor), color: '#bc5090' },
                                        { title: 'Draw', value: Number(focusLogSum.drewFor), color: '#ff6361' },
                                    ]}
                                />
                            </div>
                        
                        <div  className="lg:w-96">
                            <ProgressCalandar />
                        </div>
                        </div>
                        <div style={{width:'100%'}} className="lg:flex mt-2 justify-center ">
                        <Settings/>
                        <UserCard/>
                    </div>
                    </div>
                    
                </div>

                : null
            }
        </>

    )
}

export default Profile;
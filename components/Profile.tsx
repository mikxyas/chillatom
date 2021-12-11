import { useState } from "react";

import { useUserStore } from "../global-stores/useUserStore";
import { usePopup } from "../global-stores/usePopup";

import { useFocusLogStore } from "../global-stores/useFocusLogStore";
import Workrate from "./Workrate";
import StatsPieChart from "./StatsPieChart";
import Settings from "./Settings";

const Profile: React.FC = (props) => {
    const user = useUserStore(state => state.user)
    const focusLogSum = useFocusLogStore(state => state.focusLogSum)
    const showpopup = usePopup(state => state.showProfile)
    const toggleProfile = usePopup(state => state.toggleProfile)

    return (
        <>
            {showpopup
                ?// Container

                <div className='flex  flex-col items-center justify-center h-full w-full p-2 rounded-2xl absolute z-20 '>
                    <div onClick={() => toggleProfile()} className='bg-gray-600 bg-opacity-50 absolute w-full h-full z-20'> </div>
                    <div className='h-auto  bg-white z-30 p-12  rounded-2xl'>
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
                        
                        <div style={{width:'40em'}}>
                            <Workrate />
                        </div>
                        </div>
                        <div>
                        <Settings/>
                    </div>
                    </div>
                    
                </div>

                : null
            }
        </>

    )
}

export default Profile;
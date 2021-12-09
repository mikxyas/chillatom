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
import { PieChart } from 'react-minimal-pie-chart';
import StatsPieChart from "./StatsPieChart";

const Profile:React.FC = (props) => {
    const user = useUserStore(state => state.user)
    const focusLogSum = useFocusLogStore(state => state.focusLogSum)
    const showpopup = usePopup(state => state.showProfile)
    const toggleProfile = usePopup(state => state.toggleProfile) 
    const shiftSize = 7
    const [hovered, setHovered] = useState<number | undefined>(undefined);

  
    return(
        <>
        {showpopup 
        ?// Container

            <div  className='flex  flex-col items-center justify-center h-full w-full p-2 rounded-2xl absolute z-20 '> 
                    <div onClick={() => toggleProfile()} className='bg-gray-600 bg-opacity-50 absolute w-full h-full z-20'> </div>
                    <div className='h-auto bg-white z-30 p-12 lg:flex items-center  rounded-2xl'>
                        <div className='flex '>
                        
                            <div>
                                <div style={{marginTop:'-1em', marginLeft:'-1em'}} className='flex justify-between items-center'>
                                    <StatsPieChart   
                                        data={[
                                            { title: 'Studied', value: Number(focusLogSum.studiedFor), color: '#003f5c' },
                                            { title: 'Read', value: Number(focusLogSum.readFor), color: '#58508d' },
                                            { title: 'Wrote', value: Number(focusLogSum.wroteFor), color: '#bc5090' },
                                            { title: 'Draw', value: Number(focusLogSum.drewFor), color: '#ff6361' },
                                        ]}
                                       
                                        // rounded  
                                       
                                    />
                                    {/* <div className='flex  flex-col'>
                                        <div className='flex  items-center'>
                                            <div style={{background:'#003f5c', height:'20px', width:'20px'}}></div>
                                            <p className='font-semibold ml-2'>Time Studied</p>
                                        </div>
                                        <div className='flex  items-center'>
                                            <div style={{background:'#58508d', height:'20px', width:'20px'}}></div>
                                            <p className='font-semibold ml-2'>Time Read</p>
                                        </div>
                                        <div className='flex  items-center'>
                                            <div style={{background:'#bc5090', height:'20px', width:'20px'}}></div>
                                            <p className='font-semibold ml-2'>Time Wrote</p>
                                        </div>
                                        <div className='flex  items-center'>
                                            <div style={{background:'#ff6361', height:'20px', width:'20px'}}></div>
                                            <p className='font-semibold ml-2'>Time Drawn</p>
                                        </div>
                                    </div> */}
                                    
                                    
                                </div>
                              
                            </div>
                        </div>
                        <div className='w-auto' style={{width:'40vw'}}>
                            <Workrate/>
                        </div>
                    </div>
                </div>
                
        :null
        }
        </>
        
    )
}

export default Profile;
import React,{useEffect} from 'react'
import Button from './Button'
import {signIn, signOut, useSession} from 'next-auth/client'
import Image from 'next/image'
import Settings from './Settings'
import Profile from './Profile'
import { useUserStore } from '../global-stores/useUserStore'
import { useCollectionStore } from '../global-stores/useCollectionStore'
import { useFocusLogStore } from '../global-stores/useFocusLogStore'
import { usePopup } from '../global-stores/usePopup'
import Workrate from './Workrate'
import Link from 'next/link'
import { minuteTohour } from "./Habit"


const Header:React.FC = () => {
    const fetchuser = useUserStore(state => state.fetch)
    const fetchCollection = useCollectionStore(state => state.fetchCollection)
    const [session, loading] = useSession();
    const toggleSettings = usePopup(state => state.toggleSettings)
    const fetchFocusLog = useFocusLogStore(state => state.fetchFocusLog)
    const getLatestFocusLog = useFocusLogStore(state => state.getLatestFocusLog)
    const getSumFocusLog = useFocusLogStore(state => state.getSumFocusLog)
    const focusLogSum = useFocusLogStore(state => state.focusLogSum)
    const user = useUserStore(state=> state.user)

    const toggleWorkrate = usePopup(state => state.toggleWorkrate)
    const toggleProfile = usePopup(state => state.toggleProfile)

    useEffect(() => {
        async function intitialFetch()  {
            console.log('fetching user')
            await fetchuser()
            console.log('fetching collection')
            await fetchCollection()
            console.log('fetching focus log')
            await fetchFocusLog()
            console.log('fetching latest focus log')
            await getLatestFocusLog()
            console.log('fetching focus sum')
            await getSumFocusLog()
        }
        intitialFetch()
    },[])
    return(
        <>
        <Profile/>
        <div className='flex items-center justify-center w-full mt-2'>
            <div style={{width:'50em',height:'65px' }} className='flex rounded-2xl h-18 aqua-effect relative bg-clip-padding backdrop-filter backdrop-blur-lg shadow-sm backdrop-saturate-150 items-center  justify-between'>
                <div  className='flex p-1 cursor-pointer ml-2 items-center justify-center rounded-2xl pl-2 pr-2 '>
                    <Image width={40} height={30} src='/chillatomlogo.png'/>
                    {/* <p className=' md:visible  text-xl text-white font-bold mr-2'>Chillatom</p> */}
                </div>
                {loading
                    ?<Button name='loading'/>
                    :<>
                {session    
                    ?<>
                    <div onClick={() => toggleProfile()} className='p-1 cursor-pointer rounded-2xl '>

                            <div className='flex pl-3 pr-3 pt-1 pb-1  justify-around'>
                            <div>
                                <p  className=' text-xl p-0 text-white font-bold'>{session.user.name}</p>
                                <p style={{marginTop:'-.15em'}} className='text-sm  font-mono mb-1 p-0 text-white'>Focused {minuteTohour(focusLogSum.totFocusedMin)}</p>
                            </div>
                            <div className='flex items-center ml-2'>
                                <Image width={38} className='round-img' height={38} src={session.user.image}/>
                            </div>
                        </div>
                        </div>
                        </>
                        :<div className='mr-4'>
                        <Link href="/login"><div><Button name='Sign In'/></div></Link>

                        </div>

                }
                    </>
                }
            </div>
        </div>
        </>
    )
}

export default Header

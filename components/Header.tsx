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


const Header:React.FC = () => {
    const fetchuser = useUserStore(state => state.fetch)
    const fetchCollection = useCollectionStore(state => state.fetchCollection)
    const [session, loading] = useSession();
    const toggleSettings = usePopup(state => state.toggleSettings)
    const fetchFocusLog = useFocusLogStore(state => state.fetchFocusLog)
    const getLatestFocusLog = useFocusLogStore(state => state.getLatestFocusLog)
    const getSumFocusLog = useFocusLogStore(state => state.getSumFocusLog)

    const user = useUserStore(state=> state.user)

    const toggleWorkrate = usePopup(state => state.toggleWorkrate)

    useEffect(() => {
        async function intitialFetch()  {
            await fetchuser()
            await fetchCollection()
            await fetchFocusLog()
            await getLatestFocusLog()
            await getSumFocusLog()
            console.log('fetching everything')
        }
        intitialFetch()
    },[])
    return(
        <>
        <Settings/>
        <Workrate/>
        <nav className='flex justify-center mt-4 md:p-0 p-2'>
            <div className={` ${user.theme} z-10 bg-opacity-20 bg-clip-padding backdrop-filter backdrop-blur-md shadow-lg backdrop-saturate-150  border-none flex justify-end items-center w-full md:w-2/5  h-14 p-2 rounded aqua-effect`}>
            {loading
                ?<Button name='Loading...'/>
                :<>
                    {!session && <>
                        <div onClick={() => signIn()}><Button name='Sign In'/></div>
                        </>}
                        {session && <>
                        <div className='flex md:justify-end w-full justify-start'>
                            {/* <div  className='ml-2' onClick={() => signOut()}><Button name='Sign Out'/></div> */}
                            <div onClick={toggleWorkrate} className='ml-2'>
                                <Button name='Work rate'/>
                            </div>
                            <div onClick={toggleSettings} className='ml-2'>
                                <Button name='Settings'/>
                            </div>
                        </div>
                      
                        <Profile image={session.user.image}/>
                        
                        </>}
                    </>
            }
            </div>
        </nav>
        </>
    )
}

export default Header
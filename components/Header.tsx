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
        <Settings/>
        <Workrate/>
        <div className='flex items-center justify-center w-full'>
        <div style={{width:'50em', }} >
        <nav  className='flex justify-center mt-4 lg:p-0 p-2'>
            <div className={` ${user.theme} z-10 bg-opacity-20 bg-clip-padding backdrop-filter backdrop-blur-md shadow-lg backdrop-saturate-150  border-none flex justify-end items-center w-full   h-14 p-2 rounded aqua-effect`}>
            {loading
                ?<Button name='Loading...'/>
                :<>
                    {!session && <>
                        
                        <Link href="/login"><div><Button name='Sign In'/></div></Link>
                        </>}
                        {session && <>
                        <div className='flex lg:justify-end w-full justify-start'>
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
        </div>
        </div>
        </>
    )
}

export default Header
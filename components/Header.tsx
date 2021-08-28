import React,{useEffect} from 'react'
import Button from './Button'
import {signIn, signOut, useSession} from 'next-auth/client'
import Image from 'next/image'
import Settings from './Settings'
import Profile from './Profile'
import { useUserStore } from '../global-stores/useUserStore'
import { useCollectionStore } from '../global-stores/useCollectionStore'
import { usePopup } from '../global-stores/usePopup'

const Header:React.FC = () => {
    const fetchuser = useUserStore(state => state.fetch)
    const fetchCollection = useCollectionStore(state => state.fetchCollection)
    const [session, loading] = useSession();
    const toggleSettings = usePopup(state => state.toggleSettings)

    const user = useUserStore(state=> state.user)

    useEffect(() => {
        fetchuser()
        fetchCollection()
        console.log('fetching everything')
    },[])
    return(
        <>
        <Settings/>
        <nav className='flex justify-center mt-4'>
            <div className={` ${user.theme} z-10 bg-opacity-20 bg-clip-padding backdrop-filter backdrop-blur-md shadow-lg backdrop-saturate-150  border-none flex justify-end items-center w-2/5 h-14 p-2 rounded aqua-effect`}>
            {loading
                ?<Button name='Loading...'/>
                :<>
                    {!session && <>
                        <div onClick={() => signIn()}><Button name='Sign In'/></div>
                        </>}
                        {session && <>
                        <div  className='ml-2' onClick={() => signOut()}><Button name='Sign Out'/></div>
                        <div className='ml-2'>
                            <Button name='Work rate'/>
                        </div>
                        <div onClick={toggleSettings} className='ml-2'>
                        <Button name='Settings'/>
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
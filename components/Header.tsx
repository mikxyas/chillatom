import React from 'react'
import Button from './Button'
import {signIn, signOut, useSession} from 'next-auth/client'
import Image from 'next/image'
import Settings from './Settings'
import Profile from './Profile'

const Header:React.FC = () => {
    const [session, loading] = useSession();
    return(
        <nav className='flex justify-center mt-4'>
            <div className='bg-white bg-opacity-10 bg-clip-padding backdrop-filter backdrop-blur-md shadow-lg backdrop-saturate-150  border-none flex justify-end items-center w-2/5 h-14 p-2 rounded aqua-effect'>
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
                        <div className='ml-2'>
                            <Settings/>
                        </div>
                        <Profile image={session.user.image}/>
                        
                        </>}
                    </>
            }
            
            </div>
        </nav>
        
    )
}

export default Header
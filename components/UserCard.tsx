import React from 'react'
import { useUserStore } from '../global-stores/useUserStore'
import Image from 'next/image'
import Button from './Button'
import { signout } from 'next-auth/client'
export default function UserCard() {
    const user = useUserStore(state => state.user)
    return (
        <div className='p-6 font-semibold shadow lg:ml-5 lg:mt-0 mt-3 w-72 h-full  bg-opacity-20   rounded-xl'>
            <div className='flex justify-around mt-1'>
                    <Image height={45} width={55} src="https://lh3.googleusercontent.com/a-/AOh14Ghb6UwlXE-GU7r5Lpb1jjBS2GNOIxfRz3L9OmVM3w=s96-c"/>
                
                <h3 className=' text-2xl'>{user.name}</h3>
            </div>
            <button onClick={() => signout()} className='p-2 mt-3 rounded-md w-60 bg-opacity-60 hover:bg-opacity-100 text-white font-semibold text-sm bg-black'>SignOut</button>
            
        </div>
    )
}

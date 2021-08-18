import React from 'react'
import Button from './Button'

const Header:React.FC = () => {
    return(
        <div className='flex justify-center mt-4'>
            <div className='bg-clip-padding backdrop-filter backdrop-blur-md shadow-lg backdrop-saturate-150  border-none flex justify-end items-center w-1/2 h-14 p-2 rounded aqua-effect'>
                <Button name='Login'/>
            </div>
        </div>
        
    )
}

export default Header
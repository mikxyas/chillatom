import React from 'react';

const Button: React.FC<{name: string}> = (props) => {
    return(
        <>
        <button className='w-max rounded-md bg-white hover:bg-opacity-100  bg-opacity-80 font-bold text-gray-700 pl-5 pr-5 pt-2 pb-2'>
            {props.name}
        </button>

   
  </>
    )
}
export default Button;
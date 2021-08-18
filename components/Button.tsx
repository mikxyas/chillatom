import React from 'react';

const Button: React.FC<{name: string}> = (props) => {
    return(
        <>
        <button className='w-max rounded-md bg-white  bg-opacity-20 shadow-sm font-bold text-white pl-5 pr-5 pt-2 pb-2'>
            {props.name}
        </button>

   
  </>
    )
}
export default Button;
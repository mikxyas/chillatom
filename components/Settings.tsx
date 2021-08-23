import Button from "./Button";
import { useState } from "react";
import Dropdown from "./Dropdown";

const Settings:React.FC = () => {
    const [show,setShow] = useState(false);
    return(
        <>
            <Dropdown show={show} dropdownContent={
                                            <div onMouseLeave={() =>setShow(false)} className='dropdown-item  w-60 p-2 justify-center flex-col'>
                                                <div className='p-4 font-semibold shadow bg-gray-200 bg-opacity-20 w-full rounded-xl flex  flex-col'>
                                                    <div className='flex justify-between mb-2'>Focus Time <input value='25' className='w-10 border-gray-800  border-2 text-center rounded'/></div>
                                                    <div className='flex justify-between'>Chill Time <input value='5' className='w-10 border-gray-800 border-2 text-center rounded'/></div>
                                                    <button className='p-2 mt-2 rounded-md w-full bg-opacity-60 hover:bg-opacity-100 text-white font-semibold text-sm bg-black'>Update</button>
                                                </div>
                                                <div className='p-4  mt-4 font-semibold shadow bg-gray-200  bg-opacity-20 w-full rounded-xl flex  flex-col'>
                                                    <p className='text-xl'>Change Background</p>
                                                    <button className='p-2 mt-2 rounded-md w-full bg-opacity-60 hover:bg-opacity-100 text-white font-semibold text-sm bg-black'>Choose file</button>

                                                </div>
                                            </div>} main={<div onClick={() => setShow(!show)}><Button name='Settings'/></div>}/>
        </>
    )
}

export default Settings;
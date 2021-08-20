import Image from "next/image";
import { useState } from "react";
import Button from "./Button";
import Dropdown from "./Dropdown";

const Profile:React.FC<{image:any}> = (props) => {
    const [show, setShow] = useState(false)
    return(
        <>
            <Dropdown show={show} dropdownContent={<div className='dropdown-item w-40 p-2'><button className='p-2 rounded-md w-full bg-opacity-60 text-white font-bold bg-black'>Logout</button></div>} main={<div className='profile-pic mr-1 ml-2 opacity-90' onClick={() => setShow(!show)}><Image className='profile-pic' width={55} height={40} src={props.image}/></div>}/>
        </>
    )
}

export default Profile;
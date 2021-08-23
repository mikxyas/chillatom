import Image from "next/image";
import { useState } from "react";
import Button from "./Button";
import Dropdown from "./Dropdown";
import { useUserStore } from "../global-stores/useUserStore";

const Profile:React.FC<{image:any}> = (props) => {
    const [show, setShow] = useState(false)
    const user = useUserStore(state => state.user)
    return(
        <>
            <Dropdown show={show} dropdownContent={

                                                <div onMouseLeave={() =>setShow(false)} className='dropdown-item w-40 p-4 flex-col'>
                                                    <p className='mb-2 font-semibold text-xl'>{user.name}</p>
                                                    <button className='p-2 rounded-md w-full text-white text-sm font-semibold bg-black'>Sign out</button>
                                                </div>} main={<div className='profile-pic mr-1 ml-2 opacity-90' onClick={() => setShow(!show)}><Image className='profile-pic' width={55} height={40} src={props.image}/></div>}/>
        </>
    )
}

export default Profile;
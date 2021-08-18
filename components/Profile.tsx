import Image from "next/image";
import { useState } from "react";

const Profile:React.FC<{image:any}> = (props) => {
    const [show, setShow] = useState(false)
    return(
        <>
            <div className="dropdown-cont">
                

                <div className='profile-pic mr-1 ml-2 opacity-90' onClick={() => setShow(!show)}><Image className='profile-pic' width={55} height={40} src={props.image}/></div>
                <div className={show ?'show-dropdown dropdown':'dropdown' }>
                <div className='dropdown-item'>
                    <h1>hi</h1>
                </div>
                </div>
            </div>
        </>
    )
}

export default Profile;
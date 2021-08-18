import Button from "./Button";
import { useState } from "react";

const Settings:React.FC = () => {
    const [show,setShow] = useState(false);
    return(
        <>
            <div className="dropdown-cont">
                <div onClick={() => setShow(!show)}><Button name='Settings'/></div>
                <div className={show ?'show-dropdown dropdown':'dropdown' }>
                <div className='dropdown-item'>
                    <h1>hi</h1>
                </div>
                </div>
            </div>
        </>
    )
}

export default Settings;
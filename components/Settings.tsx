import Button from "./Button";
import { useState } from "react";
import Dropdown from "./Dropdown";

const Settings:React.FC = () => {
    const [show,setShow] = useState(false);
    return(
        <>
            <Dropdown show={show} dropdownContent={<div className='dropdown-item  w-72 p-2'><h1>hi</h1></div>} main={<div onClick={() => setShow(!show)}><Button name='Settings'/></div>}/>
        </>
    )
}

export default Settings;
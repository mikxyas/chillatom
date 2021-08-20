
const Dropdown:React.FC<{main:any, show:boolean, dropdownContent:any}> = (props) => {
    return(
        <div>
            <div className="dropdown-cont ">
                {props.main}
                {/* <div className='profile-pic mr-1 ml-2 opacity-90' onClick={() => setShow(!show)}>
                    <Image className='profile-pic' width={55} height={40} src={props.image}/>
                </div> */}
                <div className={props.show ?'show-dropdown dropdown':'dropdown' }>
                <div className='dropdown-item'>
                    {props.dropdownContent}
                </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown;
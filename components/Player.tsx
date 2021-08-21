import { useState } from "react";
import Button from "./Button"
import { useTestStore } from "../global-stores/useTestStore";
const Player: React.FC = () => {
    const [showForm, setShowForm] = useState(false);
    const addBears = useTestStore(state => state.increasePop)

    return(
        <div className='flex'>
                    <div onClick={addBears}><Button name='click me'/></div>

            {!showForm
                ?<div className='yt-player'>
                    <iframe  src="https://www.youtube.com/embed/videoseries?list=PLhlhVLoA0A46r0N8ZMsULWHuIahhjpBny" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
                :<div className='playlist-form'>
                    <div className='cont flex items-center flex-col  rounded-lg justify-center'>
                        <p className='text-2xl font-bold mb-3 text-white'>Add a playlist</p>
                        <input className='p-2 rounded-md w-2/3' placeholder='Playlist Name'/>
                        <input className='p-2 mt-2 rounded-md w-2/3' placeholder='Playlist Url'/>
                        <div className='flex justify-between items-center w-2/3 mt-2 mb-2'>
                            <p className='flex justify-center items-center text-xl mt-2 text-white font-semibold'>Playlist <i className='gg-check ml-1 bg-blue-300'/></p> 
                            <p className='flex justify-center items-center  text-xl  text-white font-semibold'>Livestream <i className='gg-check ml-1 bg-white'/></p> 
                            <p className='flex justify-center items-center  text-xl  text-white font-semibold'>Video <i className='gg-check ml-1 bg-white'/></p> 
                        </div>
                        <Button name={'Create'}/>
                    </div>
                </div>
            }
            
            <div className='w-full h-full '>
                <div className='flex flex-col items-start ml-4 h-auto w-full p-2 rounded-3xl'>
                    <div className='cursor-pointer flex p-0 mt-2  items-center text-2xl justify-center font-black text-white '>
                        <i className='mr-3 gg-music'/><p>Chill beats</p>
                    </div>
                    <div className='cursor-pointer flex p-0 mt-2  items-center text-2xl justify-center font-black text-white text-opacity-70 hover:text-opacity-100'>
                        <p>Mozart</p>
                    </div>
                    <div className='cursor-pointer flex p-0 mt-2  items-center text-2xl justify-center font-black text-white text-opacity-70 hover:text-opacity-100'>
                        <p>Lofi Girl stream</p>
                    </div>
                    <div className='cursor-pointer flex p-0 mt-2  items-center text-2xl justify-center font-black text-white text-opacity-70 hover:text-opacity-100'>
                        <p>relaxing rain</p>
                    </div>
                </div>
                <div className='ml-6 mt-2' onClick={() => setShowForm(!showForm)}>
                    <Button name={showForm?"Go Back" :"Add"}/>
                </div>
            </div>
        </div>
    )
}

export default Player;
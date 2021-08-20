
const Player: React.FC = () => {
    return(
        <div className='flex'>
            <div className='yt-player'>
                <iframe  src="https://www.youtube.com/embed/videoseries?list=PLhlhVLoA0A46r0N8ZMsULWHuIahhjpBny" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
            <div className='flex flex-col items-start ml-4 h-auto w-full p-2 rounded-3xl'>
                <div className='cursor-pointer flex p-0 mt-2  items-center text-3xl justify-center font-black text-white '>
                    <p>Chill beats</p>
                </div>
                <div className='cursor-pointer flex p-0 mt-2  items-center text-3xl justify-center font-black text-white text-opacity-70 hover:text-opacity-100'>
                    <p>Mozart</p>
                </div>
                <div className='cursor-pointer flex p-0 mt-2  items-center text-3xl justify-center font-black text-white text-opacity-70 hover:text-opacity-100'>
                    <p>Lofi Girl stream</p>
                </div>
                <div className='cursor-pointer flex p-0 mt-2  items-center text-3xl justify-center font-black text-white text-opacity-70 hover:text-opacity-100'>
                    <p>relaxing rain</p>
                </div>
            </div>
        </div>
    )
}

export default Player;
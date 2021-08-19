
const Player: React.FC = () => {
    return(
        <div className='flex'>
            <div className='yt-player'>
                <iframe  src="https://www.youtube.com/embed/videoseries?list=PLhlhVLoA0A46r0N8ZMsULWHuIahhjpBny" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
            <div className='bg-white bg-opacity-10 ml-4 h-auto w-full p-2'>
                <div className='flex p-0 mt-2  items-center text-xl justify-center font-bold text-white'>
                    <p>Chill beats</p>
                </div>
                <div className='flex p-0 text-xl items-center justify-center font-bold text-white'>
                    <p>Mozart</p>
                </div>
            </div>
        </div>
    )
}

export default Player;
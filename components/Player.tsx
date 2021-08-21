import { useEffect, useState } from "react";
import Button from "./Button"
import { useTestStore } from "../global-stores/useTestStore";
import { useUserStore } from "../global-stores/useUserStore";
import { useCollectionStore } from "../global-stores/useCollectionStore";
import { usePlaylistId,useVideoID } from "../hooks/usePlaylistId";
const Player: React.FC = () => {
    const [showForm, setShowForm] = useState(false);
    const collection = useCollectionStore(state => state.collection)
    const fetchCollection = useCollectionStore(state => state.fetchCollection)
    const createColl = useCollectionStore(state => state.AddCollection)
    const listeningTo = useUserStore(state => state.user.listeningTo)
    const updateListeningTo = useUserStore(state => state.updateListeningTo)
    const [title, setTitle] = useState('')
    const [url, setUrl] = useState('')
    const [isLivestream, setIsLivestream] = useState(false)
    const [isPlaylist, setIsPlaylist] = useState(true)
    const [isVideo, setIsVideo] = useState(false)

    const [liveCollectoin, setLiveCollection] = useState({})

    const [video_id, vidValid] = useVideoID(url)
    const [playlist_id, pidValid] = usePlaylistId(url)

    const playlistSelected = () => {
        setIsLivestream(false)
        setIsVideo(false)
        setIsPlaylist(true)
    }
    const videoSelected = () => {
        setIsLivestream(false)
        setIsVideo(true)
        setIsPlaylist(false)
    }
    const livestreamSelected = () => {
        setIsLivestream(true)
        setIsVideo(false)
        setIsPlaylist(false)
    }

    const CreateCollection = async() => {
        let url_id

        if(isPlaylist){
            url_id = playlist_id
            const body = {
                title:title,
                video_id:url_id,
                isLivestream:isLivestream,
                isVideo:isVideo,
                isPlaylist:isPlaylist,
            }
            await createColl(body)
            await updateListeningTo(url_id)
            setTitle('')
            setUrl('')
            setShowForm(false)
            fetchCollection()
        }else{
            url_id = video_id
            const body = {
                title:title,
                video_id:url_id,
                isLivestream:isLivestream,
                isVideo:isVideo,
                isPlaylist:isPlaylist,
            }
            await createColl(body)
            await updateListeningTo(url_id)
            setTitle('')
            setUrl('')
            setShowForm(false)
            fetchCollection()
        }
    }

    useEffect(() => {
        if(listeningTo==='nothing'){
            setShowForm(true)
        }
        collection.find(function(livecollection, index) {
            if(livecollection.video_id === listeningTo){
                setLiveCollection(livecollection)
            }
        })

    }, [collection, listeningTo])
    return(
        <div className='flex'>
            {!showForm
                ?<div className='yt-player'>
                    {liveCollectoin.isPlaylist
                        ?<iframe  src={`https://www.youtube.com/embed/videoseries?list=${listeningTo}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        :<iframe  src={`https://www.youtube.com/embed/${listeningTo}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    }
                    
                </div>
                :<div className='playlist-form'>
                    <div className='cont flex items-start ml-8 flex-col  rounded-lg justify-center'>
                        <p className='text-2xl font-bold mb-3 w-2/3 text-white'>{isPlaylist ?"Create a YouTube Playlist" : isLivestream?"Create a YouTube Livestream" : isVideo?"Create a YouTube Video" :null}</p>
                        <input value={title} onChange={(e) => setTitle(e.target.value )} className='p-2 rounded-md w-2/3' placeholder={isPlaylist ?"Name the Playlist" : isLivestream?"Name the Livestream" : isVideo?"Name the Video" :null}/>
                        <input value={url} onChange={(e) => setUrl(e.target.value )} className='p-2 mt-2 rounded-md w-2/3' placeholder={isPlaylist ?"Paste the Playlist URL here" : isLivestream?"Paste the Livestream URL here" : isVideo?"Paste the Video URL here" :null}/>
                        <div className='flex justify-between items-center w-2/3 mt-2 mb-2'>
                            <p onClick={playlistSelected} className='cursor-pointer flex justify-center items-center text-xl  text-white font-semibold'>Playlist <i className={isPlaylist? 'gg-check ml-1 bg-blue-400' :'gg-check ml-1 bg-white' }/></p> 
                            <p onClick={livestreamSelected} className='cursor-pointer  flex justify-center items-center  text-xl  text-white font-semibold'>Livestream <i className={isLivestream? 'gg-check ml-1 bg-blue-400' :'gg-check ml-1 bg-white' }/></p> 
                            <p onClick={videoSelected} className='cursor-pointer  flex justify-center items-center  text-xl  text-white font-semibold'>Video <i className={isVideo? 'gg-check ml-1 bg-blue-400' :'gg-check ml-1 bg-white' }/></p> 
                        </div>
                        <div  className='w-2/3 mt-2'>
                        <button disabled={pidValid || vidValid === false && title ==='' ?true :false} onClick={() => CreateCollection()} className='w-max rounded-md bg-white  bg-opacity-20 shadow-sm font-bold text-white pl-5 pr-5 pt-2 pb-2'>
                            Create
                        </button>
                        </div>
                    </div>
                </div>
            }
            
            <div className='w-full h-full '>
                <div className='flex flex-col items-start ml-4 h-auto w-full p-2 rounded-3xl'>
                    {collection.map(col => (
                        <div onClick={() => updateListeningTo(col.video_id)} className='cursor-pointer flex p-0 mt-2  items-center text-2xl justify-center font-black text-white '>
                            {listeningTo === col.video_id
                                ?<i className='mr-3 gg-music'/>
                                :null
                            }
                            <p>{col.title}</p>
                        </div>
                    ))}
                </div>
                <div className='ml-6 mt-2' onClick={() => setShowForm(!showForm)}>
                    <Button name={showForm?"Go Back" :"Add"}/>
                </div>
            </div>
        </div>
    )
}

export default Player;
import React, { useEffect, useState } from "react";
import Button from "./Button"
import { useTestStore } from "../global-stores/useTestStore";
import { useUserStore } from "../global-stores/useUserStore";
import { useCollectionStore } from "../global-stores/useCollectionStore";
import { usePlaylistId,useVideoID } from "../hooks/usePlaylistId";
const Player: React.FC = () => {
    const [showForm, setShowForm] = useState(false);
    const collection = useCollectionStore(state => state.collection)
    const fetchCollection = useCollectionStore(state => state.fetchCollection)
    const deleteCollection = useCollectionStore(state => state.deleteCollection)
    const createColl = useCollectionStore(state => state.AddCollection)
    const listeningTo = useUserStore(state => state.user.listeningTo)
    const updateListeningTo = useUserStore(state => state.updateListeningTo)
    const [title, setTitle] = useState('')
    const [url, setUrl] = useState('')
    const [isLivestream, setIsLivestream] = useState(false)
    const [isPlaylist, setIsPlaylist] = useState(true)
    const [isVideo, setIsVideo] = useState(false)

    const [liveCollectoin, setLiveCollection] = useState<{isPlaylist:Boolean}>({isPlaylist:null})

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
        console.log('hi')
        if(isPlaylist){
            url_id = playlist_id
            const body = {
                title:title,
                video_id:url_id,
                isLivestream:isLivestream,
                isVideo:isVideo,
                isPlaylist:isPlaylist,
            }
            createColl(body)
            updateListeningTo(url_id)
            setTitle('')
            setUrl('')
            setShowForm(false)
        }else if(isVideo || isLivestream){
            url_id = video_id
            const body = {
                title:title,
                video_id:url_id,
                isLivestream:isLivestream,
                isVideo:isVideo,
                isPlaylist:isPlaylist,
            }
            createColl(body)
            updateListeningTo(url_id)
            setTitle('')
            setUrl('')
            setShowForm(false)
        }
    }

    const deleteCollectionfunc = async(id, key) => {
        deleteCollection(id, key)
    }

    useEffect(() => {
        if(String(listeningTo) ==='nothing'){
            setShowForm(true)
        }
        Object(collection).find(function(livecollection, index) {
            if(livecollection.video_id === listeningTo){
                setLiveCollection(livecollection)
            }
        })

    }, [collection, listeningTo])
    return(
        <div className='md:flex'>
            {!showForm
                ?<div className='yt-player'>
                    {liveCollectoin.isPlaylist
                        ?<iframe className='w-full h-64 md:w-full rounded-xl md:h-72'  src={`https://www.youtube.com/embed/videoseries?list=${listeningTo}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        :<iframe className='w-full h-64 rounded-xl md:h-72' src={`https://www.youtube.com/embed/${listeningTo}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    }
                    
                </div>
                :<div className='flex justtify-center w-full pt-2 pb-2'>
                    <div className=' w-5/6 flex items-start ml-8 flex-col  rounded-lg justify-center'>
                        <p className='text-2xl font-bold mb-3 w-full md:w-2/3 text-white'>{isPlaylist ?"Add a YouTube Playlist" : isLivestream?"Add a YouTube Livestream" : isVideo?"Add a YouTube Video" :null}</p>
                        <input value={title} onChange={(e) => setTitle(e.target.value )} className='p-2 rounded-md w-full md:w-2/3' placeholder={isPlaylist ?"Name the Playlist" : isLivestream?"Name the Livestream" : isVideo?"Name the Video" :null}/>
                        <input value={url} onChange={(e) => setUrl(e.target.value )} className='p-2 mt-2 rounded-md w-full md:w-2/3' placeholder={isPlaylist ?"Paste the Playlist URL here" : isLivestream?"Paste the Livestream URL here" : isVideo?"Paste the Video URL here" :null}/>
                        <div className='flex justify-between items-center w-2/3 mt-2 mb-2'>
                            <p onClick={playlistSelected} className='cursor-pointer flex justify-center items-center text-xl  text-white font-semibold'><i className={isPlaylist? 'gg-check ml-1 bg-blue-400' :'gg-check ml-1 bg-white' }/> Playlist</p> 
                            <p onClick={livestreamSelected} className='cursor-pointer  flex justify-center items-center  text-xl  text-white font-semibold'><i className={isLivestream? 'gg-check ml-1 bg-blue-400' :'gg-check ml-1 bg-white' }/> Livestream</p> 
                            <p onClick={videoSelected} className='cursor-pointer  flex justify-center items-center  text-xl  text-white font-semibold'><i className={isVideo? 'gg-check ml-1 bg-blue-400' :'gg-check ml-1 bg-white' }/> Video</p> 
                        </div>
                        <div  className='w-2/3 mt-2'>
                        <button disabled={pidValid || vidValid === true && title !='' ?false :true} onClick={() => CreateCollection()} className='w-max rounded-md bg-white  bg-opacity-20 shadow-sm font-bold text-white pl-5 pr-5 pt-2 pb-2'>
                            Add
                        </button>
                        </div>
                    </div>
                </div>
            }
            
            <div className='w-full md:w-4/12 h-full'>
                <div className='flex flex-col items-start ml-2 md:ml-4 h-20 md:h-60  overflow-auto  overscroll-x-none w-full p-2'>
                    {Object(collection).map((col, key) => (
                        <div key={key} className='cursor-pointer flex p-0 mb-1  items-center w-full text-2xl justify-center font-black text-white '>
                            {listeningTo === col.video_id
                                ?<><i className='mr-2 mt-1 gg-music'/>
                                <div className='flex justify-between w-full items-center'>
                                    <p  onClick={() => updateListeningTo(col.video_id)}>{col.title.length > 10 ?<>{col.title.substring(0,8) + '..'}</> :<>{col.title}</>}</p>
                                    <i onClick={() => deleteCollectionfunc(col.id, key)} className="gg-trash mr-2"></i>
                                </div>
                                </>
                                :<div className='flex justify-between w-full items-center'>
                                    <p  onClick={() => updateListeningTo(col.video_id)}>{col.title.length > 11 ?<>{col.title.substring(0,9) + '...'}</> :<>{col.title}</>}</p>
                                    <i onClick={() => deleteCollectionfunc(col.id, key)} className="gg-trash mr-2"></i>
                                </div>
                            }
                            
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
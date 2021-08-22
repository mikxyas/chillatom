import { useEffect, useState } from "react"

export const usePlaylistId = (url) => {
    const [playlistId, setplaylistId] = useState('')
    const [pidValid, setpidValid] = useState(true)

    useEffect(() => {
        let URL = url;
        const idPosition = URL.indexOf('list=');
        const url_length = URL.length
        if(idPosition != -1){
            setpidValid(true)
            setplaylistId(URL.substring(idPosition +5,url_length))
            console.log(playlistId)

        }else{
            setpidValid(false)
        }
        },[url])
        
    return [playlistId, pidValid]
}

export const useVideoID = (url) => {
    const [videoId, setVideoId] = useState('')
    const [vidValid, setvidValid] = useState(true)
    useEffect(() => {
        let URL = url;
        const idPosition = URL.indexOf('v=');
        const url_length = URL.length
        if(idPosition != -1){
            setvidValid(true)
            setVideoId(URL.substring(idPosition +2,url_length))
            console.log(videoId)
        }else{
            setvidValid(false)
        }
        },[url])
    
        return [videoId, vidValid]

}
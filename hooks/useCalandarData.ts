import { useEffect, useState } from "react"
import { useFocusLogStore } from "../global-stores/useFocusLogStore"

export const useCalandarData = (logs) => {
    const focusLogs = useFocusLogStore(state=> state.focusLogs)
    const [calandarData, setCalandarData] = useState<any>({})
    const logsFetched = useFocusLogStore(state => state.logsFetched)
    function getLevelofFocus(focusedMin){
        if(focusedMin <= 60 && focusedMin > 0){
            return 1
        }
        if(focusedMin <= 120 && focusedMin > 60){
            return 2
        }
        if(focusedMin <= 180 && focusedMin > 120){
            return 3
        }
        if(focusedMin > 180){
            return 4
        }
    }
    useEffect(() => {
            let bag = []
            Object(focusLogs).forEach(log => {
                const focusLevel = getLevelofFocus(log.totFocusedMin)
                const obj = {
                    "date": log.startedAt.split('T')[0],
                    "count": log.totFocusedMin,
                    "level":focusLevel
                    // "level":2
                };
                bag = [...bag, obj]
            })
            setCalandarData(bag)
    },[logs]) 
    console.log('adsasdasdasdsa')
    console.log(calandarData)
    return [calandarData]
}
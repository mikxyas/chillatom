import { useEffect, useState } from "react"
import { useFocusLogStore } from "../global-stores/useFocusLogStore"

export const useCalandarData = (logs) => {
    const focusLogs = useFocusLogStore(state=> state.focusLogs)
    const [calandarData, setCalandarData] = useState<any>({})
    const logsFetched = useFocusLogStore(state => state.logsFetched)

    useEffect(() => {
            let bag = []
            Object(focusLogs).forEach(log => {
                const obj = {
                    "date": log.startedAt.split('T')[0],
                    "count": log.totFocusedMin,
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
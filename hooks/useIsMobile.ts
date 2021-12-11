import { useEffect, useState } from "react"

export const useIsMobile = () => {
    const [isMobile, setisMobile] = useState(false)
    useEffect(() => {
        let width = screen.width;
        if (width < 480){
            setisMobile(true)
        }
        else{
            setisMobile(false)
        }
    },[screen.width])
    console.log(isMobile)
    return[isMobile]
}
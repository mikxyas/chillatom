import { stringify } from "querystring";
import { useState, useEffect } from "react";
import { useFocusLogStore } from "../global-stores/useFocusLogStore";
import { useUserStore } from "../global-stores/useUserStore";
import Button from "./Button"

const Pomodoro:React.FC = () => {
    const user = useUserStore(state => state.user)
    const chillTime = useUserStore(state => state.user.chillFor)
    const focusTime = useUserStore(state => state.user.focusFor)
    const[minutes, setMinutes] = useState(focusTime)
    const[seconds, setSeconds] = useState(0)
    const[breakMinutes, setBreakMinutes] = useState(chillTime)
    const[breakSeconds, setBreakSeconds] = useState(0)
    const[startTimer, setStartTimer] = useState(false)
    const[breakTime, setBreakTime] = useState(false)

    const [sessionCounter, setSessionCouter] = useState(0)

    const fetchFocusLog = useFocusLogStore(state => state.fetchFocusLog)
    const getLatestFocusLog = useFocusLogStore(state => state.getLatestFocusLog)
    const addFocusLog = useFocusLogStore(state => state.addFocusLog)
    const updateFocusLog = useFocusLogStore(state => state.updateFocusLog)
    const latestFocusLog = useFocusLogStore(state => state.latestFocusLog)
    const createFocusLog = useFocusLogStore(state => state.createFocusLog)
    const focusLogSum = useFocusLogStore(state => state.focusLogSum)
    const getSumFocusLog = useFocusLogStore(state => state.getSumFocusLog)
    
    const handleFocusLog = () => {
        let focusLogData = {
            focusedMin: user.focusFor, action:'',id:latestFocusLog.id
        }
        if(user.focusingOn === 'studying'){
            focusLogData.action = 'studiedFor'
        } if(user.focusingOn === 'reading'){
            focusLogData.action = 'readFor'
        } if(user.focusingOn === 'writing'){
            focusLogData.action = 'wroteFor'
        } if(user.focusingOn === 'drawing'){
            focusLogData.action = 'drewFor'
        }

        if(createFocusLog){
            addFocusLog(focusLogData)
        }else{
            updateFocusLog(focusLogData)
        }
    }

    const handleTime = () => {
        // handle focus time
        if(breakTime === false){
            switch(seconds){
                case 0:
                    if(minutes != 0)
                    {
                        return{
                            seconds:59,
                        }
                    }else{
                        return{seconds:0}
                    }
                
                default:
                    return{
                        seconds: seconds - 1,
                    }              
            }
        }
        // Handle the break time
        else{
            switch(breakSeconds){
                case 0:
                    if(breakMinutes != 0) {
                        return{
                            breakSeconds:59,
                        }
                    }else{
                        return{
                            breakSeconds:0,
                        }
                    }

                default:
                    return{
                        breakSeconds: breakSeconds - 1,
                    }
            }
        }
    }
    useEffect(() => {
        // Function to count the focus minutes
        if(startTimer === true && breakTime === false){
            const timer = setTimeout(() => {
                    setSeconds(handleTime().seconds)
                    if(minutes === 0 && seconds === 0){
                        setBreakTime(true)
                        setMinutes(user.focusFor)
                        setSeconds(0)
                        setSessionCouter(sessionCounter + 1)
                        handleFocusLog()
                        return 0;
                    };
                    if(seconds === 0 && minutes !== 0){
                        setMinutes(minutes - 1)
                    };
            }, 1000)
        }
        // Function to count the break minutes 
        if(startTimer === true && breakTime === true){
            const timer = setTimeout(() => {
                setBreakSeconds(handleTime().breakSeconds)
                if(breakMinutes === 0 && breakSeconds === 0) {
                    setBreakTime(false)
                    setBreakMinutes(user.chillFor)
                    setBreakSeconds(0)
                }
                if(breakSeconds === 0 && breakMinutes !== 0){
                    setBreakMinutes(breakMinutes - 1)
                 };
            }, 1000)
        }
    })

    useEffect(() => {
        setMinutes(focusTime)
        setBreakMinutes(chillTime)
        setSeconds(0)
        setBreakSeconds(0)
        return () => {
        }
    }, [chillTime, focusTime])

    useEffect(() => {
        async function fetchit(){
            try{
                await fetchFocusLog()
                await getLatestFocusLog()
                await getSumFocusLog()
                console.log('hello!!')
            }
            catch(e){
                console.log(e)
            }
        }
        fetchit()
        return() =>{

        }
    },[])

    return(
        <div className='flex items-center h-full justify-center flex-col'>
            <div className='md:flex-col flex w-full justify-between items-center'>
            {!breakTime 
            ?<div className='text-white font-bold text-6xl md:text-8xl md:mb-5'>{minutes === 0 ? "00" :minutes <10 ? "0" + minutes:minutes}:{seconds === 0 ? "00" : seconds < 10 ? "0" + seconds : seconds} </div> 
            :<div className='text-white font-bold text-6xl md:text-8xl md:mb-5'>{breakMinutes === 0 ? "00" :breakMinutes <10 ? "0" + breakMinutes:breakMinutes}:{breakSeconds === 0 ? "00" : breakSeconds < 10 ? "0" + breakSeconds : breakSeconds}</div>}
            <div onClick={() => setStartTimer(!startTimer)}><Button name={startTimer === true ? "Stop" :"Start"}/></div>
            </div>
            <div className='mt-4 w-full pl-3 pr-3'>
                <div className='text-white font-bold flex md:flex-col  w-full justify-between text-center'>
                    <p>Sessions {sessionCounter}</p>
                    {!breakTime
                        ?<p>Focus on {user.focusingOn}</p>
                        :<p>Time to chill</p>
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Pomodoro;
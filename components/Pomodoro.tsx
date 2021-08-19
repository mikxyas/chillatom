import { useState, useEffect } from "react";
import Button from "./Button"

const Pomodoro:React.FC = () => {

    const[minutes, setMinutes] = useState(1)
    const[seconds, setSeconds] = useState(0)
    const[breakMinutes, setBreakMinutes] = useState(1)
    const[breakSeconds, setBreakSeconds] = useState(0)
    const[startTimer, setStartTimer] = useState(false)
    const[breakTime, setBreakTime] = useState(false)

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
   console.log(minutes + ':' + seconds)
   console.log('break ' + breakMinutes +':'+breakSeconds)
    useEffect(() => {
        // Function to count the focus minutes
        if(startTimer === true && breakTime === false){
            const timer = setTimeout(() => {
              
                    setSeconds(handleTime().seconds)
                    if(minutes === 0 && seconds === 0){
                        setBreakTime(true)
                        setMinutes(2)
                        setSeconds(0)
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
                    setBreakMinutes(5)
                }
                if(breakSeconds === 0 && breakMinutes !== 0){
                    setBreakMinutes(breakMinutes - 1)
                 };
            }, 1000)
        }
    })


    return(
        <div className='flex items-center h-full justify-center flex-col'>
            
            {breakTime 
            ?<div className='text-white font-bold text-6xl mb-5'>{breakMinutes + ':' + breakSeconds} break</div> 
            :<div className='text-white font-bold text-6xl mb-5'>{minutes + ':' + seconds}</div>}
            <div onClick={() => setStartTimer(!startTimer)}><Button name={startTimer === true ? "Stop" :"Start"}/></div>
            
        </div>
    )
}

export default Pomodoro;
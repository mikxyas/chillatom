import { useFocusLogStore } from "../global-stores/useFocusLogStore"
import { usePopup } from "../global-stores/usePopup"
import Button from "./Button"
import { minuteTohour } from "./Habit"

function GetMonth(month){
    if(month === 0){
        return "January"
    }
    if(month === 1){
        return "Feburary"
    }
    if(month === 2){
        return "March"
    }
    if(month === 3){
        return "April"
    }
    if(month === 4){
        return "May"
    }
    if(month === 5){
        return "June"
    }
    if(month === 6){
        return "July"
    }
    if(month === 7){
        return "August"
    }
    if(month === 8){
        return "September"
    }
    if(month === 9){
        return "October"
    }
    if(month === 10){
        return "November"
    }
    if(month === 11){
        return "December"
    }
}

function ExtractDate(date) {
    const month =  GetMonth(new Date(date).getUTCMonth())
    const month_date =  new Date(date).getUTCDate()
    
    return month + ' ' +month_date 

    // const month = GetMonth(thedate)
    // const datenum = new Date().getMonth()
    // return month + ' ' + datenum 
}

const Workrate:React.FC = () => {
    const showWorkrate = usePopup(state=> state.showWorkrate)
    const toggleWorkrate = usePopup(state => state.toggleWorkrate)

    const focusLogSum = useFocusLogStore(state => state.focusLogSum)
    const focusLogs = useFocusLogStore(state => state.focusLogs)

    return(
        <>  
        {showWorkrate
            ?<div className='absolute z-50 h-auto mt-20 w-full flex items-center flex-col justify-center'>

            <div  className='p-8 items-center justify-center w-2/5 h-auto bg-white shadow-lg rounded-xl grid gap-5 grid-cols-2'>
                <div className='col-span-2 pb-3 flex justify-between'>
                    <p className='text-3xl font-semibold'>Work Rate</p>
                    <i onClick={toggleWorkrate} className="gg-close-o cursor-pointer"></i>
                </div>
                <div className='flex justify-center col-span-2'>
                    <div className='bg-gray-200 p-4 rounded-lg'><h1 className='text-xl font-semibold'>{minuteTohour(focusLogSum.totFocusedMin)}</h1> <p>Focused</p></div>
                    <div className='bg-gray-200 ml-3 p-4 rounded-lg'><h1 className='text-xl font-semibold'>{minuteTohour(focusLogSum.studiedFor)}</h1> <p>Studied</p></div>
                    <div className='bg-gray-200 ml-3 p-4 rounded-lg'><h1 className='text-xl font-semibold'>{minuteTohour(focusLogSum.readFor)}</h1> <p>Read</p></div>
                    <div className='bg-gray-200 ml-3 p-4 rounded-lg'><h1 className='text-xl font-semibold'>{minuteTohour(focusLogSum.wroteFor)}</h1> <p>Wrote</p></div>
                    <div className='bg-gray-200 ml-3 p-4 rounded-lg'><h1 className='text-xl font-semibold'>{minuteTohour(focusLogSum.drewFor)}</h1> <p>Drawn</p></div>
                </div>
                <div className='flex'>
                    hi
                </div>
            </div>
        </div>
            :null
        }
        </>
    )
}

export default Workrate
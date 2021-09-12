import { useFocusLogStore } from "../global-stores/useFocusLogStore"
import { usePopup } from "../global-stores/usePopup"
import Button from "./Button"
import { minuteTohour } from "./Habit"
import { ResponsiveCalendar } from '@nivo/calendar'
import { useUserStore } from "../global-stores/useUserStore"
import {useEffect, useState} from 'react'


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
function changeKey(originalKey, newKey, arr)
{
  var newArr = [];
  for(var i = 0; i < arr.length; i++)
  {
    var obj = arr[i];
    obj[newKey] = obj[originalKey];
    delete(obj[originalKey]);
    newArr.push(obj);
  }
  return newArr;
}



const Workrate:React.FC = () => {
    const showWorkrate = usePopup(state=> state.showWorkrate)
    const toggleWorkrate = usePopup(state => state.toggleWorkrate)

    const user = useUserStore(state => state.user)

    const focusLogSum = useFocusLogStore(state => state.focusLogSum)
    const focusLogs = useFocusLogStore(state => state.focusLogs)
    const logsFetched = useFocusLogStore(state => state.logsFetched)
    const latestFocusLog = useFocusLogStore(state => state.latestFocusLog)
    const [calanderData, setCalanderData] = useState<any>({})
    useEffect(() => {
        function CreateCalandarData() {
            let bag = []
            Object(focusLogs).forEach(log => {
                const obj = {
                    "day": log.startedAt.split('T')[0],
                    "value": log.totFocusedMin
                };
                bag = [...bag, obj]
            })
            setCalanderData(bag)
        }
        if(logsFetched){
            CreateCalandarData() 
        }
    },[focusLogs])      
    return(
        <>  
        {showWorkrate
            ?<div className='absolute z-50 h-full  mt-20 w-full flex items-center flex-col justify-start lg:pl-0 lg:pr-0 pl-2 pr-2'>

            <div  className='p-8 items-center   justify-center w-full lg:w-2/5 h-auto bg-white shadow-lg rounded-xl grid gap-5 grid-cols-2'>
                <div className='col-span-2 pb-3 flex justify-between'>
                    <p className='text-3xl font-semibold'>Work Rate</p>
                    <i onClick={toggleWorkrate} className="gg-close-o cursor-pointer"></i>
                </div>
                <div className='lg:flex col-span-2 gap-2 lg:justify-center justify-center grid grid-cols-3 w-full'>
                    <div className='bg-gray-100 p-4 rounded-lg'><h1 className='text-xl font-semibold'>{minuteTohour(focusLogSum.totFocusedMin)}</h1> <p>Focused</p></div>
                    <div className='bg-gray-100 p-4 rounded-lg'><h1 className='text-xl font-semibold'>{minuteTohour(focusLogSum.studiedFor)}</h1> <p>Studied</p></div>
                    <div className='bg-gray-100 p-4 rounded-lg'><h1 className='text-xl font-semibold'>{minuteTohour(focusLogSum.readFor)}</h1> <p>Read</p></div>
                    <div className='bg-gray-100 p-4 rounded-lg'><h1 className='text-xl font-semibold'>{minuteTohour(focusLogSum.wroteFor)}</h1> <p>Wrote</p></div>
                    <div className='bg-gray-100 p-4 rounded-lg'><h1 className='text-xl font-semibold'>{minuteTohour(focusLogSum.drewFor)}</h1> <p>Drawn</p></div>
                </div>
                <div  style={{ width: '100%', height: '10em' }} className=' bg-transparent flex h-full col-span-2'>
                    {focusLogs[0] != undefined 
                        ?<ResponsiveCalendar data={calanderData}
                        from={String(user.createdAt)}
                        to={String(latestFocusLog.startedAt)}
                        emptyColor="#e8e8e8"
                        colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
                        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                        yearSpacing={35}
                        yearLegendOffset={9}
                        monthSpacing={5}
                        monthBorderColor="#ffffff"
                        monthLegendOffset={7}
                        dayBorderWidth={3}
                        dayBorderColor="#ffffff"
                        // direction="vertical" MAke hook for this
                        // tooltip={null}
                        
                        legends={[
                            {
                                anchor: 'bottom-right',
                                direction: 'row',
                                translateY: 36,
                                itemCount: 4,
                                itemWidth: 42,
                                itemHeight: 36,
                                itemsSpacing: 14,
                                itemDirection: 'right-to-left'
                            }
                        ]}
                    />
                    :null

                    }
                    
                </div>
            </div>
        </div>
            :null
        }
        </>
    )
}

export default Workrate
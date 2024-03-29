
import ActivityCalendar from 'react-activity-calendar'
import { useFocusLogStore } from '../global-stores/useFocusLogStore'
import { useUserStore } from '../global-stores/useUserStore'
import { useCalandarData } from '../hooks/useCalandarData'
import ReactTooltip from 'react-tooltip';

export default function ProgressCalandar() {
    const focusLogs = useFocusLogStore(state=> state.focusLogs)
    const [calandarData] = useCalandarData(focusLogs)
    const latestFocusLog = useFocusLogStore(state => state.latestFocusLog)
    const user = useUserStore(state => state.user)
      
    
    console.log(calandarData)

    return (
        <div style={{height:'10em', width:'100%'}}> 
             {focusLogs[0] != undefined 

            ?
            <ActivityCalendar
                loading={calandarData[0] != undefined ?false :true}
                data={calandarData}
                labels={{
                    legend: {
                      less: 'Less',
                      more: 'More'
                    },
                    months: [
                      'Jan',
                      'Feb',
                      'Mar',
                      'Apr',
                      'May',
                      'Jun',
                      'Jul',
                      'Aug',
                      'Sep',
                      'Oct',
                      'Nov',
                      'Dec'
                    ],
                    totalCount: '{{count}} contributions in {{year}}',
                    weekdays: [
                      'Sun',
                      'Mon',
                      'Tue',
                      'Wed',
                      'Thu',
                      'Fri',
                      'Sat'
                    ]
                  }}
            >
              <ReactTooltip html/>
              </ActivityCalendar>
            :null
            }
        </div>
    )
}

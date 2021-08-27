import Card from '../components/Card'
import Habit from '../components/Habit'
import Pomodoro from '../components/Pomodoro'
import Player from '../components/Player'
import { useUserStore } from '../global-stores/useUserStore'

export default function Home() {
  const loading = useUserStore(state => state.loading) 
  const userFetched = useUserStore(state => state.userFetched) 
  const error = useUserStore(state => state.error) 
  return (
    <div className='flex mt-7 justify-center items-center'>
      {loading===false && userFetched === true
        ? <div className='grid grid-cols-3 gap-4 w-2/5'>
            <div className=''><Card content={<Habit/>}/></div>
            <div className='col-span-2'><Card content={<Pomodoro/>}/></div>
            <div className='col-span-3'><Card content={<Player/>}/></div>    
          </div>
        :<h1>Loading</h1>
      }
    </div>
  )
}

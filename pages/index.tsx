import Card from '../components/Card'
import Habit from '../components/Habit'
import Pomodoro from '../components/Pomodoro'
import Player from '../components/Player'

export default function Home() {
  return (
    <div className='flex mt-10 justify-center items-center'>
      <div className='grid grid-cols-3 gap-4 w-2/5'>
        <div className=''><Card content={<Habit/>}/></div>
        <div className='col-span-2'><Card content={<Pomodoro/>}/></div>
        <div className='col-span-3'><Card content={<Player/>}/></div>    
      </div>
      
    </div>
  )
}

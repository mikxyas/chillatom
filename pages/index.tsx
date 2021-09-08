import Card from '../components/Card'
import Habit from '../components/Habit'
import Pomodoro from '../components/Pomodoro'
import Player from '../components/Player'
import { useUserStore } from '../global-stores/useUserStore'
import { useCollectionStore } from '../global-stores/useCollectionStore'

export default function Home() {
  const loading = useUserStore(state => state.loading) 
  const coll_loading  = useCollectionStore(state => state.loading_collection)
  const coll_fetched  = useCollectionStore(state => state.collection_fetched)
  const userFetched = useUserStore(state => state.userFetched) 
  const error = useUserStore(state => state.error) 
  return (
    <div className='flex md:mt-7 mt-2 justify-center items-center'>
      {loading===false && userFetched === true && coll_loading ===false && coll_fetched === true
        ? <div className='md:grid md:grid-cols-3 gap-4 w-full md:pl-0 md:pr-0 pl-2 pr-2 md:w-2/5'>
            <div className=''><Card content={<Habit/>}/></div>
            <div className='col-span-2'><Card content={<Pomodoro/>}/></div>
            <div className='col-span-3'><Card content={<Player/>}/></div>    
          </div>
        :<h1>Loading</h1>
      }
    </div>
  )
}

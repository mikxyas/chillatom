import Card from '../components/Card'
import Habit from '../components/Habit'
import Pomodoro from '../components/Pomodoro'
import Player from '../components/Player'
import { useUserStore } from '../global-stores/useUserStore'
import { useCollectionStore } from '../global-stores/useCollectionStore'
import About from './about'

export default function Home() {
  const loading = useUserStore(state => state.loading) 
  const coll_loading  = useCollectionStore(state => state.loading_collection)
  const coll_fetched  = useCollectionStore(state => state.collection_fetched)
  const userFetched = useUserStore(state => state.userFetched) 
  const error = useUserStore(state => state.error) 
  return (
    <div className='flex mt-2 justify-center items-center'>
      {loading===false && userFetched === true && coll_loading ===false && coll_fetched === true
        ?<div style={{width:'50em'}}> 
          <div className='lg:grid lg:grid-cols-3 gap-4 w-full lg:pl-0 lg:pr-0 pl-2 pr-2'>
            <div className=''><Card content={<Habit/>}/></div>
            <div className='col-span-2'><Card content={<Pomodoro/>}/></div>
            <div className='col-span-3'><Card content={<Player/>}/></div>    
          </div>
          </div>
          :<h1>...Loading</h1>
      }
    </div>
  )
}

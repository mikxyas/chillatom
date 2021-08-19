import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/Button'
import Card from '../components/Card'
import Habit from '../components/Habit'
import Pomodoro from '../components/Pomodoro'

export default function Home() {
  return (
    <div className='flex mt-20 justify-center items-center'>
      <div className='grid grid-cols-3 gap-4 w-1/3'>
        <div className=''><Card content={<Habit/>}/></div>
        <div className='col-span-2'><Card content={<Pomodoro/>}/></div>
        <div className='col-span-3'><Card content={<h1>hi</h1>}/></div>    
      </div>
      
    </div>
  )
}

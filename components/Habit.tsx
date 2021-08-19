
const Habit:React.FC = () => {
    return(
        <div className='flex justify-center items-center flex-col h-full'>
            <div className='cursor-pointer habit-card transition ease-in duration-100 transform hover:-translate-y-1 hover:scale-150 font-bold text-4xl text-white mb-2'><p>Study</p></div>
            <div className='cursor-pointer transition ease-in duration-100 transform hover:-translate-y-1 hover:scale-150 habit-card font-bold text-4xl text-white mb-2'>Read</div>
            <div className='cursor-pointer transition ease-in duration-100 transform hover:-translate-y-1 hover:scale-150 habit-card font-bold text-4xl text-white mb-2'>Write</div>
            <div className='cursor-pointer transition ease-in duration-100 transform hover:-translate-y-1 hover:scale-150 habit-card font-bold text-4xl text-white mb-2'>Draw</div>
        </div>
    )
}

export default Habit;
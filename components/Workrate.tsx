import { usePopup } from "../global-stores/usePopup"

const Workrate:React.FC = () => {
    const showWorkrate = usePopup(state=> state.showWorkrate)
    const toggleWorkrate = usePopup(state => state.toggleWorkrate)
    return(
        <>  
        {showWorkrate
            ?<div className='absolute z-50 h-auto mt-20 w-full flex items-center flex-col justify-center'>

            <div  className='pb-8 pl-8 pr-8 pt-8 items-center justify-center w-2/5 h-auto bg-white shadow-lg rounded-xl grid gap-5 grid-cols-2'>
                <div className='col-span-2 pb-3 flex justify-between'>
                    <p className='text-3xl font-semibold'>Work Rate</p>
                    <i onClick={toggleWorkrate} className="gg-close-o cursor-pointer"></i>
                </div>
            </div>
        </div>
            :null
        }
        </>
    )
}

export default Workrate
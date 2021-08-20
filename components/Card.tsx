
const Card: React.FC<{content: any}> = (props) => {
    return(
        <div className='aqua-effect  h-80 w-auto rounded-3xl p-4 bg-white bg-opacity-20 bg-clip-padding backdrop-filter backdrop-blur-lg shadow-lg backdrop-saturate-150' >
            {props.content}
        </div>
    )
}

export default Card;
const ProgressBar:React.FC<{time:number}> = (props) => {

    const width = 442
    const height = 50
    const firstHalfWidth = width * (props.time / 100);
    const secondHalfWidth = width - firstHalfWidth;
    return(
        <div className='flex mt-1 items-center justify-center'>
            <svg className='rounded-lg' width={width} height={height} viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg">
                <g>
                    <rect fill="#1e1e1e" x={0} y={0} width={firstHalfWidth} height={height} />
                    <rect fill="#9e9e9e" x={firstHalfWidth} y={0} width={secondHalfWidth} height={height} />
                </g>
            </svg>
            <h1 className='absolute font-bold text-white text-xl'>{props.time}</h1>
        </div>
    )
}

export default ProgressBar
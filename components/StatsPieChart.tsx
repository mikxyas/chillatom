import React, { useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { minuteTohour } from "./Habit"

export default function StatsPieChart(props) {
    const [selected, setSelected] = useState<number | undefined>(0);
    const [hovered, setHovered] = useState<number | undefined>(undefined);
    const data = props.data.map((entry, i) => {
        if (hovered === i) {
            return {
                ...entry,
                color: '#212121',

            };
        }
        return entry;
    });

    return (
        <div>
            <div style={{ marginTop: '-1em', marginLeft: '-1em' }} className='flex justify-between items-center'>
                <PieChart
                    // className='w-2/3'
                    style={{ fontWeight: 500 }}
                    data={data}
                    segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
                    segmentsShift={(index) => (index === selected ? 6 : 0)}
                    onClick={(event, index) => {
                        console.log('CLICK', { event, index });
                        setSelected(index === selected ? undefined : index);
                    }}
                    onMouseOver={(_, index) => {
                        setHovered(index);
                    }}
                    onMouseOut={() => {
                        setHovered(undefined);
                    }}
                    label={({ dataEntry }) => minuteTohour(dataEntry.value)}
                    labelStyle={{ fontSize: '5px', fill: '#fff', opacity: '0.75', pointerEvents: 'none', }}
                    labelPosition={75}
                    lineWidth={70}

                    paddingAngle={1}
                    viewBoxSize={[100, 100]}
                    center={[50, 50]}
                    radius={40}
                    animationDuration={500}
                    animationEasing='ease-out'
                    startAngle={180}
                    animate={true}
                    background='whitesmoke'

                // rounded  
                />
                {/* <div className='flex  flex-col'>
                                        <div className='flex  items-center'>
                                            <div style={{background:'#003f5c', height:'20px', width:'20px'}}></div>
                                            <p className='font-semibold ml-2'>Time Studied</p>
                                        </div>
                                        <div className='flex  items-center'>
                                            <div style={{background:'#58508d', height:'20px', width:'20px'}}></div>
                                            <p className='font-semibold ml-2'>Time Read</p>
                                        </div>
                                        <div className='flex  items-center'>
                                            <div style={{background:'#bc5090', height:'20px', width:'20px'}}></div>
                                            <p className='font-semibold ml-2'>Time Wrote</p>
                                        </div>
                                        <div className='flex  items-center'>
                                            <div style={{background:'#ff6361', height:'20px', width:'20px'}}></div>
                                            <p className='font-semibold ml-2'>Time Drawn</p>
                                        </div>
                                    </div> */}


            </div>
        </div>
    )
}

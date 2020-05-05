import React from 'react'
import './interval-card.scss'

const IntervalCard = () => {
    return <div className='interval-card'>
        <p className='interval-card-title'>
            Interval
        </p>
        <div className='input-row name'>
            <p className='input-row-title'>Name:</p>
        </div>
        <div className='input-row time'>
            <p className='input-row-title'>Time:</p>
        </div>
        <div className='input-row rest'>
            <p className='input-row-title'>Rest:</p>
        </div>
    </div>
}

export default IntervalCard
import React from 'react'
import './interval-card.scss'
import TextField from '@material-ui/core/TextField'

const IntervalCard = () => {
    return <div className='interval-card'>
        <p className='interval-card-title'>
            Interval
        </p>
        <div className='input-row name'>
            <p className='input-row-title'>Name:</p>
            <TextField />
        </div>
        <div className='input-row time'>
            <p className='input-row-title'>Time:</p>
            <TextField />
        </div>
        <div className='input-row rest'>
            <p className='input-row-title'>Rest:</p>
            <TextField />
        </div>
    </div>
}

export default IntervalCard
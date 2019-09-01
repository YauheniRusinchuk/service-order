import React from 'react'
import money from '../assets/notes.png'
import location from '../assets/location.png'
import call from '../assets/call.png'


const DetailView = ({detail}) => {

    return(
        <div className='detail_item'>
            <h3>{detail.title}</h3>
            <p>{detail.description}</p>
            <div className='detail_info'>
                <img src={money} alt='imagess' />
                <span>{detail.reward}</span>
                <img src={location} alt='imagess' />
                <span>{detail.city}</span>
                <img src={call} alt='imagess' />
                <span>{detail.contact}</span>
            </div>
        </div>
    )
}

export default DetailView;

import React from 'react'
import money from '../assets/notes.png'
import location from '../assets/location.png'
import call from '../assets/call.png'
import {Link} from 'react-router-dom'

const HomeView = ({id,title, description, reward, city, contact}) => {
    return (
        <div className='order_item'>
            <Link className='order_title' to={`/detail${id}`}>{title}</Link>
            <p className='order_description'>{description}</p>
            <p className='order_reward'>
                <img src={money} alt='imagess' />
                <span>{reward}</span>
            </p>
            <p className='order_location'>
                <img src={location} alt='imagess' />
                <span>{city}</span>
            </p>
            <p className='order_contact'>
                <img src={call} alt='imagess' />
                <span>{contact}</span>
            </p>
        </div>
    );
}

export default HomeView;

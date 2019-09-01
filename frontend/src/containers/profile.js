import React from 'react'
import {connect} from 'react-redux'
import {loadProfile} from '../actions/profile'
import {deleteOrder} from '../actions/orders'
import money from '../assets/notes.png'
import location from '../assets/location.png'
import call from '../assets/call.png'
import {Link} from 'react-router-dom'


class Profile extends React.Component {


    componentDidMount() {
        this.props.loadProfile();
    }


    render(){
        const {profile} = this.props.profile
        return(
            <div className='profile_container'>
            {
                profile.map(order => {
                    return (
                        <div key={order.id} className='order_item'>
                            <Link className='order_title' to={`/detail${order.id}`}>{order.title}</Link>
                            <p className='order_description'>{order.description}</p>
                            <p className='order_reward'>
                                <img src={money} alt='imagess' />
                                <span>{order.reward}</span>
                            </p>
                            <p className='order_location'>
                                <img src={location} alt='imagess' />
                                <span>{order.city}</span>
                            </p>
                            <p className='order_contact'>
                                <img src={call} alt='imagess' />
                                <span>{order.contact}</span>
                            </p>
                            <button className='btn_delete' onClick={this.props.deleteOrder.bind(this, order.id)}>УДАЛИТЬ</button>
                            <Link className='btn_edit' to={`/update/${order.id}`}>ОБНОВИТЬ</Link>
                        </div>
                    )
                })
            }
            </div>
        )
    }
}


const mapStateToProps = state => ({
    profile: state.profile,
})



export default connect(mapStateToProps, {loadProfile, deleteOrder})(Profile);

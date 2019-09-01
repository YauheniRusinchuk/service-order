import React from 'react'
import HomeView from '../components/homeView';
import {connect} from 'react-redux'
import {getOrders} from '../actions/orders'


class Home extends React.Component {


    componentDidMount(){
        this.props.getOrders();
    }


    render(){
        const {orders} = this.props
        return (
            <div className='home_container'>
                {
                    orders.map(order => {
                        return (
                            <HomeView
                                id={order.id}
                                key={order.id}
                                title={order.title}
                                description={order.description}
                                reward={order.reward}
                                city={order.city}
                                contact={order.contact}
                            />
                        )
                    })
                }
            </div>
        );
    }
}


const mapStateToProps = state => ({
    orders: state.orders.orders,
})


export default connect(mapStateToProps, {getOrders})(Home);

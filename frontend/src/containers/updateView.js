import React from 'react'
import {connect} from 'react-redux'
import {updateOrder} from '../actions/orders'

class UpdateView extends React.Component {

    state = {
        title: this.props.data.title,
        description: this.props.data.description,
        reward: this.props.data.reward,
        city: this.props.data.city,
        contact: this.props.data.contact,
    }

    onSubmitHandle = (e) => {
        e.preventDefault();
        const {id} = this.props.data;
        this.props.updateOrder(id, this.state)
    }


    onHandleChange = (e) => {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value})
    }

    render(){
        console.log(this.state)
        return(
                <div className='update_container'>
                    <p>ОБНОВИТЬ</p>
                    <form onSubmit={this.onSubmitHandle}>
                        <input type='text'
                            name='title'
                            value={this.state.title}
                            onChange={this.onHandleChange}
                        />
                        <textarea
                            name='description'
                            value={this.state.description}
                            onChange={this.onHandleChange}
                        ></textarea>
                        <input
                            name='reward'
                            value={this.state.reward}
                            onChange={this.onHandleChange}
                            type='text' />
                        <input
                            name='city'
                            value={this.state.city}
                            onChange={this.onHandleChange}
                            type='text' />
                        <input
                            name='contact'
                            value={this.state.contact}
                            onChange={this.onHandleChange}
                            type='text' />
                        <button>ОБНОВИТЬ</button>
                    </form>
                </div>
        )
    }
}


export default connect(null, {updateOrder})(UpdateView);

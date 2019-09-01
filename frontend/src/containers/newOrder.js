import React from 'react'
import {addOrder} from '../actions/orders'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class NewOrder extends React.Component {

    state = {
        title: "",
        description: "",
        reward: "",
        city: "",
        contact: "",
        redirect: false,
    }

    onChangeHandle = (e) => {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmitHandle = (e) => {
        e.preventDefault();
        const {title, description, reward, city, contact} = this.state;
        const order = {
                title,
                description,
                reward,
                city,
                contact
        }
        this.props.addOrder(order)
        this.setState({redirect: true})
    }


    render(){
        if(this.state.redirect) {
            return <Redirect to='/' />
        }
        return(
            <div className='neworder_container'>
                <p>НОВОЕ ОБЪЯВЛЕНИЕ</p>

                <form onSubmit={this.onSubmitHandle}>
                    <input
                        onChange={this.onChangeHandle}
                        name='title'
                        value={this.state.title}
                        type='text' placeholder="Заголовок объявления..." />
                    <textarea
                        onChange={this.onChangeHandle}
                        name='description'
                        value={this.state.description}
                        placeholder="Описание объявления..."></textarea>
                    <input
                        onChange={this.onChangeHandle}
                        name='reward'
                        value={this.state.reward}
                        type='text' placeholder="Какое вознаграждение?" />
                    <input
                        onChange={this.onChangeHandle}
                        name='city'
                        value={this.state.city}
                        type='text' placeholder="Ваш город?" />
                    <input
                        onChange={this.onChangeHandle}
                        name='contact'
                        value={this.state.contact}
                        type='text' placeholder="Как с вами связаться?" />
                    <button>ДОБАВИТЬ</button>
                </form>
            </div>
        );
    }
}

export default connect(null, {addOrder})(NewOrder);

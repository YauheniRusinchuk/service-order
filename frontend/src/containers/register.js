import React from 'react'
import {connect} from 'react-redux'
import {register} from '../actions/auth'
import {Redirect} from 'react-router-dom'

class Register extends React.Component {

    state = {
        email: '',
        password: '',
        password2: '',
    }

    onChangeHandle = (e) => {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmitHandle = (e) => {
        e.preventDefault();
        const {email, password, password2} = this.state;
        if((email) && (password === password2)) {
            const data = {
                email,
                password
            }
            this.props.register(data)
        }
    }


    render(){
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />;
        }
        return (
            <div className='register_container'>
                <p>ЗАРЕГИСТРИРУЙТЕСЬ</p>
                <form onSubmit={this.onSubmitHandle}>
                    <input
                        onChange={this.onChangeHandle}
                        value={this.state.email}
                        name='email'
                        type='email'
                        placeholder='Почта ...' />
                    <input
                        onChange={this.onChangeHandle}
                        value={this.state.password}
                        name='password'
                        type='password'
                        placeholder="Пароль ..."
                        />
                    <input
                        onChange={this.onChangeHandle}
                        value={this.state.password2}
                        name='password2'
                        type='password' placeholder="Повторите пороль ..." />
                    <button>РЕГИСТРАЦИЯ</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})



export default connect(mapStateToProps, {register})(Register);

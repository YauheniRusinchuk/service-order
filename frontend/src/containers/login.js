import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from '../actions/auth'

class Login extends React.Component {

    state = {
        email: '',
        password: '',
    }

    onChangeHandle = (e) => {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value})
    }


    onSubmitHandle = (e) => {
        e.preventDefault();
        const {email, password} = this.state;
        if(email && password) {
            this.props.login(email, password)
        }
    }

    render(){
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />;
        }
        return (
            <div className='login_container'>
                    <p>ПРИВЕТ, ЗАЛОГИНЬСЯ</p>
                        <form onSubmit={this.onSubmitHandle}>
                            <input
                                onChange={this.onChangeHandle}
                                name='email'
                                value={this.state.email}
                                type='email' placeholder="Почта ..." />
                            <input
                                onChange={this.onChangeHandle}
                                name='password'
                                value={this.state.password}
                                type='password' placeholder="Пароль ..." />
                            <button>ЛОГИНЮСЬ</button>
                        </form>
                    <Link to='/register'>регистрация</Link>
            </div>
        );
    }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});



export default connect(mapStateToProps, {login})(Login);

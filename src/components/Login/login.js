import React,{Component} from 'react';
import './login.css';
import axios from 'axios';
import FeedComponent from '../Feed/Feed';
//import {Route} from 'react-router-dom';
import { withRouter } from 'react-router-dom'
class LoginComponent extends Component{
    
    state={
        username:"",
        password:"",
        token:""
    }

    submitHandler=(event)=>{
        console.log(this.props);
        debugger
        //this.isLogin();
        const credentials={
            userName:this.state.username,
            password:this.state.password,
            token:Math.random().toString(36).slice(2)
        };
        console.log(credentials);
        axios.post('https://my-app-db-c3955.firebaseio.com/users.json',credentials).then(response=>
        {
            console.log(response);
        
    });
        console.log(credentials);
        event.preventDefault();
        this.props.history.push('/feed');
        this.setState({username:"",password:"",token:""});
        
    };
    isLogin=()=>{
        const userName=this.state.username;
        axios.get('https://my-app-db-c3955.firebaseio.com/users.json',userName).then(response=>{

                // The ID is the key
                const data = [];
                const res=response.data;
      // extracting firebase ids for manipulating existing notes
        for (let key in res) {
            // const item = data[key]
            // item.id = key;
            // console.log(item.id)
            data.push({...response.data[key]});
            
        } 
        //console.log(data);
        for(let item in data)
        {
              console.log(Object.keys(item));
        }
        });
    
    }
    onUsernameChange = event => {
        this.setState({ username: event.target.value });
      };
    
      onPasswordChange = event => {
        this.setState({ password: event.target.value });
      };

      validateForm=()=>{
        var regex = /^[a-zA-Z0-9.\-_$@*!]{3,30}$/;
        var regPass = /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[#?!@$%^&*\-_]).{8,}$/;
        return ((this.state.username.length > 0 && regex.test(this.state.username))&& (this.state.password.length > 0 &&regPass.test(this.state.password)));
     }
    render()
    {
        
        return(
            <div id="login">
        <h3 className="text-center text-white pt-5">Login form</h3>
        <div className="container">
            <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column" className="col-md-6">
                    <div id="login-box" className="col-md-12" >
                        <form id="login-form" className="form" onSubmit={this.submitHandler}>
                            <h3 className="text-center text-info">Login</h3>
                            <div className="form-group">
                                <label className="text-info">Username:</label>
                                <input type="text" name="username" id="username" className="form-control" value={this.state.username} onChange={this.onUsernameChange}/>
                            </div>
                            <div className="form-group">
                                <label className="text-info">Password:</label>
                                <input type="password" name="password" id="password" className="form-control" value={this.state.password} onChange={this.onPasswordChange}/>
                            </div>
                            <div className="form-group">
                                <label className="text-info"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox"/></span></label><br></br>
                                <input type="submit" name="submit" className="btn btn-info btn-md" value="submit" disabled={!this.validateForm()}/>
                            </div>
                            <div id="register-link" className="text-right">
                                <a href="#" className="text-info">Register here</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
        );
    }
}

export default withRouter(LoginComponent);
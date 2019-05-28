import React,{Component} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
class SignUpComponent extends Component{

    state={
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        gender:'',
        city:'',
        country:''
    }

    onRegister=(event)=>{
        console.log(this.state);
        const userInfo={
            firstname:this.state.firstname,
            lastname:this.state.lastname,
            email:this.state.email,
            password:this.state.password,
            gender:this.state.gender,
            city:this.state.city,
            country:this.state.country
        };
        console.log(userInfo);
        axios.post('https://my-app-db-c3955.firebaseio.com/userInfo.json',userInfo).then(response=>{
            console.log(response);
        });
        event.preventDefault();
        this.props.history.replace('login');
    };

    onFirstnameChange = event => {
        this.setState({ firstname: event.target.value });
      };

    onLastNameChange= event=>{
        this.setState({lastname:event.target.value});
    };

    onEmailChange=event=>{
        this.setState({email:event.target.value});
    };

    onPassWordChange=event=>{
        this.setState({password:event.target.value});
    };

    onGenderChange=event=>{
        this.setState({gender:event.target.value});
    };

    onCityChange=event=>{
        this.setState({city:event.target.value});
    }

    onCountryChange=event=>{
        this.setState({country:event.target.value});
    }

    render()
    {
        return(<div className="container">
        <br></br> 
         <p className="text-center">More bootstrap 4 components on <a href="http://bootstrap-ecommerce.com/"> Bootstrap-ecommerce.com</a></p>
        <hr></hr>
        
        
        <div className="row justify-content-center">
        <div className="col-md-6">
        <div className="card">
        <header className="card-header">
            <a href="" className="float-right btn btn-outline-primary mt-1">Log in</a>
            <h4 className="card-title mt-2">Sign up</h4>
        </header>
        <article className="card-body">
        <form onSubmit={this.onRegister}>
            <div className="form-row">
                <div className="col form-group">
                    <label>First name </label>   
                      <input type="text" className="form-control" placeholder="" value={this.state.firstname} onChange={this.onFirstnameChange}/>
                </div>
                <div className="col form-group">
                    <label>Last name</label>
                      <input type="text" className="form-control" placeholder=" " value={this.state.lastname} onChange={this.onLastNameChange}/>
                </div> 
            </div> 
            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="" value={this.state.email} onChange={this.onEmailChange}/>
                <small className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div> 
            <div className="form-group">
                    <label className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="gender" checked={this.state.gender ==='Male'} value={this.state.gender} onChange={this.onGenderChange}/>
                  <span className="form-check-label"> Male </span>
                </label>
                <label className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="gender" checked={this.state.gender ==='FeMale'} value={this.state.gender} onChange={this.onGenderChange}/>
                  <span className="form-check-label"> Female</span>
                </label>
            </div> 
            <div className="form-row">
                <div className="form-group col-md-6">
                  <label>City</label>
                  <input type="text" className="form-control" value={this.state.city} onChange={this.onCityChange}/>
                </div> 
                                <div className="form-group col-md-6">
                  <label>Country</label>
                  <select id="inputState" className="form-control" value={this.state.country} onChange={this.onCountryChange}>
                    <option> Choose...</option>
                      <option value="Uzbekistan">Uzbekistan</option>
                      <option value="Russia">Russia</option>
                      <option value="United States">United States</option>
                      <option value="India">India</option>
                      <option value="Afghanistan">Afganistan</option>
                  </select>
                </div> 
            </div> 
            <div className="form-group">
                <label>Create password</label>
                <input className="form-control" type="password" value={this.state.password} onChange={this.onPassWordChange}/>
            </div>   
            <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block"> Register  </button>
            </div>       
            <small className="text-muted">By clicking the 'Sign Up' button, you confirm that you accept our <br></br> Terms of use and Privacy Policy.</small>                                          
        </form>
        </article> 
                <div className="border-top card-body text-center">Have an account? <a href="">Log In</a></div>
        </div> 
        </div> 
        
        </div> 
        
        
        </div> 
        
        );
    }
}
export default withRouter(SignUpComponent);
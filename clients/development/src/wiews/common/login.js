import React from 'react';
import {Redirect} from "react-router-dom"
import axios from "axios";
class Login extends React.Component{
  constructor(props){
    super(props);
    this.state={
      form:{
        email:"",
        password: ""
      },
      error:""
    }
  }

  hendleChenge(e, type){
    var _form = this.state.form;
    _form[type]= e.target.value;
    this.setState({form:_form});

  }

   LoginHandler(e){
    e.preventDefault();
    let _form=this.state.form;
    axios({
      method:"POST",
      url:"//localhost:8000/api/login",
       data:_form
    })
    .then(res=>{
       localStorage.setItem("_id", res.data._id);
       localStorage.setItem("email", res.data.email);
       localStorage.setItem("username", res.data.username);
       localStorage.setItem("role", res.data.role);
       localStorage.setItem("firs_name", res.data.firs_name);
       localStorage.setItem("last_name", res.data.last_name);
       console.log(res.data);
    }).catch(err=>{

      if(err.response.status == 401){
        this.setState({
          error:"ne verni login i parol"
        }
        )
      }
      console.log(err.response.data);
    })
  }



  render(){
    if(this.state.toRegisterPage == true){
      return <Redirect to="/register"/>
    }
    
    return(
      <div>
            <div>Login page  </div>
            <input value ={this.state.form.email} onChange={e=>this.hendleChenge(e, "email")}/>
            <input value ={this.state.form.password} onChange={e=>this.hendleChenge(e, "password")}/>
             <span> {this.state.error}</span>
            <div class ="btn btn-link" onClick={e=>this.setState({toRegisterPage:true})}>register </div>
            <div class ="btn btn-link" onClick = {e=>this.LoginHandler(e)} >login </div>
      </div>
    )
  }
}
export default Login;

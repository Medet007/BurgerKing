import React from "react";
import axios from "axios";
import {Redirect} from "react-router-dom"
import {FormGroup, Row, Col} from "reactstrap";
class RegistrationPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      toLoginPage:false,
            form:{
        email:"",
        username:"",
        firs_name:"",
        last_name:"",
        password:"",
        address:""
      }
    }
  }
    handleChange(e, type){
      var _form = this.state.form;
      _form[type]= e.target.value;
      this.setState({form:_form});
    }

    RegisterHandler(e){
      e.preventDefault();
      let _form=this.state.form;
      axios({
        method:"POST",
        url:"//localhost:8000/api/register",
         data:_form
      })
      .then(res=>{
         this.setState({toLoginPage:true})
      }).catch(err=>{
        console.log(err);
      })
    }

  render(){
    if(this.state.toLoginPage == true){
      return <Redirect to="/login"/>
    }
    return(
      <div>
           <Row>
              <Col sm = {{size:4, offset:4}}>
                  <FormGroup>
                       <input value={this.state.form.email}     placeholder = "email"     onChange={e=>this.handleChange(e,"email")}/>
                  </FormGroup>
                  <FormGroup>
                       <input value={this.state.form.username}  placeholder = "username"  onChange={e=>this.handleChange(e,"username")}/>
                  </FormGroup>
                  <FormGroup>
                       <input value={this.state.form.firs_name} placeholder = "firs_name" onChange={e=>this.handleChange(e,"firs_name")}/>
                  </FormGroup>
                  <FormGroup>
                       <input value={this.state.form.last_name} placeholder = "last_name" onChange={e=>this.handleChange(e,"last_name")}/>
                  </FormGroup>
                  <FormGroup>
                       <input value={this.state.form.password}  placeholder = "password"  onChange={e=>this.handleChange(e,"password")}/>
                  </FormGroup>
                  <FormGroup>
                       <input value={this.state.form.address}   placeholder = "address"   onChange={e=>this.handleChange(e,"address")}/>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                     <Col>
                     <button className = "btn btn-warning" onClick = {e=>this.setState({toLoginPage:true})}>у вас есть созданный акаунт</button>
                     </Col>
                     <Col>
                     <button className = "btn btn-primary" onClick = {e=>this.RegisterHandler(e)}>register</button>
                     </Col>
                     </Row>
                    </FormGroup>
               </Col>
            </Row>
      </div>
    )
  }
}

export default RegistrationPage;

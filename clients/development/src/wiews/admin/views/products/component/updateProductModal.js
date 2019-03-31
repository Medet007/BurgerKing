import React from "react";
import {Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import axios from "axios";

class UpdateModal extends React.Component{
  constructor(props){
    super(props);
    this.state={
      form:{
        _id:"",
        name:"",
        price:"",
        amount:"",
        description:""
      }
    }

  }
  hendleChenge(e, type){
    var _form = this.state.form;
    _form[type]= e.target.value;
    this.setState({form:_form});
  }

  updateProduct(){
    let _form = this.state.form;
    axios({
      method:"POST",
      url:"http://localhost:8000/api/update_product",
       data:this.state.form
    })
    .then(res=>{
      this.props.toggle();
    }).catch(err=>{
      console.log(err);
    })
  }


  sayHello(el){
    this.setState({form:el})
  }

  updateProduct(){
    let _form = this.state.form;
    axios({
      method:"POST",
      url:"http://localhost:8000/api/update_product",
       data:_form
    })
    .then(res=>{
      this.props.toggle();
    }).catch(err=>{
      console.log(err);
    })
  }
    render(){
      return(
         <div>
            <Modal isOpen={this.props.show} toggle={e=>this.props.toggle()}>
                  <ModalHeader toggle={e=>this.props.toggle()}>redaction</ModalHeader>
                  <ModalBody>
                      {this.state.form ? (
                        <Form>
                             <FormGroup>
                                  <Label>produkt name </Label>
                                    <Input value ={this.state.form.name} onChange={e=>this.hendleChenge(e,"name")}/>
                             </FormGroup>
                             <FormGroup>
                                  <Label> product amount</Label>
                                    <Input value ={this.state.form.amount} onChange={e=>this.hendleChenge(e,"amount")} type="number" min="0.1"/>
                             </FormGroup>
                             <FormGroup>
                                  <Label> product description </Label>
                                    <Input value ={this.state.form.description} onChange={e=>this.hendleChenge(e,"description")} type="textarea"/>
                             </FormGroup>
                             <FormGroup>
                                  <Label>sozdani price </Label>
                                    <Input value ={this.state.form.price} onChange={e=>this.hendleChenge(e,"price")} type="number"/>
                             </FormGroup>

                        </Form>
                      ):null}
                  </ModalBody>
                  <ModalHeader>
                     <Button color = "secondary" onClick={e=>this.props.toggle()}>otmena </Button>
                     <Button color = "primary" onClick={e=>this.updateProduct(e)}>obnavit</Button>
                  </ModalHeader>
            </Modal>
         </div>

      )
    }

}
export default UpdateModal;

import React from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import axios from 'axios';
class NewProductModal extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      form:{
        name:"",
        amount:"",
        description:"",
        price:""
      }

    }
  }
  hendleChenge(e, type){
    var _form = this.state.form;
    _form[type]= e.target.value;
    this.setState({form:_form});

  }

createProduct(){
  let _form = this.state.form;
  axios({
    method:"POST",
    url:"http://localhost:8000/api/create_product",
     data:_form
  })
  .then(res=>{
    this.props.toggle();
    this.props.getList(); 
  }).catch(err=>{
    console.log(err);
  })
}


  render(){
    return(
       <div>
          <Modal isOpen={this.props.show} toggle={e=>this.props.toggle()}>
                <ModalHeader toggle={e=>this.props.toggle()}>sozdania product</ModalHeader>
                <ModalBody>
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
                                  <Input value ={this.state.form.name.price} onChange={e=>this.hendleChenge(e,"price")} type="number"/>
                           </FormGroup>

                      </Form>
                </ModalBody>
                <ModalHeader>
                   <Button color = "secondary" onClick={e=>this.props.toggle()}>otmena </Button>
                   <Button color = "primary" onClick={e=>this.createProduct(e)}> cozdat</Button>
                </ModalHeader>
          </Modal>
       </div>

    )
  }
}
export default NewProductModal;

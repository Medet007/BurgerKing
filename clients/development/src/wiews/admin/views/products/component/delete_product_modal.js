import React from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import axios from 'axios';
class RemoveModal extends React.Component{
  constructor(props){
    super(props);
    this.state={
      show:false,
      removeProduct:{}
    }
  }
  toggleRemoveModal(el){
    let isOpen = this.state.show;
    isOpen=!isOpen;
    this.setState({show:isOpen,removeProduct:el});
  }

  removeProductFunction(){
    axios({
      method:"POST",
      url:"http://localhost:8000/api/delete_product",
       data:this.state.removeProduct
    })
    .then(res=>{
      this.props.getList();
      this.setState({show:false});
    }).catch(err=>{
      console.log(err);
    })
  }


  render(){
    return(
                 <div>
                        <Modal  isOpen={this.state.show}  toggle={this.toggleRemoveModal.bind(this)} >
                                 <ModalHeader> udalenia produkta </ModalHeader>
                                 <ModalBody>vi deistvitelno hotite udalit {this.state.removeProduct.name}</ModalBody>
                                 <ModalFooter>
                                         <div > <button class="btn btn-secondary" onClick={this.toggleRemoveModal.bind(this)}>net </button></div>
                                         <div> <button class="btn btn-secondary" onClick={this.removeProductFunction.bind(this)}> da</button> </div>
                                 </ModalFooter>
                        </Modal>

                  </div>

    )
  }
}
export default RemoveModal;

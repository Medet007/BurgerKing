import React from 'react';
import NewProductModal from "./component/create_new_product_model";
import UpdateModal from './component/updateProductModal';
import axios from "axios";
import {Table} from 'reactstrap';
import RemoveModal from './component/delete_product_modal';
class ProductsPage extends React.Component{
  constructor (props){
    super(props);
     this.state={
       showCreateModal:false,
       products:[],
       toEdit:{},
       shoUpdateModal:false
          }
  }

  toggleCreateModal(){
    let isOpen = this.state.showCreateModal;
    isOpen=!isOpen;
    this.setState({showCreateModal:isOpen});
  }
  toggleUpdateModal(el){
    let isOpen = this.state.shoUpdateModal;
    isOpen=!isOpen;
    this.refs.update.sayHello(el);
    this.setState({shoUpdateModal:isOpen});
  }
  getList(){
    axios({
      method:"GET",
      url:"http://localhost:8000/api/all_products"
    })
    .then(res=>{
      this.setState({products:res.data})
    })
    .catch(err=>{
    })


    console.log("ia vstavilsia")
  }


  componentDidMount(){
    this.getList();
  }


  render(){
    return(
      <div>
         <button className ="btn btn-success btn-lg btn-block" onClick={e=>this.toggleCreateModal()}> sozdat produkt</button>
        <NewProductModal show={this.state.showCreateModal} toggle={this.toggleCreateModal.bind(this)} getList={this.getList.bind(this)}/>
          <UpdateModal ref="update"  show={this.state.shoUpdateModal} toggle={this.toggleUpdateModal.bind(this)}/>
          <RemoveModal ref="deleteModal" getList={this.getList.bind(this)}/>
         <div>
             <h1 className="text-center">created products</h1>
           <Table className ="table table-bordered table-sm">
               <thead>
                  <tr>

                     <th> name</th>
                     <th>description </th>
                     <th> amount</th>
                     <th> price</th>
                     <th> change information </th>

                  </tr>
               </thead>
               <tbody>
            {this.state.products.map(el=>{
              if(this.state.produktToUpdete!==el.name){  return (

                    <tr>

                           <td>{el.name}</td>
                           <td>{el.description}</td>
                           <td> {el.amount}</td>
                           <td> {el.price}</td>
                           <td>
                                 <button type="Button" class="btn btn-outline-danger mr-5" onClick={e=>this.refs.deleteModal.toggleRemoveModal(el)}>delete </button>
                               <button type="Button" class="btn btn-outline-primary"
                               onClick={e=>{this.setState({toEdit:el}); this.toggleUpdateModal(el)}}> edit</button></td>
                    </tr>
                                  )
                                }


            })}
            </tbody>
            </Table>
         </div>

      </div>
    )
  }
}
export default ProductsPage;

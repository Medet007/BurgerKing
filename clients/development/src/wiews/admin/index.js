import React from 'react';
import NovegetioBar from  "./components/novegetionBar";
import BuregersPage from "./views/burger";
import OredersPage from "./views/orders";
import ProductsPage from "./views/products";
import UsersPage from "./views/users";
class Admin extends React.Component{
  constructor(props){
    super(props);
    this.state={
      shoPage:"products"
    }
  }

  shangeShoPage(pageName) {
    this.setState({shoPage:pageName});
  }
  render(){
    return(
      <div>
        <NovegetioBar shangeShoPage={this.shangeShoPage.bind(this)}/>
        {this.state.shoPage=="products"? <ProductsPage/>:null}
        {this.state.shoPage=="users"? <UsersPage/>:null}
        {this.state.shoPage=="orders"? <OredersPage/>:null}
        {this.state.shoPage=="burger"? <BuregersPage/>:null}
        </div>
    )
  }
}
export default Admin;

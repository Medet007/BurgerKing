import React from 'react';
import NavigationBar from "./components/novegetionBar";
import ManuPage from "./wiews/menu";
import MoiZakazPage from "./wiews/moi_zokazi";
import OtziviPage from "./wiews/otzivi";
import SoberiPage from "./wiews/sobery_sam";
class UsersPage extends React.Component{
  constructor(props){
    super(props);
    this.state={
       shoMenu:"menu",
    }
  }

  shangeShoPage (el){
    this.setState({
    shoMenu:el
    })
  }
  render () {
    return(
       <div>
       <NavigationBar shangePage={this.shangeShoPage.bind(this)}/>
       {this.state.shoMenu=="menu"? <ManuPage/>:null}
       {this.state.shoMenu=="otzivi"? <OtziviPage/>:null}
       {this.state.shoMenu=="sobery_sam"? <SoberiPage/>:null}
       {this.state.shoMenu=="moi_zokazi"? <MoiZakazPage/>:null}
       </div>
    )
  }
}
export default UsersPage;

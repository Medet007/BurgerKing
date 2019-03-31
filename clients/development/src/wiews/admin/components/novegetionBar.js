import React from 'react';
import {Navbar, Nav,NavItem, NavLink} from 'reactstrap';

class NovegetioBar extends React.Component{
constructor(props){
  super(props);
  this.state={

  }
}
render(){
  return(
         <Navbar color= "primary">
             <div className="nav nav-tabs">
               <Nav>
                   <NavItem>
                         <NavLink onClick={e=>this.props.shangeShoPage("products")}>products </NavLink>
                   </NavItem>
                     <NavItem>
                         <NavLink  onClick={e=>this.props.shangeShoPage("burger")}>burger </NavLink>
                     </NavItem>
                     <NavItem>
                          <NavLink onClick={e=>this.props.shangeShoPage("users")}>users</NavLink>
                     </NavItem>
                     <NavItem>
                          <NavLink onClick={e=>this.props.shangeShoPage("orders")}>orders</NavLink>
                     </NavItem>
                </Nav>
                </div>
                <div className="nav nav-tabs">
                <Nav>
                    <NavItem>
                         <NavLink>Log Out </NavLink>
                    </NavItem>
                </Nav>
                </div>
         </Navbar>
       )
}
}
export default NovegetioBar;

import React from 'react';
import {Navbar, Nav, NavItem, NavLink} from 'reactstrap';
class NavigationBar extends React.Component{
constructor(props){
  super(props);
  this.state={

  }
}


  render(){
     return(

           <Navbar>
                       <Nav>
                           <NavItem>
                                <NavLink onClick={e=>this.props.shangePage("menu")}>Menu</NavLink>
                           </NavItem>
                       </Nav>
                       <Nav>
                           <NavItem>
                                <NavLink onClick={e=>this.props.shangePage("sobery_sam")}>soberi sam</NavLink>
                           </NavItem>
                       </Nav>
                       <Nav>
                             <NavItem>
                                  <NavLink onClick={e=>this.props.shangePage("moi_zokazi")}>Moi zakazi</NavLink>
                             </NavItem>
                       </Nav>
                       <Nav>
                             <NavItem>
                                  <NavLink onClick={e=>this.props.shangePage("otzivi")}>otzivi</NavLink>
                             </NavItem>
                       </Nav>
                       <Nav>
                             <NavItem>
                                  <NavLink > logout</NavLink>
                             </NavItem>
                       </Nav>

            </Navbar>

     )
  }
}
export default NavigationBar;

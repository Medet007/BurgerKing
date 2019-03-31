import React from 'react';
import axios from 'axios';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';
class ManuPage extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      burgers:[]
    }
  }
 getList(){
   axios({
     method:"GET",
     url:"http://localhost:8000/api/all_products",

   })
   .then(res=>{
     var burgers = res.data;
     burgers.forEach(e=>e.selecteAmount=1)
    this.setState({burgers:res.data})
   }).catch(err=>{
     console.log(err. data);
   })
 }

 componentDidMount(){
   this.getList()
 }
 changeHandler(el, e) {
   var  _burgers =this.state.burgers;

   _burgers.forEach(burger=>{
     if(el._id == burger._id) {
       if(e.target.value > burger.amount)burger.selecteAmount= burger.amount
       else burger.selecteAmount=e.target.value
     }
   })

    this.setState({burger:_burgers});
 }
  render(){
    return(
          <div>
               <h1> </h1>
              <div class = "row">
                  {
                    this.state.burgers.map(el=>{
                      return (
                        <div class="col-3">
                        <Card>
                                <CardHeader> {el.name}</CardHeader>
                                <CardBody>
                                  <CardText>{el.description} </CardText>
                                    <CardText> sena:{el.price}{''}tenge</CardText>
                                  <CardText> <input onChange= {e=>this.changeHandler(el, e)} type= "number" min="1" value = {el.selecteAmount} max={el.amount}/>kolishestvo:{el.amount}</CardText>

                                  <CardText> kolishestvo</CardText>
                                </CardBody>
                                <CardFooter>
                                     <button className="btn btn-primary btn btn-block">kupit </button>
                                 </CardFooter>
                        </Card>
                        </div>
                      )
                    })
                  }
              </div>
          </div>
        )
  }
}
export default ManuPage;

import React,{Component} from 'react';

class Counter extends Component{
  
   render(){
      
        let classes="badge m-2 p-2 badge-";
        classes+=(this.state.value===0) ? "warning": "primary";
        return (
        <div>
        
          <span className={classes}>{this.state.value}</span>
          <button onClick={this.Increment}className="btn btn-secondary">Increment</button>
          <button onClick={()=>this.props.onDelete(this.props.counter.id)}className="btn-delete btn-danger m-2">Delete</button>
        </div>
        );
        } 
        Increment=()=>{
            console.log(this.state.value)
            this.setState({value:this.state.value+1})
     
        }
      
       
    
   
}


export default Counter;
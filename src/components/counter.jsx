import React,{Component} from 'react';

class Counter extends Component{
  
   render(){
      
        let classes="badge m-2 p-2 badge-";
        classes+=(this.props.counter.value===0) ? "warning": "primary";
        return (
        <div>
        
          <span className={classes}>{this.props.counter.value}</span>
          <button onClick={()=>this.props.onIncrement(this.props.counter)}className="btn btn-secondary">Increment</button>
          <button onClick={()=>this.props.onDelete(this.props.counter.id)}className="btn-delete btn-danger m-2">Delete</button>
        </div>
        );
        } 
        
      
       
    
   
}


export default Counter;
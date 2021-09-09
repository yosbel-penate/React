import React, {Component} from 'react'
import './SingleTask.css'

class SingleTask extends Component{
    StyleComplete(){
        return{
            fontSize:'20x',
            color: this.props.task.done? 'black':'red'
        }
    }
    render(){
        const {task}=this.props;
        return <div style={this.StyleComplete()}>
            {task.id}-
            {task.title}-
            {task.description} 
            <input type='checkbox'/>
            <button style={btnDelete}>x</button>
        </div>
    }
}

const btnDelete={
    border: 'none',
    background: 'red',
    color:'#fff',
    borderRadius:'50%'
}

export default SingleTask;
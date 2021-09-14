import React, {Component} from 'react'
import './SingleTask.css'
import PropTypes from 'prop-types'

class SingleTask extends Component{
    StyleComplete(){
        return{
            fontSize:'20x',
            color: this.props.task.done? 'black':'red',
            textDecoration: this.props.task.done? 'line-through':'none'
        }
    }
    render(){
        const {task}=this.props;
        return <div style={this.StyleComplete()}>
            {task.id}-
            {task.title}-
            {task.description} 
            <input type='checkbox' onChange={this.props.checkDone.bind(this, task.id)}/>
            <button style={btnDelete} onClick={this.props.deleteTask.bind(this, task.id)}>x</button>
        </div>
    }
}

SingleTask.propTypes={
    task:PropTypes.object.isRequired
}

const btnDelete={
    border: 'none',
    background: 'red',
    color:'#fff',
    borderRadius:'50%'
}

export default SingleTask;
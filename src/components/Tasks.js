import {Component} from "react";
import SimpleTask from './SingleTask'
import PropTypes from 'prop-types'
class Task extends Component{
    render () {return this.props.tasks.map(e=> <
        SimpleTask
        key={e.id}
        task={e}
        deleteTask={this.props.deleteTask}
        checkDone={this.props.checkDone}
    />)}
}

Task.protoType={
    tasks:PropTypes.array.isRequired
}

export default Task
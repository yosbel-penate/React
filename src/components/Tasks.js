import react, {Component} from "react";
import SimpleTask from './SingleTask'

class Task extends Component{
    render () {return this.props.tasks.map(e=> <SimpleTask key={e.id} task={e}/>)}
}

export default Task
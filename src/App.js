import React, {Component} from 'react';
import './App.css';
import task from './samples/task.json';

//Component
import Task from './components/Tasks';
import TaskForm from './components/TaskForm';

class App extends Component{
  state={
    tasks:task
  }
  addTask=(title, description)=>{
    const newTask={
      id: this.state.tasks.length,
      title:title,
      description:description
    }
    this.setState({
      tasks:[...this.state.tasks, newTask]
    })
    console.log(newTask)
  }

deleteTask = id =>{
  const newTasks = this.state.tasks.filter(task => task.id !== id);
  this.setState({tasks:newTasks})
}

checkDone= id =>{
    const newTasks = this.state.tasks.map(task=>{
      if (task.id===id) {
        task.done=!task.done
      }
      return task;
    })
    this.setState({tasks:newTasks})
}

  render(){
    return(
        <div>
            <TaskForm addTask={this.addTask}/>
            <Task
              tasks={this.state.tasks} 
              deleteTask={this.deleteTask}
              checkDone={this.checkDone}
              />
        </div>
      )
  }
}

export default App;

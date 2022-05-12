import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { addTask, removeTask } from '../redux/actions';

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      newTask: '',
      selectedTask: '',
    }
  }

  handleChange = ({target}) => {
    this.setState({newTask: target.value})
  }

  handleSelect = ({target}) => {
    document.querySelector('.selected')?.classList.remove('selected');
    target.classList.add('selected');
    
    this.setState({selectedTask: target.innerText});
  }

  handleAddTask = () => {
    const {addNewTask} = this.props;
    const {newTask} = this.state;
    if (!newTask) return;
    addNewTask(newTask);
  }

  handleDeleteTask = () => {
    const {removeSelectedTask} = this.props;
    const {selectedTask} = this.state;
    if (!selectedTask) return;
    removeSelectedTask(selectedTask)
  }

  render() {
    const {userName, tasks} = this.props;
    return (
      <div>
        <Header />
        <h1>To-do List</h1>
        <p>Olá, {userName}!</p>
        <input type="text" placeholder="Nova tarefa" onChange={this.handleChange}/>
        <button type="button" onClick={this.handleAddTask}>Add</button>
        <ul>
          {tasks.map((item) => (
            <li key={item} onClick={this.handleSelect}>{item}</li>
          ))}
        </ul>
        <button type="button" onClick={this.handleDeleteTask}>Delete</button>
      </div>
    )
  }
}

const mapStateToProps = (globalState) => {
  return {
    userName: globalState.user.name,
    tasks: globalState.tasks.savedTasks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewTask: (task) => dispatch(addTask(task)),
    removeSelectedTask: (task) => dispatch(removeTask(task))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
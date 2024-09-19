import React, {useState} from 'react';
import AddTask from './components/AddTask';
import './index.css';
import Task from './components/Task';


function App() {
  const [toDoList, setToDoList] = useState([]);
  const addTask = (taskName) => {
    const newTask = { taskName, checked: false};
    setToDoList([...toDoList, newTask])
  };
  function deleteTask(deleteTaskName) {
    setToDoList(toDoList.filter(task => task.taskName !== deleteTaskName))
  }
  function toggleCheck (taskName) {
    setToDoList((prevToDoList) => 
    prevToDoList.map((task) => task.taskName === taskName ? { ...task, checked: !task.checked} :task, 
    ),
    );
  }


  return <>
  <div className='container'>
    <h1>To Do List</h1>

    <AddTask addTask={addTask}/>
    <div className="toDoList">
      <span>ЗАДАНИЯ</span>
      <ul className="list-items">
        {toDoList.map((task, key)  => (
        <Task task={task} key = {key} deleteTask = {deleteTask} toggleCheck = {toggleCheck}/>
        ))}
      </ul>
      {toDoList.length ===0? <p className='notify'>Все дела сделаны!</p> : null}
    </div>
  </div>
  </>;
}

export default App;

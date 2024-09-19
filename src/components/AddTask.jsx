import React, {useState} from 'react';

const AddTask = ({addTask}) => {
    const [task, setTask] = useState('');
    function handleInput(e) {
        setTask(e.target.value); 
    }
    function handleAddTask (e) {
      e.preventDefault();
      if (task.trim()==='') return; 
      addTask(task.toUpperCase());
      setTask('');
    }
  return (
    <form className='inputField' onSubmit={handleAddTask}>
        <input type="text" value={task} placeholder='Добавить задание...' onChange={handleInput}/>
        <button>+</button>
    </form>
  );
};

export default AddTask;
import './styles.css';
import {useState} from 'react';

export default function App() {
  const [tasks, setTasks] = useState(['Walk dog', 'water plants', 'wash dishes']);
  const [newTask, setNewTask] = useState('');

  function handleInputChange (e) {
    setNewTask(e.target.value);
  }

  function handleSubmit() {
    if(newTask) {
      const updatedTasks = [...tasks, newTask]
      setTasks(updatedTasks)
      setNewTask('')
    }
  }

  function handleDelete (index) {
    const filteredTasks = tasks.filter((_, taskIndex) => {
      return taskIndex !== index;
    });
    setTasks(filteredTasks);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input 
          type="text" 
          placeholder="Add your task"
          value={newTask}
          onChange={handleInputChange} />
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
      <ul>
      {tasks.map((task, index) => {
        return(
          <li>
            <span>{task}</span>
            <button onClick={() => handleDelete(index)}>
              Delete {index}
            </button>
          </li>
        )
      })}
      </ul>
    </div>
  );
}

import React, { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === '') {
      return;
    }
    setTasks((prevTasks) => [...prevTasks, { task, status: 'Incomplete' }]);
    setTask('');
  };

  const handleUpdateStatus = (index) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index].status = 'Completed';
      return updatedTasks;
    });
  };

  const handleRemoveTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <div className="container">
        <h1>Todo App</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={task} onChange={handleChange} placeholder="Enter task" />
          <button type="submit">Add Task</button>
        </form>
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index}>
              <div className="task-details">
                <div className="task-heading">{task.task}</div>
                <div className="task-status">Status: {task.status}</div>
              </div>
              <div className="task-actions">
                <button className="update-button" onClick={() => handleUpdateStatus(index)}>Update Status</button>
                <button className="remove-button" onClick={() => handleRemoveTask(index)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react'; 
import './App.css';
import './styles/global.css';
import clockImage from './resources/images/clock.jpg';
import checkboxImage from './resources/images/checkbox.jpg';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import TaskDetails from './components/TaskDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setTheme } from './redux/reducers/userPreferencesSlice';
import { toggleModal } from './redux/reducers/uiStateSlice';
import { updateTask } from './redux/actions/tasksActions';
import Navbar from './components/Navbar';

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  // Save tasks to localStorage when state changes

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (id, updatedTask) => {
    setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <Router>
      <Navbar />
      <div className="hero-section">
        <h1>Welcome to Efficio</h1>
        <p>Boost your productivity and achieve your goals with ease</p>
      </div>
      <div className="features-section">
        <div className="feature"> 
          <img src="src/resources/images/clock.jpg" alt="Time Management" />
          <h3>Manage Your Time Effectively</h3>
          <p>Plan, prioritize, and track tasks to stay on top of your busy schedule</p>
        </div>
        <div className="feature">
          <img src={checkboxImage} alt="Task Completion" />
          <h3>Achieve Your Goals</h3>
          <p>Check off tasks as you complete them and celebrate progress</p>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<TaskList tasks={tasks} deleteTask={deleteTask} />} />
        <Route path="/task/:id" element={<TaskDetails tasks={tasks} updateTask={updateTask} />} />
        <Route path="/add-task" element={<AddTask addTask={addTask} />} />
      </Routes>
    </Router>
  );
};

export default App;

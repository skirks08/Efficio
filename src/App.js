import React, { useEffect, useState } from 'react'; 
import './App.css';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import TaskDetails from './components/TaskDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setTheme } from './redux/reducers/userPreferencesSlice';
import { toggleModal } from './redux/reducers/uiStateSlice';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskList tasks={tasks} />} />
        <Route path="/task/:id" element={<TaskDetails tasks={tasks} updateTask={updateTask} />} />
        <Route path="/add-task" element={<AddTask addTask={addTask} />} />
      </Routes>
    </Router>
  );
};

export default App;

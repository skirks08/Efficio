//import logo from './logo.svg';
import React, { useEffect } from 'react'; 
import './App.css';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import TaskDetails from './components/TaskDetails';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, toggleTask, deleteTask } from './store/tasksSlice';
import { setTheme } from './store/userPreferencesSlice';
import { toggleModal } from './store/uiStateSlice';
import { AddTask as addTask } from './store/tasksSlice'; // action import

function App() {
  const dispatch = useDispatch();

  // Get Redux state for tasks, user preference, ui state

  const tasks = useSelector(state => state.tasks);
  const theme = useSelector(state => state.userPreferences.theme);
  const isModalOpen = useSelector(state => state.uiState.modalOpen);

  // Effect to fetch tasks when component mounts

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  // Handle theme change logic

  useEffect(() => {
    document.body.className = theme; // Apply theme class to body
  }, [theme]);

  // Handlers for actions

  const handleToggleTask = (id) => {
    dispatch(toggleTask(id));
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleAddTask = (task) => {
    dispatch({ type: 'tasks/AddTask', payload: task });
  };

  const handleSaveTask = (updatedTask) => {
    dispatch({ type: 'tasks/updatedTask', payload: updatedTask });
  };  

  const handleCloseModal = () => {
    dispatch(toggleModal());
  };

  const handleChangeTheme = (newTheme) => {
    dispatch(setTheme(newTheme));
  };
  
  return (
    <div className={`App ${theme}`}>
      <header className="App-header">
        <h1>Task Manager</h1>
        <button onClick={() => handleChangeTheme(theme === 'light' ? 'dark' : 'light')}>Toggle Theme</button>
      </header>

      <main>
        <TaskList 
          tasks={tasks}
          onToggle={handleToggleTask}
          onDelete={handleDeleteTask}
        />
        <AddTask onAdd={handleAddTask} />

        {isModalOpen && (
          <TaskDetails 
            task={tasks.find(task => task.id === 1)}
            onSave={handleSaveTask}
            onClose={handleCloseModal}
          />
        )}
      </main>
    </div>
  );
};

export default App;

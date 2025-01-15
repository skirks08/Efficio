import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks, deleteTask, updateTask } from '../redux/actions/tasksActions';
import Loading from './Loading';
import Error from './Error';
import { Link } from 'react-router-dom';
import './TaskList.css';
import tasksReducer from '../redux/reducers/tasksReducer';

const TaskList = ({ tasks, deleteTask, updateTask }) => {
    const [filter, setFilter] = useState('All');

    const filteredTasks = tasks.filter((task) => 
        filter === 'All' ? true : task.category === filter
    );

    const toggleComplete = (id, completed) => {
        const updatedTask = tasks.find((task) => task.id === id);
        if (updatedTask) {
            updateTask(id, { ...updatedTask, completed: !completed });
        }
    };
    
    const getPriorityClass = (priority) => {
        switch (priority) {
            case 'High':
                return 'priority-high';
            case 'Medium':
                return 'priority-medium';
            case 'Low':
                return 'priority-low';
            default:
                return '';
        }
    };

    return (
        <div>
            <h1>Task List</h1>
            <div className="filter-section">
                <label>Filter by Category:</label>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                    <option value="Urgent">Urgent</option>
                    <option value="Others">Others</option>
                </select>
            </div>
            <ul>
                {tasks.filter((task) => !task.completed).map((task) => (
                    <li key={task.id} className={getPriorityClass(task.priority)}>
                        <input 
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleComplete(task.id, task.completed)}
                        />
                        <Link to={`/task/${task.id}`}>{task.title}</Link>
                        <span className="priority">{task.priority}</span>
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <Link to="/add-task" >Add New Task</Link>
        </div>
    );
};

export default TaskList;
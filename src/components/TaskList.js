import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks, deleteTask, updateTask } from '../redux/actions/tasksActions';
import Loading from './Loading';
import Error from './Error';
import { Link } from 'react-router-dom';
import './TaskList.css';
import tasksReducer from '../redux/reducers/tasksReducer';

const TaskList = ({ tasks, deleteTask }) => {
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
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} className={getPriorityClass(task.priority)}>
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
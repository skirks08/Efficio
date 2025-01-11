import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks, deleteTask, updateTask } from '../redux/actions/tasksActions';
import Loading from './Loading';
import Error from './Error';
import './TaskList.css';

const TaskList = () => {
    const dispatch = useDispatch();
    const { tasks, loading, error } = useSelector((state) => state.tasks);

    // Fetch tasks

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    if (loading) return <Loading />;
    if (error) return <Error message={error} />;

    return (
        <div>
            <h2>Task List</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                       <span>{task.name} - {task.completed ? 'Completed' : 'Pending'}</span>
                       <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
                       <button onClick={() => dispatch(updateTask(task.id, { completed: !task.completed }))}>Toggle Status</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions/tasksActions";
import { useNavigate } from "react-router-dom";
import './AddTask.css';

const AddTask = ({ addTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('Medium');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            id: Date.now(),
            title,
            description,
            priority,
            completed: false,
        };
        addTask(newTask);
        navigate('/');
    };

    return (
        <div>
            <h1>Add Task</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Task Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea 
                    placeholder="Task Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
};

export default AddTask;
import React, { useState } from "react";
import './AddTask.css';

const AddTask = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState('low');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title) {
            setError('Title is required');
            return;
        }

        const newTask = { title, description, dueDate, priority, completed: false };
        onAdd(newTask);
        setTitle('');
        setDescription('');
        setDueDate('');
        setPriority('low');
        setError('');
    };

    return (
      <div className="add-task">
        <h2>Add a New Task</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Task Title"
            />
            <textarea 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Task Description"
            />
            <input 
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
            />
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <button type="submit">Add Task</button>
        </form>
      </div>
    );
};

export default AddTask;
import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './TaskDetails.css';

const TaskDetails = ({ tasks, updateTask }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const task = tasks.find((task) => task.id === parseInt(id));
    const [description, setDescription] = useState(task.description);
    const [priority, setPriority] = useState(task.priority);
    const [category, setCategory] = useState(task.category);

    if (!task) {
        return <p>Task not found!</p>;
    }

    const handleUpdate = () => {
        const updatedTask = { ...task, title: task.title + ' (Updated)', description, category, priority };
        updateTask(task.id, updatedTask);
        navigate('/');
    };

    return (
        <div>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <textarea 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <label>Category:</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
                <option value="Urgent">Urgent</option>
                <option value="Others">Others</option>
            </select>
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <button onClick={handleUpdate}>Update Task</button>
            <button onClick={() => navigate('/')}>Back to List</button>
        </div>
    );
};


export default TaskDetails;
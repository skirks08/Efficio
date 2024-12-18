import React, { useState } from "react";
import './TaskDetails.css';

const TaskDetails = ({ task, onSave, onClose }) => {
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [dueDate, setDueDate] = useState(task.dueDate);
    const [priority, setPriority] = useState(task.priority);

    const handleSave = () => {
        onSave({ ...task, title, description, dueDate, priority });
        onClose(); //Close after saving
    };

    return (
        <div>
            <h2>Task Details</h2>
            <form>
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
                <button type="button" onClick={handleSave}>Save</button>
            </form>
                <button onClick={onClose}>Close</button>
        </div>
    );
};

export default TaskDetails;
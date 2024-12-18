import React from "react";
import './TaskDetails.css';

const TaskDetails = ({ task, onClose }) => {
    <div>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <button onClick={onClose}>Close</button>
    </div>
};

export default TaskDetails;
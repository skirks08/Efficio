import React from "react";
import { useSelector } from "react-redux";
import './TaskDetails.css';

const TaskDetails = ({ taskId }) => {
    // Get task using ID from store

    const task = useSelector((state) => 
        state.tasks.find((task) => task.id === taskId)
    );

    if (!task) return <p>Task not found</p>;

    return (
        <div>
            <h2>Task Details</h2>
            <p>
                <strong>Name:</strong> {task.name}
            </p>
            <p>
                <strong>Description:</strong> {task.description}
            </p>
            <p>
                <strong>Status:</strong> {task.completed ? 'Completed' : 'Pending'}
            </p>
        </div>
    );
};


export default TaskDetails;
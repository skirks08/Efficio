import React from 'react';
import './TaskList.css';

const TaskList = ({ tasks }) => {
    <ul>
        {tasks.map((task) => (
            <li key={task.id}>
                {task.title} - {task.completed ? "Completed" : "Pending"}
            </li>
        ))}
    </ul>
};

export default TaskList;
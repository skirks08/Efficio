import React from "react";
import { Link } from "react-router-dom";

const CompletedTasks = ({ tasks, deleteTask }) => {
    return (
        <div>
            <h1>Completed Tasks</h1>
            <ul>
                {tasks.filter((task) => task.completed).map((task) => (
                    <li key={task.id}>
                        <Link to={`/task/${task.id}`}>{task.title}</Link>
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <Link to="/">Back to Task List</Link>
        </div>
    );
};

export default CompletedTasks;
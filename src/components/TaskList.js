import React, { useState } from 'react';
import './TaskList.css';

const TaskList = ({ tasks, onToggle, onDelete }) => {
    const [filter, setFilter] = useState('all');
    const [sortBy, setSortBy] = useState('dueDate');

    const filteredTasks = tasks.filter((task) => {
        if (filter === 'completed') return task.completed;
        if (filter === 'pending') return !task.completed;
        return 'true'; //ALL filter
    });

    const sortedTasks = filteredTasks.sort((a, b) => {
        if (sortBy === 'dueDate') {
            return new Date(a.dueDate) - new Date(b.dueDate);
        } else if (sortBy === 'priority') {
            return a.priority - b.priority;
        } 
        return 0;
    });

    return (
        <div>
            <div className="filter-sort">
                <select onChange={(e) => setFilter(e.target.value)} value={filter}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="pending">Pending</option>
                </select>
                <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
                    <option value="dueDate">Due Date</option>
                    <option value="priority">Priority</option>
                </select>
            </div>
            <ul>
                {sortedTasks.map((task) => (
                    <li key={task.id}>
                        <span>{task.title}</span>
                        <span>{task.completed ? 'Completed' : 'Pending'}</span>
                        <button onClick={() => onToggle(task.id)}>Toggle</button>
                        <button onClick={() => onDelete(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
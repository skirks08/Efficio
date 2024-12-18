import React from "react";

const AddTask = ({ onAdd }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({ title, completed: false});
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Task Title"
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default AddTask;
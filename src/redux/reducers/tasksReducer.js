const initialState = {
    tasks: [],
    loading: false,
    error: null,
};

const tasksReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_TASKS_SUCCESS':
            return { ...state, tasks: action.payload, loading: false };
        case 'ADD_TASK_SUCCESS':
            return { ...state, tasks: [...state.tasks, action.payload], loading: false };
        case 'UPDATE_TASK_SUCCESS':
            return {
                ...state,
                tasks: state.tasks.map((task) => task.id === action.payload.id ? action.payload : task),
                loading: false,
            };
        case 'DELETE_TASK_SUCCESS':
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload),
                loading: false,
            };
        case 'FETCH_TASKS_FAILURE':
        case 'ADD_TASK_FAILURE':
        case 'UPDATE_TASK_FAILURE':
        case 'DELETE_TASK_FAILURE':
            return { ...state, error: action.error, loading: false };
        default:
            return state;
    }
};

export default tasksReducer;
import { configureStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers';

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(thunk),
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;
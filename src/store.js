import { configureStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './redux/reducers';
import userPreferencesReducer from './redux/userPreferencesSlice';
import uiStateReducer from './redux/uiStateSlice';

const store = configureStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
import mainReducer from './main-reducer';
import { combineReducers, createStore} from 'redux';

let reducers = combineReducers({
    appPage : mainReducer, 
});

let store = createStore(reducers);

export default store;
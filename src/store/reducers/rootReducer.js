import authReducer from './authReducer';
import inventoryReducer from './inventoryReducer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    auth: authReducer,
    inventory: inventoryReducer
});



export default rootReducer;
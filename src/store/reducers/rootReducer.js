import authReducer from './authReducer';
import inventoryReducer from './inventoryReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';


const rootReducer = combineReducers({
    auth: authReducer,
    inventory: inventoryReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});



export default rootReducer;
import { combineReducers } from 'redux';
import DoodleReducer from './reducer-doodles';
import {reducer as formReducer} from 'redux-form';


const rootReducer = combineReducers({
  doodles: DoodleReducer,
  form: formReducer
});

export default rootReducer;

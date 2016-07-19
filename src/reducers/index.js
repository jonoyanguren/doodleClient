import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import DoodleReducer from './reducer-doodles';
import OneDoodleReducer from './reducer-one-doodle';
import UserReducer from './reducer-user';
import {AmbassadorsReducer} from './reducer-create-doodles';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  doodles: DoodleReducer,
  doodle: OneDoodleReducer,
  user: UserReducer,
  form: formReducer,
  routing: routerReducer,
  ambassadors: AmbassadorsReducer
});

export default rootReducer;

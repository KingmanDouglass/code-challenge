import { combineReducers } from 'redux';
import calculationsReducer from './calculationsReducer';

const rootReducer = combineReducers({
  calculationsReducer,
});

export default rootReducer;

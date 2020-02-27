import { combineReducers, Action } from "redux";
import weather from "./weather/reducer";

export type IAction<T> = Action & { payload: T };

const reducers = combineReducers({
  weather
});

export default reducers;

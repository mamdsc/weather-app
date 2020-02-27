import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSaga";
import { IWeatherState } from "./ducks/weather/types";

export type IAppState = {
  weather: IWeatherState;
};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, {}, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
export default store;

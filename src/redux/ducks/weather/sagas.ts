import { call, put, all, takeLatest } from "redux-saga/effects";
import { IAction } from "../rootReducer";
import { WeatherActionTypes } from "./types";
import { WeatherService } from "../../../services/weather-service";
import {
  getWeatherSuccess,
  getWeatherError,
  getWeatherSuccessByName,
  getWeatherErrorByName
} from "./actions";
import { IWeather } from "../../../meta-data/interfaces/IWeather";
import { ILocation } from "../../../meta-data/interfaces/ILocation";

function* handleGetWeather(action: IAction<ILocation>) {
  try {
    const { latitude, longitude } = action.payload;
    const response = yield call(WeatherService.getWeather, latitude, longitude);
    yield put(getWeatherSuccess(response as IWeather));
  } catch (error) {
    if (error instanceof Error) {
      yield put(getWeatherError(error.stack!));
    } else {
      yield put(getWeatherError("An unknown error occured."));
    }
  }
}

function* handleGetWeatherByName(action: IAction<string>) {
  try {
    console.log(action.payload);
    const response = yield call(WeatherService.getByName, action.payload);
    yield put(getWeatherSuccessByName(response as IWeather));
  } catch (error) {
    if (error instanceof Error) {
      yield put(getWeatherErrorByName(error.stack!));
    } else {
      yield put(getWeatherErrorByName("An unknown error occured."));
    }
  }
}

export default all([
  takeLatest(WeatherActionTypes.GET_WEATHER, handleGetWeather),
  takeLatest(WeatherActionTypes.GET_BY_NAME_WEATHER, handleGetWeatherByName)
]);

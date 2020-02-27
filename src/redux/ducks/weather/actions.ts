import { WeatherActionTypes } from "./types";
import { IAction } from "../rootReducer";
import { ILocation } from "../../../meta-data/interfaces/ILocation";
import { IWeather } from "../../../meta-data/interfaces/IWeather";

export const getWeather = (location: ILocation): IAction<ILocation> => ({
  type: WeatherActionTypes.GET_WEATHER,
  payload: location
});

export const getWeatherSuccess = (data: IWeather): IAction<IWeather> => ({
  type: WeatherActionTypes.GET_WEATHER_SUCCESS,
  payload: data
});

export const getWeatherError = (message: string): IAction<string> => ({
  type: WeatherActionTypes.GET_WEATHER_ERROR,
  payload: message
});

export const getWeatherByName = (cityName: string): IAction<string> => ({
  type: WeatherActionTypes.GET_BY_NAME_WEATHER,
  payload: cityName
});

export const getWeatherSuccessByName = (data: IWeather): IAction<IWeather> => ({
  type: WeatherActionTypes.GET_BY_NAME_WEATHER_SUCCESS,
  payload: data
});

export const getWeatherErrorByName = (message: string): IAction<string> => ({
  type: WeatherActionTypes.GET_BY_NAME_WEATHER_ERROR,
  payload: message
});

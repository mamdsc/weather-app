import { IWeather } from "../../../meta-data/interfaces/IWeather";

export type IWeatherState = {
  readonly weather: IWeather;
  readonly isLoading: boolean;
  readonly errors: string[];
  readonly weatherByCityName: IWeather;
  readonly isLoadingByCityName: boolean;
  readonly errorsByCityName: string[];
};

export const WeatherActionTypes = {
  GET_WEATHER: "@@weather/GET_WEATHER",
  GET_WEATHER_SUCCESS: "@@weather/GET_WEATHER_SUCCESS",
  GET_WEATHER_ERROR: "@@weather/GET_WEATHER_ERROR",
  GET_BY_NAME_WEATHER: "@@weather/GET_BY_NAME_WEATHER",
  GET_BY_NAME_WEATHER_SUCCESS: "@@weather/GET_WEATHER_BY_NAME_SUCCESS",
  GET_BY_NAME_WEATHER_ERROR: "@@weather/GET_WEATHER_BY_NAME_ERROR"
};

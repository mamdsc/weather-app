import { IWeatherState, WeatherActionTypes } from "./types";
import { IAction } from "../rootReducer";
import { IWeather } from "../../../meta-data/interfaces/IWeather";
import { ILocation } from "../../../meta-data/interfaces/ILocation";

const INITIAL_STATE: IWeatherState = {
  weather: {} as IWeather,
  isLoading: false,
  errors: [],
  weatherByCityName: {} as IWeather,
  isLoadingByCityName: false,
  errorsByCityName: []
};

export default function cart(
  state = INITIAL_STATE,
  action: IAction<string | IWeather | ILocation>
) {
  switch (action.type) {
    case WeatherActionTypes.GET_WEATHER:
      return {
        ...state,
        isLoading: true
      };
    case WeatherActionTypes.GET_WEATHER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        weather: action.payload as IWeather
      };
    case WeatherActionTypes.GET_WEATHER_ERROR:
      return {
        ...state,
        isLoading: false,
        errors: [...state.errors, action.payload as string]
      };
    case WeatherActionTypes.GET_BY_NAME_WEATHER:
      return {
        ...state,
        isLoadingByCityName: true
      };
    case WeatherActionTypes.GET_BY_NAME_WEATHER_SUCCESS:
      return {
        ...state,
        isLoadingByCityName: false,
        weather: action.payload as IWeather
      };
    case WeatherActionTypes.GET_BY_NAME_WEATHER_ERROR:
      return {
        ...state,
        isLoadingByCityName: false,
        errorsByCityName: [...state.errors, action.payload as string]
      };
    default:
      return state;
  }
}

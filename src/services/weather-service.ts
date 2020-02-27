import { AxiosResponse } from "axios";
import AxiosInstance from "./interceptor/api";
import { IWeather } from "../meta-data/interfaces/IWeather";

const WeatherService = {
  async getWeather(
    latitude: number,
    longitude: number
  ): Promise<AxiosResponse<IWeather>> {
    return await AxiosInstance.get(
      `weather?lat=${latitude}&lon=${longitude}&units=metric`
    );
  },
  async getByName(cityName: string): Promise<AxiosResponse<any>> {
    return await AxiosInstance.get(`weather?q=${cityName}&units=metric`);
  }
};

export { WeatherService };

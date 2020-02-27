export interface IWeather {
  main: {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
    sea_level: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  wind: { speed: number; deg: number; gust: number };
  visibility: number;
  name: string;
  dt: number;
}

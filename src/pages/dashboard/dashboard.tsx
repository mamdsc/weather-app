import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getWeather,
  getWeatherError,
  getWeatherByName
} from "../../redux/ducks/weather/actions";
import { IAppState } from "../../redux";
import { IWeather } from "../../meta-data/interfaces/IWeather";
import { Container, BoxSearch } from "./dashboard.styled";
import { Spin, Icon, Card, Timeline, Input, Button } from "antd";
import mapa from "../../assets/img/mapa.jpg";

const Dashboard: React.FunctionComponent = () => {
  const [newCity, setNewCity] = useState<string>("");

  const currentWeather: IWeather = useSelector(
    (state: IAppState) => state.weather.weather
  );
  const isLoading: boolean = useSelector(
    (state: IAppState) => state.weather.isLoading
  );
  const dispatch = useDispatch();

  const { weather = [], name: city, main } = currentWeather;
  const [weatherAtCurrentLocation] = weather;

  useEffect(() => {
    const getLocation = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            dispatch(getWeather(position.coords));
          },
          err => getWeatherError(err.message),
          { enableHighAccuracy: true }
        );
      }
    };
    getLocation();
  }, [dispatch]);

  return (
    <Container>
      {isLoading && <Spin />}
      {city && weatherAtCurrentLocation ? (
        <>
          <div>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="mapa" src={mapa} />}
            >
              Você está em: <span>{city}</span>
              <Timeline>
                <Timeline.Item>
                  Agora:{" "}
                  {weatherAtCurrentLocation.description
                    .charAt(0)
                    .toUpperCase() +
                    weatherAtCurrentLocation.description.slice(1)}
                </Timeline.Item>
                <Timeline.Item>
                  Temperatura atual: {Math.round(main.temp)}°
                </Timeline.Item>
                <Timeline.Item>
                  <Icon type="fire" twoToneColor="#ff0000" theme="filled" />
                  <span>Máxima: {Math.round(main.temp_max)}°</span>
                </Timeline.Item>
                <Timeline.Item>
                  <Icon type="cloud" twoToneColor="#0000ff" theme="filled" />
                  <span>Mínima: {Math.round(main.temp_min)}°</span>
                </Timeline.Item>
              </Timeline>
            </Card>
            <BoxSearch>
              Pesquise outra cidade:
              <Input
                onPressEnter={() => dispatch(getWeatherByName(newCity))}
                placeholder="Digite o nome da cidade"
                onChange={e => setNewCity(e.target.value)}
              />
              <Button onClick={() => dispatch(getWeatherByName(newCity))}>
                Pesquisar
              </Button>
            </BoxSearch>
          </div>
        </>
      ) : (
        <div>Ops, não foi possível acessar sua localização</div>
      )}
    </Container>
  );
};

export { Dashboard };

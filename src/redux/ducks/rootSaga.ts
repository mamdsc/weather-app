import { all } from "redux-saga/effects";
import weather from "./weather/sagas";

export default function* rootSaga() {
  yield all([weather]);
}

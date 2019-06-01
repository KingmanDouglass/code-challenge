import { all } from 'redux-saga/effects';
import calculationsSaga from './calculationsSaga';

export default function* rootSaga() {
  yield all([
    calculationsSaga(),
  ]);
}

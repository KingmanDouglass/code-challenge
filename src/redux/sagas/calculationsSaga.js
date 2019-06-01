import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addCalc(action) {
    try {
        console.log('POST calculations', action);
        yield axios.post(`/api/sezzle/`, action.payload);
        yield put({ type: 'GET_CALC' });
    }catch (error) {
        console.log(`Couldn't POST the calculations`, error);
        alert(`Sorry couldn't add the new calculations. Try again later.`)
    }
  }

function* getCalc() {
    console.log('GET ten most recent calculations');
    try{
        const getResponse = yield axios.get(`/api/sezzle/`);
        const action = {type: 'SET_CALC', payload: getResponse.data};
        yield put(action);
    }catch (error) {
        console.log(`Couldn't get the calculations`, error);
        alert(`Sorry couldn't get the recent calculations. Try again later.`)
    }
}



function* bondSaga() {
    yield takeLatest(`ADD_CALC`, addCalc)
    yield takeLatest(`GET_CALC`, getCalc)
}


export default bondSaga;
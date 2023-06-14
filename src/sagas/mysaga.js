import { put, takeLatest,take,select } from 'redux-saga/effects';
import { USER_INFO } from '../actions/myactions';
import { BUY_BOOK } from '../actions/myactions';
function *helloSaga() {
    const sam= yield select(state=>state.numOfBook);
    console.log(sam)
  yield put({type:"USER_SUCCESS",num:sam});
  }
export function *fetchDetails(){
  yield takeLatest(BUY_BOOK, helloSaga);
}

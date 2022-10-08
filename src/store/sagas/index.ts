// template1==
import { all } from 'redux-saga/effects';
import w1 from './ind';
import w2 from './ind2';
function* watchSaga() {
  yield all([w1(), w2()])
 }

export default watchSaga
// function* watchSaga() {
//   yield all([w1(), w2()])
//  }

// export default watchSaga
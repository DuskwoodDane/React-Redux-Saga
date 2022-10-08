import { call, fork, put, take } from 'redux-saga/effects'
// take传送
export default function* watchSaga() {
  console.log('Hello World')
  while (true) {
    yield take('get-list1')
    yield fork(getList)

  }
  
}

function* getList(): any {
  const res = yield call(getListAction);

  yield put({
    type: 'GlOBALSETPAYLOAD',
    payload: { list3: res }
  })
}

function getListAction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['777', '888', '999'])
    })
  })
}

import { takeEvery, call, put } from 'redux-saga/effects'
// takeEvery传送
export default function* watchSaga() {
  yield takeEvery('get-list2', getList)
}

function* getList(): any {
  const res1 = yield call(getListAction);
  const res2 = yield call(getListAction2, res1);
  yield put({
    type: 'GlOBALSETPAYLOAD',
    payload: { list1: res1, list2: res2 }
  })
}

function getListAction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['111', '222', '333'])
    })
  })
}

function getListAction2(data: any) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...data, '444', '555'])
    })
  })
}

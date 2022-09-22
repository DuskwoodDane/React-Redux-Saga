import { setPayload } from '../../utils/redux.js'

const state = {
  count: 10
}

const actionList = [
  { type: 'GlOBALSETPAYLOAD', callback: (prevState:any, payload:any) => setPayload(prevState, payload) }
]

const reducer = (prevState = { ...state }, action: any) => {
  const find = actionList.filter(item => item.type === action.type)
  const hasMatch = !!(find.length && find[0]);
  return hasMatch ? find[0].callback(prevState, action.payload) : prevState;
}

export default reducer;
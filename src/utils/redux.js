import { connect } from 'react-redux';

export function setPayload(prevState, payload) { 
  const newState = { ...prevState };
  for (const key of Object.keys(payload)) {
    newState[key] = payload[key];
  }
  return newState;
}

export const getForwardComponent = (Components) => {
  // connect第二个参数如果传入一个null，则会向store派发一个dispatch函数
  return connect((data, ownProps) => {
    console.log('data==', data, ownProps)
    const GlobalState = data.GlobalReducer;
    return {
      state: { ...GlobalState }
    };
  },
    null,
    // {
    //   updateGlobalData(payload) {
    //     return {
    //       type: 'GlOBALSETPAYLOAD',
    //       payload
    //     };
    //   }
    // },
    null, { forwardRef: true })(Components);
};
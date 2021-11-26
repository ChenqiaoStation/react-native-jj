import {ActionTypes, DefaultState} from '../../types';

const defaultState: DefaultState = {
  user: {},
  setting: {
    theme: '#987123',
  },
};

export default function (
  state: DefaultState = defaultState,
  action: {type: ActionTypes; value: any},
) {
  let newState: DefaultState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'UPDATE_SETTING':
      newState.setting = action.value;
      break;
    
    default:
      //就是这个地方有坑，之前写的是 default: break; 可以持久化到本地，但是重新ReLoad又变成默认的defaultState了。
      //然后现在改造一下，如果不是上面那些 action ，返回最新的 state，即可解决问题。
      return state;
  }
  return newState;
}
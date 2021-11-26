import {ActionTypes} from '../../types';
// 同步通用方法
const sync = (type: ActionTypes, value: any) => {
  return {type: type, value: value};
};

const updateSetting = (setting: object) => {
  return sync('UPDATE_SETTING', setting);
};

const updateUser = (user: object) => {
  return sync('UPDATE_USER', user);
};

export {updateSetting, updateUser};

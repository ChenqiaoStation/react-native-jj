export type ActionTypes = 'UPDATE_SETTING' | 'UPDATE_USER';
export type DefaultState = {
  user: {};
  // 设置
  setting: {
    theme: string;
  };
};

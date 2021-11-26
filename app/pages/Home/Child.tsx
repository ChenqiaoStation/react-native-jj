import React, {useImperativeHandle} from 'react';
import {StyleSheet, View} from 'react-native';

export interface ChildProps {}
type ChildHandle = {
  f: () => void;
};

const Child: React.ForwardRefRenderFunction<ChildHandle, ChildProps> = (
  props,
  ref,
) => {
  useImperativeHandle(ref, () => ({
    f: () => {},
  }));
  return <View />;
};

const styles = StyleSheet.create({});

export default React.forwardRef(Child);
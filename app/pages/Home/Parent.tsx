import React, {useEffect, useImperativeHandle} from 'react';
import {StyleSheet, View} from 'react-native';
import Child from './Child';

interface ParentProps {}

const Parent: React.FC<ParentProps> = () => {
  type ChilHandle = React.ElementRef<typeof Child>;
  const child = React.useRef<ChilHandle>(null);
  useEffect(() => {
    child.current.f();
    return () => {};
  }, []);
  return <Child ref={child} />;
};

const styles = StyleSheet.create({});

export default Parent;
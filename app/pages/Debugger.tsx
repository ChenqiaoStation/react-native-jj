import React, {Dispatch} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {useRandomColor} from '../../react-native-xUtils';
import {RootStacksProp} from '../../Stacks';
import TabBar from '../components/TabBar';
import {updateSetting} from '../redux/action';
import {DefaultState} from '../types';

interface DebuggerProps {
  navigation: RootStacksProp;
}
type ReduxType = ReturnType<typeof mapState2Props> &
  ReturnType<typeof mapDispatcher2Props> &
  DebuggerProps;

const Debugger: React.FC<ReduxType> = props => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      <TabBar
        title="调试页面"
        onBackPress={() => {
          props.navigation.goBack();
        }}
      />
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <TouchableOpacity
          onPress={() => {
            console.log('randomColor: ', useRandomColor());
            let _setting = {...props.setting};
            _setting.theme = useRandomColor();
            props.updateSetting(_setting);
          }}>
          <Text style={{color: props.setting.theme}}>Change Color</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

const mapState2Props = (state: DefaultState) => {
  return {
    setting: state.setting,
  };
};

const mapDispatcher2Props = (dispatch: Dispatch<any>) => {
  return {
    updateSetting: (setting: object) => dispatch(updateSetting(setting)),
  };
};
export default connect(mapState2Props, mapDispatcher2Props)(Debugger);

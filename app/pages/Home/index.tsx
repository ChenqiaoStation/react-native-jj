import React, {Dispatch, useEffect, useRef} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {updateSetting} from '../../redux/action';
import {DefaultState} from '../../types';
import {RootStacksProp} from '../../../Stacks';
import moment from 'moment';

interface HomeProps {
  navigation?: RootStacksProp;
}
type ReduxType = ReturnType<typeof mapState2Props> &
  ReturnType<typeof mapDispatcher2Props> &
  HomeProps;

const Home: React.FC<ReduxType> = props => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <View style={styles.viewContainer}>
      <TouchableOpacity onPress={() => {}}>
        <Text>Screen shot to native photo library</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 16,
  },
});

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
export default connect(mapState2Props, mapDispatcher2Props)(Home);

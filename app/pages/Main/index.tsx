import React, {Dispatch} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import {useRandomColor} from '../../../react-native-xUtils';
import {RootStacksProp} from '../../../Stacks';
import {updateSetting} from '../../redux/action';
import {DefaultState} from '../../types';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBar from '../../components/TabBar';

interface MainProps {
  navigation: RootStacksProp;
}
type ReduxType = ReturnType<typeof mapState2Props> &
  ReturnType<typeof mapDispatcher2Props> &
  MainProps;

const SimpePage = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} />
  );
};

const Tab = createBottomTabNavigator();

const tabs = [
  {name: '微博', page: SimpePage, icon: require('../../images/main_weibo.png')},
  {name: '京东', page: SimpePage, icon: require('../../images/main_jd.png')},
  {name: '顺丰', page: SimpePage, icon: require('../../images/main_sf.png')},
  {
    name: '钉钉',
    page: SimpePage,
    icon: require('../../images/main_dingding.png'),
  },
  {
    name: '微信',
    page: SimpePage,
    icon: require('../../images/main_wechat.png'),
  },
];

const Main: React.FC<ReduxType> = props => {
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
      <View style={{flex: 1}}>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#e91e63',
          }}>
          {Array.from(tabs, (_, i) => (
            <Tab.Screen
              key={i}
              name={tabs[i].name}
              component={tabs[i].page}
              options={{
                tabBarLabel: tabs[i].name,
                tabBarBadge: Math.ceil(100 * Math.random()),
                tabBarIcon: ({color, size}) => (
                  <Image
                    source={tabs[i].icon}
                    style={{height: size, width: size, tintColor: color}}
                  />
                ),
              }}
            />
          ))}
        </Tab.Navigator>
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
export default connect(mapState2Props, mapDispatcher2Props)(Main);

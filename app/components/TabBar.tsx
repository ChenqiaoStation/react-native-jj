import React from 'react';
import {
  Image, StyleSheet,
  Text, TouchableOpacity,
  View
} from 'react-native';
import {
  useStatusBarHeight,
  useZoomOutTouchable
} from '../../react-native-xUtils';

export interface TabBarProps {
  /** 返回按钮点击事件 */
  onBackPress: () => void;
  /** 标题 */
  title: string;
}

const TabBar: React.FC<TabBarProps> = props => {
  return (
    <View>
      <View style={{height: useStatusBarHeight()}} />
      <View style={styles.viewBarContainer}>
        <View style={styles.viewBar}>
          <TouchableOpacity
            hitSlop={useZoomOutTouchable()}
            onPress={() => {
              props.onBackPress();
            }}>
            <Image
              source={require('../images/tab_bar_back.png')}
              style={styles.imageBack}
            />
          </TouchableOpacity>
          <Text style={styles.textTitle}>{props.title}</Text>
          <View style={styles.imageBack} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewBarContainer: {
    justifyContent: 'center',
    display: 'flex',
    height: 44,
    backgroundColor: 'white',
    paddingHorizontal: 12,
  },
  viewBar: {
    flexDirection: 'row',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageBack: {
    height: 18,
    width: 18,
  },
  textTitle: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default TabBar;

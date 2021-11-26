import CameraRoll from '@react-native-community/cameraroll';
import {Dimensions, Platform, StatusBar} from 'react-native';
import {
  PERMISSIONS,
  request,
} from 'react-native-permissions';
import RNFS from 'react-native-fs';
import md5 from 'blueimp-md5';

/** 是不是刘海屏 */
const isiPhone11 = () => {
  let iPhone11Heights = [812, 844, 896, 926];
  return iPhone11Heights.some(
    it =>
      (Platform.OS === 'ios' && Dimensions.get('screen').height === it) ||
      Dimensions.get('screen').width === it,
  );
};

/** StatusBar 的高度 */
const useStatusBarHeight = (isSafe?: boolean) => {
  return (
    Platform.select({
      android: StatusBar.currentHeight,
      ios: isiPhone11() ? (isSafe ? 44 : 30) : 22,
    }) ?? 0
  );
};

/** Home Indicator 的高度 */
const useHomeIndicatorHeight = () => {
  return isiPhone11() ? 34 : 0;
};

/** 放大 Touchable 点击区域 */
const useZoomOutTouchable = (size?: number) => {
  let _size = size ?? 6;
  return {top: _size, bottom: _size, left: _size, right: _size};
};

/** 写入原生相册的权限 */
const useWriteNativePhotoLibraryPermission = async () => {
  let result = await request(
    Platform.select({
      android: PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
      ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
    }),
  );
  console.log('useWriteNativePhotoLibraryPermission', result);
  return result === 'granted';
};

/** 保存图片到本地 */
const saveImage2NativePhotoLibarary = (uri: string, name: string) => {
  request(
    Platform.select({
      android: PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
      ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
    }),
  ).then((permission: any) => {
    // http://www.cctv3.net/Shupofan/13.jpg
    console.log('saveImage2NativePhotoLibarary');
    console.log('Permission', permission);
    let result: {status: number; message: any} = Object.create(null);
    if (permission === 'granted') {
      let cacheFile = RNFS.DocumentDirectoryPath + '/' + name;
      let downloader = RNFS.downloadFile({
        fromUrl: uri,
        progress: progress => {
          console.log(
            'Download progress: ' +
              progress.bytesWritten / progress.contentLength,
          );
        },
        toFile: cacheFile,
      });
      downloader.promise.then(download => {
        if (download.statusCode == 200) {
          download.statusCode == 200;
          CameraRoll.save(cacheFile, {type: 'photo'}).then(
            (cameraRoll: any) => {
              console.log('CameraRoll save result', cameraRoll);
            },
          );
        } else {
          result.status = 0;
          result.message = 'Image uri is error';
        }
      });
    } else {
      result.status = 0;
      result.message = 'Permission of writing storage is error';
    }
  });
};

/** useRandomColor */
const useRandomColor = () => {
  return `#${md5(new Date().getTime().toString()).substring(0, 6)}`;
};

export {
  isiPhone11,
  useStatusBarHeight,
  useHomeIndicatorHeight,
  useZoomOutTouchable,
  saveImage2NativePhotoLibarary,
  useRandomColor,
};

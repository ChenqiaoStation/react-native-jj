# react-native-jj

## 简介

脚手架 `react-native-jj` 基于 `react-native 0.66.3` 版本，项目里面集成了常用的三方库。`main` 分支代码为最稳定的版本，在 `Android` 和 `iOS` 上面都测试通过，功能完全 `OJBK`。

### 目前已经集成的三方库

| Package name                              | Version | Description                       |
| :---------------------------------------- | :------ | :-------------------------------- |
| redux                                     |         |                                   |
| react-redux                               |         |                                   |
| redux-persisit                            |         |                                   |
| redux-thunk                               |         |                                   |
| redux-devtools-extension                  |         |                                   |
| blueimp-md5                               |         |                                   |
| react-navigation                          |         |                                   |
| @react-navigation/bottom-tabs             |         |                                   |
| @react-navigation/native                  |         |                                   |
| @react-navigation/native-stack            |         |                                   |
| @react-native-async-storage/async-storage |         |                                   |
| @react-native-community/cameraroll        |         |                                   |
| fbjs                                      |         | install 4 react-native-cameraroll |
| moment                                    |         |                                   |
| react-native-device-info                  |         |                                   |
| react-native-fast-image                   |         |                                   |
| react-native-fs                           |         |                                   |
| react-native-permissions                  |         |                                   |
| react-native-safe-area-context            |         |                                   |
| react-native-screens                      |         |                                   |
| react-native-webview                      |         |                                   |

## 分支

初步计划以后每次 `react-native` 发一个新的版本，我都会新建一个分支测试最新的代码的兼容性。

> 例如: `a.bb.ccc` 这个版本为 `a.bb.x` 的最后一个版本，那么我会从 `main` 拉一个分支，以`a.bb.ccc` 作为分支名。

## 常见问题

### 命令执行顺序

```shell
1. npm install
2. react-native rename "NewProjectName" -b "com.newPackageName"
3. pod install
```

> 如果顺序错误，可能会导致编译报错。

![](./ReadMeFiles/PodErrorXCFileList.jpg)

这时请切换到 `iOS` 文件夹下，重新执行 `pod install`。

### Task 'wrapper' not found in project ':app'.

导入 `Android Studio` 工程报错。

```java
Task 'wrapper' not found in project ':app'.

* Try:
Run gradle tasks to get a list of available tasks. Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.

```

> 请使用 import Poject，而不是使用 open Project。

# taro框架实现todoList

[![](https://img.shields.io/node/v/@tarojs/cli.svg?style=flat-square)](https://www.npmjs.com/package/@tarojs/cli)
[![](https://img.shields.io/npm/v/@tarojs/taro.svg?style=flat-square)](https://www.npmjs.com/package/@tarojs/taro)
[![](https://img.shields.io/npm/l/@tarojs/taro.svg?style=flat-square)](https://www.npmjs.com/package/@tarojs/taro)

## 安装和使用 

### 全局安装 taro：

```bash
$ npm install -g @tarojs/cli
$ yarn global add @tarojs/cli
```

### 拉取代码

```
$ git clone https://github.com/hanyueqiang/taro-Todo.git
$ cd taro-Todo
```

### 安装依赖包：

```
$ yarn install
```

### 微信小程序编译预览和打包

```bash
$ npm run dev:weapp
$ npm run build:weapp
# 仅限全局安装
$ taro build --type weapp --watch //去掉 --watch 将不会监听文件修改，并会对代码进行压缩打包
//打包
$ taro build --type weapp
# npx 用户也可以使用
$ npx taro build --type weapp --watch
$ npx taro build --type weapp
```

### H5编译预览和打包
```bash
$ npm run dev:h5
# 仅限全局安装
$ taro build --type h5 --watch //去掉 --watch 将不会监听文件修改，并会对代码进行压缩打包
//打包
$ npm run build:h5
# 仅限全局安装
$ taro build --type h5
# npx 用户也可以使用
$ npx taro build --type h5
```

### 注意事项

使用微信小程序预览模式，则需要自行下载并打开[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)，选择预览项目根目录下 `dist` 目录。

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development
and testing purposes.

###

### Prerequisites

What do you need to install:

```
nodejs
ionic
Android Dev Env: https://cordova.apache.org/docs/en/8.x/guide/platforms/android/
```

### Installing

After installing the prerequisites:

```
git clone ssh://git@gitlab.com:lemark/dts.git
git clone https://git@gitlab.com:lemark/dts.git
```

go into your project direcotry and run

```
npm i
```

### Starting

Start the app in your browser:

```
ionic serve
```

Run the app on android:

```
cordova platform add android --save
ionic cordova prepare android
ionic cordova run android
```

## ⛏️ Built With <a name = "tech_stack"></a>

- [Ionic](https://ionicframework.com) - PWA Framework
- [BLE](https://ionicframework.com/docs/native/ble) - BLE Library

## 🎉 Acknowledgments <a name = "acknowledgments"></a>

- [BLE](https://github.com/don/cordova-plugin-ble-central) - cordova-plugin-ble-central

## On MacOs

1. Install NodeJS >=16

2. Install Appium: `npm i -g appium`

3. Install Driver + Plugins:
`appium driver install xcuitest`
`appium plugin install --source=npm appium-ocr-plugin`
`appium plugin install images`

4. Start server: `appium server --use-drivers XCUITest --use-plugins ocr,images --allow-cors --base-path /wd/hub`
`appium server --use-drivers XCUITest --allow-cors --base-path /wd/hub`

5. Download and start Appium Inspector: https://github.com/appium/appium-inspector/releases

## On iPhone devices

1. Download pre-build WebDriverAgent-Runner: https://github.com/appium/WebDriverAgent/releases

2. Sign via `iOS App Signer` and MUST install via `Sideloadly`. Install via XCode will cause errors.

3. Turn off iPhone Auto lock: `Settings → Display and Brightness`

4. Connect device to Xcode and Trust, reconnect Xcode only after every device restarted

5. Start `WebDriverAgent` app

## Starting automation

Using this capabilities for any Testing frameworks (Selemium, Webdrive.io,...), (maybe need to update its values):

```
    "platformName": "iOS",
    "appium:platformVersion": "17.1.1",
    "appium:automationName": "XCUITest",
    "appium:deviceName": "iPhone 12",
    "appium:bundleId": "<target bundle ID>",
    "appium:xcodeOrgId": "<Team ID of Apple Development Certiicate>",
    "appium:xcodeSigningId": "Apple Developer",
    "appium:udid": "<udid of iPhone>",
    "$cloud:appiumOptions": {
      "version": "2.2.2",
      "automationVersion": "5.10.2",
      "plugins": [
        "images",
        "ocr"
      ]
    },
    "appium:clearSystemFiles": true,
    "appium:newCommandTimeout": 3600,
```
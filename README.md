## On MacOs

1. Install NodeJS >=16

2. Install Appium: `npm i -g appium`

3. Install Driver + Plugins:
`appium driver install xcuitest`
`appium plugin install --source=npm appium-ocr-plugin`
`appium plugin install images`

4. Start server: `appium server --use-drivers xcuitest --use-plugins ocr,images --allow-cors --base-path /wd/hub`
`appium server --use-drivers xcuitest --allow-cors --base-path /wd/hub`

5. Download and start Appium Inspector: https://github.com/appium/appium-inspector/releases ; check its README for how to use

## On iPhone devices

1. Download pre-build WebDriverAgent-Runner: https://github.com/appium/WebDriverAgent/releases

2. Unzip → Create "Payload" folder → Put unzipped file inside → Zip "Payload" → Rename ".zip" to ".ipa"

3. Sign IPA via `iOS App Signer` and MUST install via `Sideloadly`. Install via XCode will cause errors "bundle not valid".

4. Turn off iPhone Auto lock: `Settings → Display and Brightness`

5. Connect device to Xcode and Trust, reconnect Xcode only after every device restarted

6. Start `WebDriverAgent` app

7. See commands ref: https://appium.github.io/appium-xcuitest-driver/5.6/reference/commands/appium-xcuitest-driver

## Starting automation

Using this capabilities for any Testing frameworks (Selemium, Webdrive.io,...), (maybe need to update its values):

```
    "platformName": "iOS",
    "appium:platformVersion": "17.3", // your iPhone version
    "appium:automationName": "XCUITest",
    "appium:deviceName": "iPhone 12", // your iPhone model
    "appium:bundleId": "<target bundle ID>", // optional
    "appium:xcodeOrgId": "<Team ID of Apple Development Certiicate>", // which signed WebDriverAgent
    "appium:xcodeSigningId": "Apple Developer",
    "appium:udid": "<udid of iPhone>",
    "$cloud:appiumOptions": {
      "version": "2.4.1", // re-check this version of appium framework
      "automationVersion": "5.14.0", // re-check this version of appium xcuitest driver
      "plugins": [
        "images",
        "ocr"
      ]
    },
    "appium:clearSystemFiles": true,
    "appium:newCommandTimeout": 3600, // in seconds
```
## On MacOs

1. Install NodeJS >=16

2. Install Appium: `npm i -g appium`

3. Install Driver + Plugins:
`appium driver install xcuitest`
`appium plugin install --source=npm appium-ocr-plugin`
`appium plugin install images`

4. Start server with plugins:
`appium server --use-drivers xcuitest --use-plugins ocr,images --allow-cors --base-path /`
Or without plugins: `appium server --use-drivers xcuitest --allow-cors --base-path /`

5. Download and start Appium Inspector: https://github.com/appium/appium-inspector/releases ; check its README for how to use

## On iPhone devices

1. Download pre-build WebDriverAgent-Runner: https://github.com/appium/WebDriverAgent/releases

2. Unzip → Create "Payload" folder → Put unzipped file inside → Zip "Payload" → Rename ".zip" to ".ipa"

3. Sign IPA via `iOS App Signer` and MUST install via `Sideloadly`. Install via XCode will cause errors "bundle not valid".

4. Turn off iPhone Auto lock: `Settings → Display and Brightness`

5. Connect device to Xcode and Trust, reconnect Xcode only after every device restarted

6. Start `WebDriverAgent` app

7. See commands ref: https://appium.github.io/appium-xcuitest-driver/latest/reference/commands/

## Starting automation

Using this capabilities for any Testing frameworks (Selemium, Webdrive.io,...), (maybe need to update its values):

Ref: https://appium.github.io/appium-xcuitest-driver/latest/reference/capabilities

```
    "platformName": "iOS",
    "appium:automationName": "xcuitest",
    "appium:deviceName": "iPhone 12", // your iPhone model
    "appium:platformVersion": "18.6.2", // your iPhone version
    "appium:udid": "<udid of iPhone>", // Eg. 00008101-000E61640A01001E
    "appium:xcodeOrgId": "<Team ID of Apple Development Certiicate>", // which signed WebDriverAgent, open ".mobileprovision" file by Text and find "TeamIdentifier". Eg. 9YAC7543MW
    "appium:xcodeSigningId": "Apple Developer",

    "appium:bundleId": "<target bundle ID>", // optional
    "appium:noReset": true, // optional, no re-install app before test

    "$cloud:appiumOptions": {
      "version": "2.19.0", // re-check this version of appium framework `appium --version`
      "automationVersion": "7.35.1", // re-check this version of appium xcuitest driver `appium driver update xcuitest`
      "plugins": [
        "images",
        "ocr"
      ]
    },
    "appium:clearSystemFiles": true,
    "appium:newCommandTimeout": 3600, // in seconds
```

## Commonly used commands
> Ref: https://appium.github.io/appium-xcuitest-driver/latest/reference/execute-methods

- Tap: `await driver.execute('mobile: tap', { x: 0, y: 0 });`
- Double tap: `await driver.execute('mobile: doubleTap', { x: 0, y: 0 });`
- Touch & Hold: `await driver.execute('mobile: touchAndHold', { x: 0, y: 0, duration: 1.5 });`
- Swipe from center: `await driver.execute('mobile: swipe', { direction: 'up' });`
- Drag: `await driver.execute('mobile: dragFromToForDuration', { duration: 0.5, fromX: 0, fromY: 0, toX: 9, toY: 9 });`
- Pinch (Zoom in/out): `await driver.execute('mobile: tap', { scale: 0.5, velocity: 1 });`
- Press sequential keys: `await driver.execute('mobile: keys', { "keys": ["T", "i", "m", "f", "XCUIKeyboardKeySpace", "XCUIKeyboardKeyEnter"] });`
- Wait (ms): `await driver.pause(1000);`

- Perform advanced actions (Tap, hold, move by path, release):
```
// https://github.com/jlipps/simple-wd-spec#perform-actions
// Syntax: driver.performActions(actionArray)
// If "actionArray" having more than 1 element, all elements will running parallel
// Eg. Zoom-in/out case
  driver.performActions([
    {
      type: 'pointer',
      id: 'finger1.1',
      parameters: { pointerType: 'touch' },
      actions: [
        { type: 'pointerMove', duration: 0, x: 55, y: 180 },
        { type: 'pointerDown', button: 0 },
        { type: 'pause', duration: 500 },
        { type: 'pointerMove', duration: 1000, x: 285, y: 625 },
        { type: 'pointerMove', duration: 1000, x: 55, y: 625 },
        { type: 'pointerMove', duration: 1000, x: 55, y: 180 },
        { type: 'pointerUp', button: 0 }
      ]
    }
  ]);
```
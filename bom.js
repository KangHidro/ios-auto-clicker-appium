const { remote } = require('webdriverio');

async function main() {
  const caps = {
    "platformName": "iOS",
    "appium:platformVersion": "18.0",
    "appium:automationName": "xcuitest",
    "appium:deviceName": "iPhone 12",
    "appium:xcodeOrgId": "9YAC7543MW",
    "appium:xcodeSigningId": "Apple Developer",
    "appium:udid": "00008101-000E61640A01001E",
    "$cloud:appiumOptions": {
      "version": "2.19.0",
      "automationVersion": "7.35.1",
      "plugins": [
        // "images",
        // "ocr"
      ]
    },
    "appium:clearSystemFiles": true,
    "appium:newCommandTimeout": 3600,
  };
  const driver = await remote({
    protocol: "http",
    hostname: "127.0.0.1",
    port: 4723,
    path: "/wd/hub/",
    capabilities: caps
  });

  while (true) {

    await driver.execute('mobile: doubleTap', { x: 788, y: 204 });
    await driver.pause(2000);
  }

}

main().catch(console.log);
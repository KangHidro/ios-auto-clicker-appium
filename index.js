const { remote } = require('webdriverio');

async function main() {
  const caps = {
    "platformName": "iOS",
    "appium:platformVersion": "17.1.1",
    "appium:automationName": "XCUITest",
    "appium:deviceName": "iPhone 12",
    "appium:xcodeOrgId": "CGD8Z27TTD",
    "appium:xcodeSigningId": "Apple Developer",
    "appium:udid": "00008101-000E61640A01001E",
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
  };
  const driver = await remote({
    protocol: "http",
    hostname: "127.0.0.1",
    port: 4723,
    path: "/wd/hub/",
    capabilities: caps
  });

  while (true) {
    await driver.activateApp('com.allstarunion.ta.ios.vn');
    await driver.pause(5000);
    await driver.activateApp('com.allstarunion.ta.ios');
    await driver.pause(5000);
    await driver.activateApp('com.allstarunion.ta.ios2');
    await driver.pause(5000);
  }

  //await driver.deleteSession();
}

main().catch(console.log);
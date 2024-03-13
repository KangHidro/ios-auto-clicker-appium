const { remote } = require('webdriverio');

async function main() {
  const caps = {
    "platformName": "iOS",
    "appium:platformVersion": "17.3",
    "appium:automationName": "XCUITest",
    "appium:deviceName": "iPhone 12",
    "appium:xcodeOrgId": "CGD8Z27TTD",
    "appium:xcodeSigningId": "Apple Developer",
    "appium:udid": "00008101-000E61640A01001E",
    "$cloud:appiumOptions": {
      "version": "2.4.1",
      "automationVersion": "5.14.0",
      "plugins": [
        // "images",
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
    // await driver.execute('mobile: doubleTap', { x: 200, y: 785 }); // nhảy
    // await driver.execute('mobile: doubleTap', { x: 195, y: 785 });
    await driver.execute('mobile: swipe', { direction: 'up' });
    await driver.pause(5000);
    await driver.execute('mobile: swipe', { direction: 'down' });
    await driver.pause(5000);
  }

}

main().catch(console.log);
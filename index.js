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
    // await driver.execute('mobile: tap', { x: 215, y: 258 });
    // await driver.execute('mobile: tap', { x: 78, y: 405 });
    await driver.execute('mobile: tap', { x: 313, y: 465 });
    //
    await driver.execute('mobile: tap', { x: 290, y: 477 });
    await driver.execute('mobile: tap', { x: 325, y: 78 });
    await driver.execute('mobile: tap', { x: 200, y: 634 });

    // await driver.execute('mobile: doubleTap', { x: 197, y: 497 }); buy tang toc
  }

}

main().catch(console.log);
const { remote } = require('webdriverio');

async function main() {
  const caps = {
    "platformName": "iOS",
    "appium:platformVersion": "18.6",
    "appium:automationName": "xcuitest",
    "appium:deviceName": "iPhone 12",
    "appium:xcodeOrgId": "9YAC7543MW",
    "appium:xcodeSigningId": "Apple Developer",
    "appium:udid": "00008101-000E61640A01001E",
    "$cloud:appiumOptions": {
      "version": "2.19.0",
      "automationVersion": "7.35.1",
      "plugins": []
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
    // await driver.execute('mobile: tap', { x: 215, y: 477 });
    // await driver.execute('mobile: doubleTap', { x: 286, y: 510 });
    // await driver.execute('mobile: dragFromToForDuration', { duration: 0.5, fromX: 339, fromY: 235, toX: 96, toY: 233 });

    await driver.execute('mobile: tap', { x: 191, y: 274 });
    await driver.execute('mobile: tap', { x: 313, y: 465 });
    // buy
    await driver.execute('mobile: tap', { x: 290, y: 477 });
    await driver.execute('mobile: tap', { x: 325, y: 78 });
    await driver.execute('mobile: tap', { x: 200, y: 634 });

    // await driver.execute('mobile: doubleTap', { x: 197, y: 497 }); buy tang toc
  }

}

main().catch(console.log);
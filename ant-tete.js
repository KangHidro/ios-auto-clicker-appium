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

  // await driver.activateApp('com.allstarunion.ta.ios.vn');

  for (let i = 0; i < 15; i++) {
    await driver.execute('mobile: tap', { x: 275, y: 805 }); // Bottom nav
    await driver.pause(1000);
    await driver.execute('mobile: tap', { x: 325, y: 550 }); // events
    await driver.pause(1000);
    await driver.execute('mobile: tap', { x: 190, y: 160 }); // tete event
    await driver.pause(1000);
    await driver.execute('mobile: tap', { x: 315, y: 795 }); // go to tete
    await driver.pause(3000);
    await driver.execute('mobile: tap', { x: 195, y: 375 }); // tap tete
    await driver.pause(1000);
    await driver.execute('mobile: tap', { x: 268, y: 422 }); // tap summon
    await driver.pause(1000);
    await driver.execute('mobile: tap', { x: 123, y: 579 }); // confirm time
    await driver.pause(1000);
    await driver.execute('mobile: tap', { x: 295, y: 795 }); // go
    await driver.pause(330_000); // 7p
  }

  //await driver.deleteSession();
}

main().catch(console.log);
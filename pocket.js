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
    // cao
    // await driver.execute('mobile: tap', { x: 200, y: 711 });
    // await driver.pause(1000);
    // await driver.execute('mobile: tap', { x: 196, y: 796 });
    // await driver.pause(23000);
    // // await driver.execute('mobile: tap', { x: 196, y: 796 });
    // // await driver.pause(20000);
    // await driver.execute('mobile: tap', { x: 189, y: 793 });
    // await driver.pause(1000);
    // await driver.execute('mobile: tap', { x: 189, y: 793 });
    // await driver.pause(8000);
    //

    // await driver.execute('mobile: tap', { x: 200, y: 711 });
    // await driver.pause(1000);
    // await driver.execute('mobile: tap', { x: 196, y: 796 });
    // await driver.pause(1000);
    // await driver.execute('mobile: tap', { x: 196, y: 796 });
    // await driver.pause(22000);
    // await driver.execute('mobile: tap', { x: 196, y: 796 });
    // await driver.pause(22000);
    // await driver.execute('mobile: tap', { x: 189, y: 793 });
    // await driver.pause(1000);
    // await driver.execute('mobile: tap', { x: 189, y: 793 });
    // await driver.pause(8000);

    await driver.execute('mobile: tap', { x: 200, y: 711 });
    await driver.pause(1000);
  }

}

main().catch(console.log);
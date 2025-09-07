const { remote } = require('webdriverio');

async function main() {
  const caps = {
    "platformName": "iOS",
    "appium:platformVersion": "18.6.2",
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
    // Open app ant 1 and 3 first
    await driver.activateApp('com.allstarunion.ta.ios.vn3');
    await driver.pause(1000);
    // Tap chua tri goc duoi
    await driver.execute('mobile: doubleTap', { x: 25, y: 696 });
    // Tap chua tri
    await driver.execute('mobile: doubleTap', { x: 286, y: 510 });
    await driver.execute('mobile: dragFromToForDuration', { duration: 0.5, fromX: 339, fromY: 235, toX: 96, toY: 233 });
    await driver.execute('mobile: doubleTap', { x: 365, y: 236 });
    await driver.execute('mobile: doubleTap', { x: 365, y: 236 });
    await driver.execute('mobile: doubleTap', { x: 365, y: 236 });
    await driver.execute('mobile: doubleTap', { x: 365, y: 236 });
    await driver.execute('mobile: doubleTap', { x: 365, y: 236 });
    await driver.execute('mobile: doubleTap', { x: 365, y: 236 });
    await driver.execute('mobile: doubleTap', { x: 365, y: 236 });
    await driver.execute('mobile: doubleTap', { x: 365, y: 236 });
    await driver.execute('mobile: doubleTap', { x: 365, y: 236 });
    await driver.execute('mobile: doubleTap', { x: 365, y: 236 });
    // Tap chua tri btn
    await driver.execute('mobile: tap', { x: 323, y: 803 });
    // Switch app
    await driver.activateApp('com.allstarunion.ta.ios.vn'); // Kang
    // Tap giup do ben trong
    await driver.execute('mobile: doubleTap', { x: 195, y: 800 }); // Tap giup do ben trong
    await driver.execute('mobile: doubleTap', { x: 195, y: 800 }); // Tap giup do ben trong

  }

  //await driver.deleteSession();
}

main().catch(console.log);
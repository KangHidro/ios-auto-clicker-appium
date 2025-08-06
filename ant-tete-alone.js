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

  for (let i = 0; i < 15; i++) {
    await driver.activateApp('com.allstarunion.ta.ios.vn'); // Active Kang
    // await driver.pause(16_000); // Chờ app load
    // await driver.execute('mobile: tap', { x: 350, y: 158 }); await driver.pause(350); // Tap close banner or click package
    // await driver.execute('mobile: tap', { x: 368, y: 58 }); await driver.pause(350); // Tap close package or diamond
    // await driver.execute('mobile: tap', { x: 368, y: 58 }); await driver.pause(350); // Tap Dịch ngọt
    // await driver.execute('mobile: tap', { x: 194, y: 580 }); await driver.pause(350); // Tap ra ngoài dịch ngọt
    await driver.execute('mobile: tap', { x: 275, y: 805 }); await driver.pause(350); // Tap bottom nav Liên minh 
    await driver.execute('mobile: tap', { x: 325, y: 550 }); await driver.pause(350); // Tap events
    await driver.execute('mobile: tap', { x: 190, y: 160 }); await driver.pause(350); // Tap event tete
    await driver.execute('mobile: tap', { x: 315, y: 795 }); await driver.pause(3500); // Go to tete
    await driver.execute('mobile: tap', { x: 195, y: 375 }); await driver.pause(350); // Tap tete
    await driver.execute('mobile: tap', { x: 268, y: 422 }); await driver.pause(350); // Tap tập kết
    await driver.execute('mobile: tap', { x: 123, y: 579 }); await driver.pause(350); // Tap chọn time
    await driver.execute('mobile: tap', { x: 295, y: 795 }); await driver.pause(350); // Tap Go!

    await driver.pause(330_000);
  }

  //await driver.deleteSession();
}

main().catch(console.log);
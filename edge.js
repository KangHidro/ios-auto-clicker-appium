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
  };
  const driver = await remote({
    protocol: "http",
    hostname: "127.0.0.1",
    port: 4723,
    path: "/wd/hub/",
    capabilities: caps
  });

  // await driver.activateApp('com.microsoft.msedge');

  // https://random-word-api.herokuapp.com/word?number=25

  const listWords = [
    "panfry",
    "simoleon",
    "feebs",
    "ponces",
    "venue",
    "hogweeds",
    "parkas",
    "mammey",
    "rejoices",
    "exuberances",
    "salmonoid",
    "hatchel"
  ];

  for (let i = 0; i < listWords.length; i++) {
    // await driver.execute('mobile: doubleTap', { x: 170, y: 65 });
    // await driver.execute('mobile: keys', { keys: [...listWords[i].split(), 'XCUIKeyboardKeyEnter'] });
    await driver.execute('mobile: doubleTap', { x: 170, y: 65 });
    const element = await driver.$('//XCUIElementTypeTextField[@name="Address"]');
    await element.elementSendKeys(element.elementId, listWords[i]);
    await driver.execute('mobile: tap', { x: 350, y: 745 });
    await driver.pause(5000);
  }

}

main().catch(console.log);
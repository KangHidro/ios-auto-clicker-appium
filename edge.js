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
  };
  const driver = await remote({
    protocol: "http",
    hostname: "127.0.0.1",
    port: 4723,
    path: "/wd/hub/",
    capabilities: caps
  });

  // await driver.activateApp('com.microsoft.msedge');

  // https://random-word-api.herokuapp.com/word?number=30

  const listWords = [
    "soukous",
    "storksbills",
    "ensigncies",
    "antimerger",
    "sussed",
    "drug",
    "incorpses",
    "dirty",
    "misspelling",
    "shallop",
    "austral",
    "jitterbugging",
    "junkyard",
    "constitute",
    "jargonistic",
    "genderizing",
    "constitution",
    "inky",
    "unnailing",
    "sunwards",
    "sumac",
    "predated"
  ];

  for (let i = 0; i < listWords.length; i++) {
    // await driver.execute('mobile: doubleTap', { x: 170, y: 65 });
    // await driver.execute('mobile: keys', { keys: [...listWords[i].split(), 'XCUIKeyboardKeyEnter'] });
    await driver.activateApp('com.microsoft.msedge');
    await driver.execute('mobile: doubleTap', { x: 170, y: 65 });
    const element = await driver.$('//XCUIElementTypeTextField[@name="Address"]');
    await element.elementSendKeys(element.elementId, `${listWords[i]} là gì`);
    await driver.execute('mobile: tap', { x: 350, y: 745 });
    await driver.pause(5000);
  }

}

main().catch(console.log);
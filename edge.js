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
    "admeasures",
    "makars",
    "univalves",
    "lenten",
    "lookup",
    "bricklike",
    "persiflage",
    "winegrowers",
    "helve",
    "octuple",
    "wofuller",
    "subnetwork",
    "firebug",
    "endorse",
    "rechew",
    "chudders",
    "cultures",
    "bluebooks",
    "geobotanies",
    "paraboloids",
    "shrived",
    "sixmo",
    "laterally",
    "prelatures",
    "poltergeist",
    "centralest",
    "kerseymeres",
    "obstructionists",
    "vinifications",
    "zirconium"
  ];

  for (let i = 0; i < listWords.length; i++) {
    // await driver.execute('mobile: doubleTap', { x: 170, y: 65 });
    // await driver.execute('mobile: keys', { keys: [...listWords[i].split(), 'XCUIKeyboardKeyEnter'] });
    await driver.activateApp('com.microsoft.msedge');
    await driver.execute('mobile: tap', { x: 170, y: 65 });
    const element = await driver.$('//XCUIElementTypeTextField[@name="Address"]');
    await element.elementSendKeys(element.elementId, `${listWords[ i ]} là gì`);
    await driver.execute('mobile: tap', { x: 350, y: 745 });
    await driver.pause(10000);
  }

}

main().catch(console.log);
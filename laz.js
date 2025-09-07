const { remote } = require('webdriverio');

async function main() {
  const caps = {
    'platformName': 'iOS',
    'appium:platformVersion': '18.6.2',
    'appium:automationName': 'xcuitest',
    'appium:deviceName': 'iPhone 12',
    'appium:xcodeOrgId': '9YAC7543MW',
    'appium:xcodeSigningId': 'Apple Developer',
    'appium:udid': '00008101-000E61640A01001E',
    '$cloud:appiumOptions': {
      'version': '2.19.0',
      'automationVersion': '7.35.1',
      'plugins': []
    },
    'appium:clearSystemFiles': true,
    'appium:newCommandTimeout': 3600,
  };
  const driver = await remote({
    protocol: 'http',
    hostname: '127.0.0.1',
    port: 4723,
    path: '/',
    capabilities: caps
  });

  // await driver.execute('mobile: tap', { x: 215, y: 477 });
  // await driver.execute('mobile: doubleTap', { x: 286, y: 510 });
  // await driver.execute('mobile: dragFromToForDuration', { duration: 0.5, fromX: 339, fromY: 235, toX: 96, toY: 233 });
  // await driver.execute('mobile: doubleTap', { x: 197, y: 497 }); buy tang toc

  // await driver.execute('mobile: tap', { x: 336, y: 341 });

  // Tưới
  // for (let i = 0; i < 39; i++) {
  //   await driver.execute('mobile: tap', { x: 345, y: 680 });
  //   await driver.pause(1750);
  // }

  // Lướt QC
  // for (let i = 0; i < 11; i++) {
  //   await driver.execute('mobile: dragFromToForDuration', { duration: 3, fromX: 190, fromY: 625, toX: 190, toY: 245 });
  // }

  // Lướt video / sp
  while (true) {
    await driver.execute('mobile: swipe', { direction: 'up' });
    await driver.pause(5000);
  }

}

main().catch(console.log);
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

  // open chest ///////////////////////////////////////
  // await driver.execute('mobile: tap', { x: 315, y: 75 }); // tap thuyền
  // await driver.pause(500);
  // await driver.execute('mobile: tap', { x: 225, y: 310 }); // tap chest
  // await driver.pause(200);
  // await driver.execute('mobile: tap', { x: 425, y: 245 }); // tap nút mở
  // await driver.pause(2000);
  // await driver.execute('mobile: tap', { x: 425, y: 245 }); // tap mở hòm
  // await driver.pause(1000);
  // await driver.execute('mobile: tap', { x: 425, y: 245 }); // tap nhận
  // await driver.pause(1000);
  // await driver.execute('mobile: tap', { x: 705, y: 35 }); // tap out
  // // open chest ///////////////////////////////////////
  // await driver.performActions([
  //   {
  //     type: 'pointer',
  //     id: 'move.up.1.lv',
  //     parameters: { pointerType: 'touch' },
  //     actions: [
  //       { type: 'pointerMove', duration: 0, x: 700, y: 140 },
  //       { type: 'pointerDown', button: 0 },
  //       { type: 'pointerMove', duration: 100, x: 700, y: 240 },
  //       { type: 'pointerUp', button: 0 },
  //       { type: 'pause', duration: 200 },
  //     ]
  //   }
  // ]);

  for (let i = 0; i < 27; i++) {
    // Thu hoạch 1 tầng dưới + trồng cây
    await driver.performActions([ {
      type: 'pointer',
      id: `{i}.tap.pot.1`,
      parameters: { pointerType: 'touch' },
      actions: [
        { type: 'pointerMove', duration: 0, x: 335, y: 335 },
        { type: 'pointerDown', button: 0 },
        { type: 'pause', duration: 200 },
        { type: 'pointerUp', button: 0 },
        { type: 'pause', duration: 200 },
      ]
    } ]);
    await driver.performActions([ {
      type: 'pointer',
      id: `${i}.harvert.1`,
      parameters: { pointerType: 'touch' },
      actions: [
        { type: 'pointerMove', duration: 0, x: 260, y: 225 }, // tap giỏ
        { type: 'pointerDown', button: 0 },
        { type: 'pointerMove', duration: 200, x: 335, y: 335 },
        { type: 'pointerMove', duration: 500, x: 640, y: 335 },
        { type: 'pointerMove', duration: 200, x: 640, y: 155 },
        { type: 'pointerMove', duration: 500, x: 335, y: 155 },
        { type: 'pointerUp', button: 0 },
        { type: 'pause', duration: 200 },
      ]
    } ]);
    await driver.performActions([ {
      type: 'pointer',
      id: `${i}.tap.pot.1`,
      parameters: { pointerType: 'touch' },
      actions: [
        { type: 'pointerMove', duration: 0, x: 335, y: 335 },
        { type: 'pointerDown', button: 0 },
        { type: 'pause', duration: 200 },
        { type: 'pointerUp', button: 0 },
        { type: 'pause', duration: 200 },
      ]
    } ]);
    await driver.performActions([ {
      type: 'pointer',
      id: `${i}.plant.1`,
      parameters: { pointerType: 'touch' },
      actions: [
        { type: 'pointerMove', duration: 0, x: 250, y: 305 }, // chọn cây
        { type: 'pointerDown', button: 0 },
        { type: 'pointerMove', duration: 200, x: 335, y: 335 },
        { type: 'pointerMove', duration: 500, x: 640, y: 335 },
        { type: 'pointerMove', duration: 200, x: 640, y: 155 },
        { type: 'pointerMove', duration: 500, x: 335, y: 155 },
        { type: 'pointerUp', button: 0 },
        { type: 'pause', duration: 200 },
      ]
    } ]);
    await driver.performActions([
      {
        type: 'pointer',
        id: `${i}.move.up.1.lv`,
        parameters: { pointerType: 'touch' },
        actions: [
          { type: 'pointerMove', duration: 0, x: 700, y: 140 },
          { type: 'pointerDown', button: 0 },
          { type: 'pointerMove', duration: 100, x: 700, y: 240 },
          { type: 'pointerUp', button: 0 },
          { type: 'pause', duration: 200 },
        ]
      }
    ]);
    await driver.performActions([
      {
        type: 'pointer',
        id: `${i}.move.up.1.lv`,
        parameters: { pointerType: 'touch' },
        actions: [
          { type: 'pointerMove', duration: 0, x: 700, y: 140 },
          { type: 'pointerDown', button: 0 },
          { type: 'pointerMove', duration: 100, x: 700, y: 240 },
          { type: 'pointerUp', button: 0 },
          { type: 'pause', duration: 200 },
        ]
      }
    ]);
    //////////////////////
    await driver.performActions([ {
      type: 'pointer',
      id: `${i}.tap.pot.1`,
      parameters: { pointerType: 'touch' },
      actions: [
        { type: 'pointerMove', duration: 0, x: 335, y: 335 },
        { type: 'pointerDown', button: 0 },
        { type: 'pause', duration: 200 },
        { type: 'pointerUp', button: 0 },
        { type: 'pause', duration: 200 },
      ]
    } ]);
    await driver.performActions([ {
      type: 'pointer',
      id: `${i}.harvert.1`,
      parameters: { pointerType: 'touch' },
      actions: [
        { type: 'pointerMove', duration: 0, x: 260, y: 225 }, // tap giỏ
        { type: 'pointerDown', button: 0 },
        { type: 'pointerMove', duration: 200, x: 335, y: 335 },
        { type: 'pointerMove', duration: 500, x: 640, y: 335 },
        { type: 'pointerMove', duration: 200, x: 640, y: 155 },
        { type: 'pointerMove', duration: 500, x: 335, y: 155 },
        { type: 'pointerUp', button: 0 },
        { type: 'pause', duration: 200 },
      ]
    } ]);
    await driver.performActions([ {
      type: 'pointer',
      id: `${i}.tap.pot.1`,
      parameters: { pointerType: 'touch' },
      actions: [
        { type: 'pointerMove', duration: 0, x: 335, y: 335 },
        { type: 'pointerDown', button: 0 },
        { type: 'pause', duration: 200 },
        { type: 'pointerUp', button: 0 },
        { type: 'pause', duration: 200 },
      ]
    } ]);
    await driver.performActions([ {
      type: 'pointer',
      id: `${i}.plant.1`,
      parameters: { pointerType: 'touch' },
      actions: [
        { type: 'pointerMove', duration: 0, x: 250, y: 305 }, // chọn cây
        { type: 'pointerDown', button: 0 },
        { type: 'pointerMove', duration: 200, x: 335, y: 335 },
        { type: 'pointerMove', duration: 500, x: 640, y: 335 },
        { type: 'pointerMove', duration: 200, x: 640, y: 155 },
        { type: 'pointerMove', duration: 500, x: 335, y: 155 },
        { type: 'pointerUp', button: 0 },
        { type: 'pause', duration: 200 },
      ]
    } ]);
    await driver.performActions([
      {
        type: 'pointer',
        id: `${i}.move.up.1.lv`,
        parameters: { pointerType: 'touch' },
        actions: [
          { type: 'pointerMove', duration: 0, x: 700, y: 140 },
          { type: 'pointerDown', button: 0 },
          { type: 'pointerMove', duration: 100, x: 700, y: 240 },
          { type: 'pointerUp', button: 0 },
          { type: 'pause', duration: 200 },
        ]
      }
    ]);
    await driver.performActions([
      {
        type: 'pointer',
        id: `${i}.move.up.1.lv`,
        parameters: { pointerType: 'touch' },
        actions: [
          { type: 'pointerMove', duration: 0, x: 700, y: 140 },
          { type: 'pointerDown', button: 0 },
          { type: 'pointerMove', duration: 100, x: 700, y: 240 },
          { type: 'pointerUp', button: 0 },
          { type: 'pause', duration: 200 },
        ]
      }
    ]);
    /////////////////
    await driver.performActions([ {
      type: 'pointer',
      id: `${i}.tap.pot.1`,
      parameters: { pointerType: 'touch' },
      actions: [
        { type: 'pointerMove', duration: 0, x: 335, y: 335 },
        { type: 'pointerDown', button: 0 },
        { type: 'pause', duration: 200 },
        { type: 'pointerUp', button: 0 },
        { type: 'pause', duration: 200 },
      ]
    } ]);
    await driver.performActions([ {
      type: 'pointer',
      id: `${i}.harvert.1`,
      parameters: { pointerType: 'touch' },
      actions: [
        { type: 'pointerMove', duration: 0, x: 260, y: 225 }, // tap giỏ
        { type: 'pointerDown', button: 0 },
        { type: 'pointerMove', duration: 200, x: 335, y: 335 },
        { type: 'pointerMove', duration: 500, x: 640, y: 335 },
        { type: 'pointerMove', duration: 200, x: 640, y: 155 },
        { type: 'pointerMove', duration: 500, x: 335, y: 155 },
        { type: 'pointerUp', button: 0 },
        { type: 'pause', duration: 200 },
      ]
    } ]);
    await driver.performActions([ {
      type: 'pointer',
      id: `${i}.tap.pot.1`,
      parameters: { pointerType: 'touch' },
      actions: [
        { type: 'pointerMove', duration: 0, x: 335, y: 335 },
        { type: 'pointerDown', button: 0 },
        { type: 'pause', duration: 200 },
        { type: 'pointerUp', button: 0 },
        { type: 'pause', duration: 200 },
      ]
    } ]);
    await driver.performActions([ {
      type: 'pointer',
      id: `${i}.plant.1`,
      parameters: { pointerType: 'touch' },
      actions: [
        { type: 'pointerMove', duration: 0, x: 250, y: 305 }, // chọn cây
        { type: 'pointerDown', button: 0 },
        { type: 'pointerMove', duration: 200, x: 335, y: 335 },
        { type: 'pointerMove', duration: 500, x: 640, y: 335 },
        { type: 'pointerMove', duration: 200, x: 640, y: 155 },
        { type: 'pointerMove', duration: 500, x: 335, y: 155 },
        { type: 'pointerUp', button: 0 },
        { type: 'pause', duration: 200 },
      ]
    } ]);
    await driver.performActions([
      {
        type: 'pointer',
        id: `${i}.move.down.1.lv`,
        parameters: { pointerType: 'touch' },
        actions: [
          { type: 'pointerMove', duration: 0, x: 700, y: 240 },
          { type: 'pointerDown', button: 0 },
          { type: 'pointerMove', duration: 100, x: 700, y: 140 },
          { type: 'pointerUp', button: 0 },
          { type: 'pause', duration: 200 },
        ]
      }
    ]);
    await driver.performActions([
      {
        type: 'pointer',
        id: `${i}.move.down.1.lv`,
        parameters: { pointerType: 'touch' },
        actions: [
          { type: 'pointerMove', duration: 0, x: 700, y: 240 },
          { type: 'pointerDown', button: 0 },
          { type: 'pointerMove', duration: 100, x: 700, y: 140 },
          { type: 'pointerUp', button: 0 },
          { type: 'pause', duration: 200 },
        ]
      }
    ]);
    await driver.performActions([
      {
        type: 'pointer',
        id: `${i}.move.down.1.lv`,
        parameters: { pointerType: 'touch' },
        actions: [
          { type: 'pointerMove', duration: 0, x: 700, y: 240 },
          { type: 'pointerDown', button: 0 },
          { type: 'pointerMove', duration: 100, x: 700, y: 140 },
          { type: 'pointerUp', button: 0 },
          { type: 'pause', duration: 200 },
        ]
      }
    ]);
    await driver.performActions([
      {
        type: 'pointer',
        id: `${i}.move.down.1.lv`,
        parameters: { pointerType: 'touch' },
        actions: [
          { type: 'pointerMove', duration: 0, x: 700, y: 240 },
          { type: 'pointerDown', button: 0 },
          { type: 'pointerMove', duration: 100, x: 700, y: 140 },
          { type: 'pointerUp', button: 0 },
          { type: 'pause', duration: 200 },
        ]
      }
    ]);
  }

  ///////////////// Down
  // await driver.performActions([
  //   {
  //     type: 'pointer',
  //     id: 'move.down.1.4lv',
  //     parameters: { pointerType: 'touch' },
  //     actions: [
  //       { type: 'pointerMove', duration: 0, x: 450, y: 300 },
  //       { type: 'pointerDown', button: 0 },
  //       { type: 'pointerMove', duration: 250, x: 450, y: 65 },
  //       { type: 'pointerUp', button: 0 },
  //       { type: 'pause', duration: 500 },
  //       { type: 'pointerMove', duration: 0, x: 450, y: 300 },
  //       { type: 'pointerDown', button: 0 },
  //       { type: 'pointerMove', duration: 250, x: 450, y: 65 },
  //       { type: 'pointerUp', button: 0 },
  //       { type: 'pause', duration: 500 },
  //       { type: 'pointerMove', duration: 0, x: 450, y: 300 },
  //       { type: 'pointerDown', button: 0 },
  //       { type: 'pointerMove', duration: 250, x: 450, y: 65 },
  //       { type: 'pointerUp', button: 0 },
  //       { type: 'pause', duration: 500 },
  //       { type: 'pointerMove', duration: 0, x: 450, y: 300 },
  //       { type: 'pointerDown', button: 0 },
  //       { type: 'pointerMove', duration: 250, x: 450, y: 65 },
  //       { type: 'pointerUp', button: 0 },
  //       { type: 'pause', duration: 200 },
  //     ]
  //   }
  // ]);
  // Thu hoạch 1 tầng dưới + trồng cây

}

main().catch(console.log);
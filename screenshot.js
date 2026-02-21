const { chromium } = require('playwright');
(async () => {
  const fs = require('fs');
  if (!fs.existsSync('C:/Users/AA/plombier-MEA-CLIM-ENERGIE/screenshots')) {
    fs.mkdirSync('C:/Users/AA/plombier-MEA-CLIM-ENERGIE/screenshots', { recursive: true });
  }
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 900 });

  const pages = [
    ['/', 'homepage'],
    ['/climatisation-installation', 'climatisation'],
    ['/chauffage-pompe-chaleur', 'pac'],
    ['/thermodynamique', 'thermodynamique'],
  ];

  for (const [path, name] of pages) {
    await page.goto('http://localhost:3001' + path, { waitUntil: 'networkidle' });
    await page.screenshot({ path: 'C:/Users/AA/plombier-MEA-CLIM-ENERGIE/screenshots/' + name + '.png', fullPage: false });
    console.log('Screenshot taken:', name);
  }
  await browser.close();
})();

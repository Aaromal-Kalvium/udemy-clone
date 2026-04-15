const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  page.on('console', msg => {
    const type = msg.type();
    const text = msg.text();
    console.log(`[console:${type}] ${text}`);
  });

  page.on('pageerror', err => {
    console.log('[pageerror]', err.toString());
  });

  page.on('requestfailed', request => {
    console.log('[requestfailed]', request.url(), request.failure()?.errorText);
  });

  await page.goto('http://localhost:8081', { waitUntil: 'networkidle' });

  const content = await page.content();
  console.log('PAGE_CONTENT_START');
  console.log(content);
  console.log('PAGE_CONTENT_END');

  await browser.close();
})();
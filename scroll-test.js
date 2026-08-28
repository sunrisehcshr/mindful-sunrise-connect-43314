const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 2, // Simulate retina
  });

  // Capture console errors
  page.on('console', msg => console.log('CONSOLE:', msg.type(), msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.message));

  await page.goto('http://localhost:3000/services', { waitUntil: 'networkidle' });
  
  // Wait for initial render
  await page.waitForTimeout(2000);

  // Scroll down slowly (simulate trackpad)
  console.log('Starting scroll test...');
  for (let i = 0; i < 50; i++) {
    await page.mouse.wheel(0, 100);
    await page.waitForTimeout(16); // ~60fps
  }
  
  await page.waitForTimeout(1000);

  // Scroll up
  for (let i = 0; i < 50; i++) {
    await page.mouse.wheel(0, -100);
    await page.waitForTimeout(16);
  }

  await page.waitForTimeout(1000);

  // Check for layout shifts
  const layoutShifts = await page.evaluate(() => {
    return new Promise(resolve => {
      let cls = 0;
      const observer = new PerformanceObserver(list => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'layout-shift' && !entry.hadRecentInput) {
            cls += entry.value;
          }
        }
      });
      observer.observe({ type: 'layout-shift', buffered: true });
      setTimeout(() => {
        observer.disconnect();
        resolve(cls);
      }, 2000);
    });
  });

  console.log('CLS during scroll:', layoutShifts);

  // Take screenshot
  await page.screenshot({ path: '/workspace/scroll-test-result.png', fullPage: true });

  // Get computed styles of problematic elements
  const curveStyles = await page.evaluate(() => {
    const curves = document.querySelectorAll('[class*="CurveTransition"], svg path[d*="Q"]');
    return Array.from(curves).map(el => ({
      tag: el.tagName,
      class: el.className,
      d: el.getAttribute('d'),
      transform: getComputedStyle(el).transform,
    }));
  });
  console.log('Curve elements:', JSON.stringify(curveStyles, null, 2));

  const canvasElements = await page.evaluate(() => {
    const canvases = document.querySelectorAll('canvas');
    return Array.from(canvases).map(c => ({
      width: c.width,
      height: c.height,
      style: c.style.cssText,
      parent: c.parentElement?.className,
    }));
  });
  console.log('Canvas elements:', JSON.stringify(canvasElements, null, 2));

  await browser.close();
})();
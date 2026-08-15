import { chromium } from "playwright";

const outDir = "C:\\Users\\musma\\AppData\\Local\\Temp\\claude\\d--Portfolio\\218fd6f5-3c2c-4feb-b295-88f0ba2d403f\\scratchpad";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

await page.goto("https://yasir-portfolio-three.vercel.app/", { waitUntil: "networkidle", timeout: 45000 });
await page.waitForTimeout(1500);

// Scroll through gradually so any scroll-triggered animation has settled by the time we screenshot
const height = await page.evaluate(() => document.body.scrollHeight);
for (let y = 0; y < height; y += 500) {
  await page.evaluate((yy) => window.scrollTo(0, yy), y);
  await page.waitForTimeout(250);
}
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(800);

await page.screenshot({ path: `${outDir}\\ref-top.png` });
await page.evaluate(() => window.scrollTo(0, window.innerHeight));
await page.waitForTimeout(500);
await page.screenshot({ path: `${outDir}\\ref-mid.png` });
await page.screenshot({ path: `${outDir}\\ref-full.png`, fullPage: true });

await browser.close();
console.log("done");

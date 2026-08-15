import { chromium } from "playwright";

const outDir = "C:\\Users\\musma\\AppData\\Local\\Temp\\claude\\d--Portfolio\\218fd6f5-3c2c-4feb-b295-88f0ba2d403f\\scratchpad";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

await page.goto("https://yasir-portfolio-three.vercel.app/", { waitUntil: "load", timeout: 45000 });
await page.waitForTimeout(2500);

const height = await page.evaluate(() => document.body.scrollHeight);
console.log("PAGE_HEIGHT:", height);

let shot = 0;
for (let y = 0; y < height; y += 850) {
  await page.evaluate((yy) => window.scrollTo(0, yy), y);
  await page.waitForTimeout(600);
  await page.screenshot({ path: `${outDir}\\ref-section-${shot}.png` });
  shot++;
}

await browser.close();
console.log("done, shots:", shot);

import { chromium } from "playwright";

const outDir = "C:\\Users\\musma\\AppData\\Local\\Temp\\claude\\d--Portfolio\\218fd6f5-3c2c-4feb-b295-88f0ba2d403f\\scratchpad";

const browser = await chromium.launch({ args: ["--use-gl=swiftshader"] });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

await page.goto("http://localhost:5173/", { waitUntil: "networkidle" });
await page.waitForTimeout(1000);

const height = await page.evaluate(() => document.body.scrollHeight);
for (let y = 0; y < height; y += 400) {
  await page.evaluate((yy) => window.scrollTo(0, yy), y);
  await page.waitForTimeout(80);
}
await page.waitForTimeout(300);

const sections = ["#what-i-do", "#work", "#about", "#skills", "#contact"];
for (const sel of sections) {
  const el = page.locator(sel);
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(250);
  const name = sel.replace("#", "");
  await el.screenshot({ path: `${outDir}\\sec-${name}.png` });
}

// how-i-build and pipeline-showcase have no id, locate via heading text
const howIBuild = page.locator("text=From Raw Data to Intelligent Automation").locator("../..");
await howIBuild.scrollIntoViewIfNeeded();
await page.waitForTimeout(250);
await howIBuild.screenshot({ path: `${outDir}\\sec-howibuild.png` });

console.log("done");
await browser.close();

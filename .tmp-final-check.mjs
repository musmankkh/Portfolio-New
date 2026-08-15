import { chromium } from "playwright";

const outDir = "C:\\Users\\musma\\AppData\\Local\\Temp\\claude\\d--Portfolio\\218fd6f5-3c2c-4feb-b295-88f0ba2d403f\\scratchpad";

const browser = await chromium.launch({ args: ["--use-gl=swiftshader"] });

// Desktop: remaining sections
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on("console", (msg) => { if (msg.type() === "error") errors.push(msg.text()); });
page.on("pageerror", (err) => errors.push(String(err)));

await page.goto("http://localhost:5173/", { waitUntil: "networkidle" });
const height = await page.evaluate(() => document.body.scrollHeight);
for (let y = 0; y < height; y += 400) {
  await page.evaluate((yy) => window.scrollTo(0, yy), y);
  await page.waitForTimeout(80);
}
await page.waitForTimeout(300);

const pipeline = page.locator("text=Where Data Becomes Action").locator("../..");
await pipeline.scrollIntoViewIfNeeded();
await page.waitForTimeout(300);
await pipeline.screenshot({ path: `${outDir}\\sec-pipeline.png` });

await page.locator("#experience").scrollIntoViewIfNeeded();
await page.waitForTimeout(300);
await page.locator("#experience").screenshot({ path: `${outDir}\\sec-experience.png` });

console.log("DESKTOP_ERRORS:", JSON.stringify(errors));
await page.close();

// Mobile full page
const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
const mobileErrors = [];
mobile.on("console", (msg) => { if (msg.type() === "error") mobileErrors.push(msg.text()); });
mobile.on("pageerror", (err) => mobileErrors.push(String(err)));

await mobile.goto("http://localhost:5173/", { waitUntil: "networkidle" });
await mobile.waitForTimeout(1200);
await mobile.screenshot({ path: `${outDir}\\mobile-hero.png` });

const mHeight = await mobile.evaluate(() => document.body.scrollHeight);
for (let y = 0; y < mHeight; y += 300) {
  await mobile.evaluate((yy) => window.scrollTo(0, yy), y);
  await mobile.waitForTimeout(70);
}
await mobile.waitForTimeout(300);
await mobile.screenshot({ path: `${outDir}\\mobile-full.png`, fullPage: true });

console.log("MOBILE_ERRORS:", JSON.stringify(mobileErrors));

await browser.close();

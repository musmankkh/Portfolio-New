import { chromium } from "playwright";

const outDir = "C:\\Users\\musma\\AppData\\Local\\Temp\\claude\\d--Portfolio\\218fd6f5-3c2c-4feb-b295-88f0ba2d403f\\scratchpad";

const browser = await chromium.launch({
  args: ["--use-gl=swiftshader", "--enable-webgl", "--ignore-gpu-blocklist"],
});
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

const errors = [];
const warnings = [];
page.on("console", (msg) => {
  if (msg.type() === "error") errors.push(msg.text());
  if (msg.type() === "warning") warnings.push(msg.text());
});
page.on("pageerror", (err) => errors.push(String(err)));

await page.goto("http://localhost:5173/", { waitUntil: "networkidle", timeout: 30000 });
await page.waitForTimeout(2000);
await page.screenshot({ path: `${outDir}\\rebuild-hero.png` });

const canvasCount = await page.locator("canvas").count();
console.log("CANVAS_COUNT:", canvasCount);

// scroll through full page to trigger reveals + tsparticles
const height = await page.evaluate(() => document.body.scrollHeight);
for (let y = 0; y < height; y += 400) {
  await page.evaluate((yy) => window.scrollTo(0, yy), y);
  await page.waitForTimeout(90);
}
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(500);

await page.screenshot({ path: `${outDir}\\rebuild-full.png`, fullPage: true });

console.log("CONSOLE_ERRORS:", JSON.stringify(errors));
console.log("CONSOLE_WARNINGS_SAMPLE:", JSON.stringify(warnings.slice(0, 10)));

await browser.close();

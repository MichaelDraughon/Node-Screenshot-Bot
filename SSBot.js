const puppeteer = require('puppeteer');


if (process.argv[2] == "-h") {
  console.log("use /'-f/' to indicate that you are using the full URL (including https://www.*)\notherwise, the program will use the link you have provided.");
} else if (process.argv[2] == "-f") {
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(process.argv[3]);
    await page.screenshot({
      path: 'example.png'
    });

    await browser.close();
  })();
} else if (process.argv[2] != "-f") {
  try {
    (async () => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto("https://www." + process.argv[2]);
      await page.screenshot({
        path: 'example.png'
      });

      await browser.close();
    })();
  } catch (e) {
    console.log("make sure your link is correct")
  }
}

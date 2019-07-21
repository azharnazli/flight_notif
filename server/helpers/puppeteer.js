const puppeteer = require('puppeteer')

const baseUrl = (dep, ari, date) => `https://www.tiket.com/pesawat/search?d=${dep}&a=${ari}&dType=AIRPORT&aType=AIRPORT&date=${date}&adult=1&child=0&infant=0&class=economy`

module.exports = async (dep, ari, date) => {
    let browser = await puppeteer.launch({
        // headless: false
    })
    let page = await browser.newPage()
    

    const data = await page.goto(baseUrl(dep, ari, date), { waitUntil: 'networkidle0' })
    await page.setViewport({
        width: 1200,
        height: 800
    });

    await autoScroll(page)

    let elements = await page.$$('div[class="wrapper-flight-list"]')
    let results = []

    for (let element of elements) {
        let company = await element.$eval(('div[class="text-marketing-airline"]'), node => node.innerText.trim())
        let time = await element.$eval(('div[class="text-time"]'), node => node.innerText.trim())
        let price = await element.$eval(('div[class="text-price"]'), node => node.innerText.trim())
        let logo = await element.$eval(('div[class="list-horizontal__top logo-airline"] > img'), node => node.getAttribute('src'))

        results.push({
            company,
            time,
            price,
            logo
        })
    }
    await browser.close()
    return results
}

async function autoScroll(page){
    await page.evaluate(async () => {
        await new Promise((resolve, reject) => {
            var totalHeight = 0;
            var distance = 500;
            var timer = setInterval(() => {
                var scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if(totalHeight >= scrollHeight){
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    });
}
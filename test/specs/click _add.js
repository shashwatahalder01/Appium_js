const HomePage = require('../../pageObjects/home.page.js');
const data = require('../../data/data');
const expect = require('chai').expect;
const multiremote = require('webdriverio');



describe('Home page tests', () => {
    let homepage = HomePage;
    const delay = ms => new Promise(res => setTimeout(res, ms));
    // autoLaunch = false;
    // before(async () => {
    //     driver.reset();
    // });

    // // Execute a block of code before every test
    // beforeEach(() => {
    //     driver.launchApp();
    // });


    it('#Verify user is able to go to menu', async () => {
        await homepage.click_product();
        await delay(5000);
        console.log("Waited 5s");
        // await homepage.click_add_to_cart();
        // await delay(5000);
        // console.log("Waited 5s");
        // driver.back();
        // await delay(5000);
        // console.log("Waited 5s");
        // await homepage.click_cart();

        // expect(await (await homepage.store).waitForDisplayed({ timeout: data.threeSeconds })).equal(true);
    });


    // Execute a block of code after every test
    // afterEach(() => {
    //     driver.closeApp();
    // });

    // after(() => {
    //     driver.reset();
    // });
})
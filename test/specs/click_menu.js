const HomePage = require('../../pageObjects/home.page.js');
const data = require('../../data/data');
const expect = require('chai').expect;
const multiremote = require('webdriverio');



describe('Home page tests', () => {
    let homepage = HomePage;
    const delay = ms => new Promise(res => setTimeout(res, ms));
    // autoLaunch = false;
    // before(async () => {
    //     // driver.reset();
    // });

    // Execute a block of code before every test
    // beforeEach(() => {
    //     driver.launchApp();
    // });


    it('#Verify user is able to go to menu', async () => {
        await homepage.clickMenu();
        await delay(5000);
        console.log("Waited 5s");
        // expect(await (await homepage.mode).waitForDisplayed({ timeout: data.threeSeconds })).equal(true);
    });


    // Execute a block of code after every test
    // afterEach(() => {
    //     driver.closeApp();
    // });

    // after(() => {
    //     driver.reset();
    // });
})
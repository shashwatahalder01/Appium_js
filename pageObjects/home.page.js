const Common = require('./common.page');
const data = require('../data/data');

class HomePage extends Common {

    // Methods
    async clickMenu() {
        await (await this.menu).waitForDisplayed({ timeout: data.threeSeconds });
        await (await this.menu).click();
    }

    async clickSearch() {
        await (await this.search).waitForDisplayed({ timeout: data.threeSeconds });
        await (await this.search).click();
    }

    async clickhotlistBell() {
        await (await this.hotlist_bell).waitForDisplayed({ timeout: data.threeSeconds });
        await (await this.hotlist_bell).click();
    }

    async clickNewsFeed() {
        await (await this.newsFeed).waitForDisplayed({ timeout: data.threeSeconds });
        await (await this.newsFeed).click();
    }

    async clickGiftCards() {
        await (await this.giftCards).waitForDisplayed({ timeout: data.threeSeconds });
        await (await this.giftCards).click();
    }

    async clickacounts() {
        await (await this.account).waitForDisplayed({ timeout: data.threeSeconds });
        await (await this.account).click();
    }

    async clickcategories() {
        await (await this.categories).waitForDisplayed({ timeout: data.threeSeconds });
        await (await this.categories).click();
    }

    async clicklaptop() {
        await (await this.laptop).waitForDisplayed({ timeout: data.threeSeconds });
        await (await this.laptop).click();
    }

    async clickfirst_item() {
        await (await this.first_item).waitForDisplayed({ timeout: data.threeSeconds });
        await (await this.first_item).click();
    }

    async get_first_item_category() {
        await (await this.item_category).waitForDisplayed({ timeout: data.threeSeconds });
        console.log( await (await this.item_category).getText() );
    }


    async click_account() {
        await (await this.account).waitForDisplayed({ timeout: data.threeSeconds });
        console.log( await (await this.account).click());
    }

    async click_cart() {
        await (await this.cart).waitForDisplayed({ timeout: data.threeSeconds });
        console.log( await (await this.cart).click());
    }

    async click_product() {
        await (await this.product).waitForDisplayed({ timeout: data.threeSeconds });
        console.log( await (await this.product).click());
    }

    async click_add_to_cart() {
        const elem = $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.RelativeLayout[2]/android.widget.LinearLayout[2]/android.widget.TextView[1]');
        // elem.scrollIntoView();
        // elem.click();
        driver.touchScroll(elem)
        // await (await this.add_to_cart.scrollIntoView()).waitForDisplayed({ timeout: data.threeSeconds });
        // console.log( await (await this.add_to_cart).click());
    }

 
 

    

}

module.exports = new HomePage();
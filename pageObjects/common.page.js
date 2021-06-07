const data = require('../data/data');
const multiremote = require('webdriverio');
class Common {
  /**
   * Define Elements
   */
  // Home screen
  get menu() { return $('//android.widget.ImageView[@resource-id="bd.com.evaly.evalyshop:id/menuBtn"]'); }
  get search() { return $('//android.widget.Button[@resource-id="com.augmedix.phone.prod:id/btn_start"]'); }
  get hotlist_bell() { return $('//android.widget.ImageView[@resource-id="bd.com.evaly.evalyshop:id/hotlist_bell"]'); }
  get newsFeed() { return $('//android.widget.ImageView[@resource-id="bd.com.evaly.evalyshop:id/btn1Image"]'); }
  get giftCards() { return $('//android.widget.ImageView[@resource-id="bd.com.evaly.evalyshop:id/btn2Image"]'); }
  get express() { return $('//android.widget.ImageView[@resource-id="bd.com.evaly.evalyshop:id/btn3Image"]'); }
  get categories() { return $('//android.widget.ImageView[@resource-id="bd.com.evaly.evalyshop:id/btn4Image"]'); }
  get orders() { return $('//android.widget.ImageView[@resource-id="bd.com.evaly.evalyshop:id/btn5Image"]'); }

  get home() { return $('//android.widget.FrameLayout[@resource-id="bd.com.evaly.evalyshop:id/homeFragment"]'); }
  get wishlist() { return $('//android.widget.FrameLayout[@resource-id="bd.com.evaly.evalyshop:id/wishListFragment"]'); }
  get campaigns() { return $('//android.widget.FrameLayout[@resource-id="bd.com.evaly.evalyshop:id/campaignFragment"]'); }
  get cart() { return $('//android.widget.FrameLayout[@resource-id="bd.com.evaly.evalyshop:id/cartFragment"]'); }
  get account() { return $('//android.widget.FrameLayout[@resource-id="bd.com.evaly.evalyshop:id/accountFragment"]'); }
  
  
  
  //MENU
  get mode() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[1]/android.view.ViewGroup/android.widget.TextView[1]'); }


  // NewsFeed
  get public() { return $('//android.widget.LinearLayout[@content-desc="PUBLIC"]'); }

  // Store
  get store() { return $('//android.widget.LinearLayout[@content-desc="STORE"]'); }

  // categories
  get laptop() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.widget.FrameLayout/android.widget.FrameLayout[1]/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[2]/android.view.ViewGroup'); }
  // get laptop() { return $('//android.widget.ImageView[@resource-id="bd.com.evaly.evalyshop:id/image"]'); }
  get first_item() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.widget.FrameLayout/android.widget.FrameLayout[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[1]/android.view.ViewGroup/android.widget.ImageView'); }
  get item_category() { return $('/android.widget.TextView[@text="Laptop"]'); }
 


  //home
  get product() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.widget.FrameLayout/android.widget.FrameLayout[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/androidx.recyclerview.widget.RecyclerView[2]/android.widget.FrameLayout[1]/android.view.ViewGroup'); }
  get add_to_cart() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.RelativeLayout[2]/android.widget.LinearLayout[2]/android.widget.TextView[1]'); }


}
module.exports = Common;

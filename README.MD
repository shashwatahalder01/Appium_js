# Appium_Js

## change Apk path

## run all tests
    
    $ npx wdio run wdio.conf.js
        or
    $ npx wdio wdio.conf.js
        or
    $ npx wdio run ./wdio.conf.js
            or
    $ wdio run ./wdio.conf.js

## run single test

    $ npx wdio run ./wdio.conf.js --spec file_name

    $ npx wdio run ./wdio.conf.js --spec click_menu.js
    $ npx wdio run ./wdio.conf.js --spec click_newsfeed.js
    $ npx wdio run ./wdio.conf.js --spec click_account.js
    $ npx wdio run ./wdio.conf.js --spec click_giftCards.js
    $ npx wdio run ./wdio.conf.js --spec select_category.js
    $ npx wdio run ./wdio.conf.js --spec test_add_to_cart.js
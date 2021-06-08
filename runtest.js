var exec = require('child_process').exec, child;

child = exec('npx wdio run ./wdio.conf.js && npx allure generate --clean && allure open',
    function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
             console.log('exec error: ' + error);
        }
    });

// child = exec('npx allure  generate allure-report1  --clean && allure open ',
//     function (error, stdout, stderr) {
//         console.log('stdout: ' + stdout);
//         console.log('stderr: ' + stderr);
//         if (error !== null) {
//              console.log('exec error: ' + error);
//         }
//     });

const {FakeBrowser} = require('fakebrowser');

!(async () => {
    const createBrowserAndGoto = async (dd, userDataDir, url) => {
        const builder = new FakeBrowser.Builder()
            .deviceDescriptor(dd)
            .vanillaLaunchOptions({
                headless: false,
            })
            .userDataDir(userDataDir);

        const fakeBrowser = await builder.launch();
        const page = await fakeBrowser.vanillaBrowser.newPage();
    //    page['_client'].send('ServiceWorker.setForceUpdateOnPageLoad', { forceUpdateOnPageLoad: true });
     //   console.log();
        await page.goto(url);

        // ***** Do something automatic *****

        // Don't forget to close your browser to release resources
        await fakeBrowser.shutdown();
    };

    createBrowserAndGoto(
        require('./device-hub-demo/Windows.json'),
        './fakeBrowserUserData6',
        'https://google.com',
    ).then(e => e);

    // createBrowserAndGoto(
    //     require('./device-hub-demo/macOS.json'),
    //     './fakeBrowserUserData4',
    //     'https://fingerprintjs.github.io/fingerprintjs/',
    // ).then(e => e);
})();

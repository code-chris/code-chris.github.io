import {Aurelia, LogManager} from "aurelia-framework";
import {PLATFORM} from "aurelia-pal";

import "../content/main.scss";

Promise.config({
    longStackTraces: false,
    warnings: false
});

(<any>window).Promise = Promise;

export function configure(aurelia: Aurelia) {
    aurelia.use
        .standardConfiguration();

    if (window.location.href.indexOf("ckotzbauer.github.io") === -1) {
        aurelia.use
            .developmentLogging();
    } else {
        aurelia.use.plugin(PLATFORM.moduleName('aurelia-google-analytics'), config => {
            config.init('UA-74794817-1');
            config.attach({
                logging: {
                    enabled: true
                },
                pageTracking: {
                    enabled: true
                },
                clickTracking: {
                    enabled: true
                }
            });
        });
    }

    LogManager.setLevel(3);

    aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName("App"), document.body));
};

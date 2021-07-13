import { Aurelia, LogManager } from "aurelia-framework";
import { PLATFORM } from "aurelia-pal";

import "../content/main.scss";

export function configure(aurelia: Aurelia) {
    aurelia.use
        .standardConfiguration();

    if (window.location.href.indexOf("ckotzbauer.github.io") === -1) {
        aurelia.use
            .developmentLogging();
    }

    LogManager.setLevel(3);

    aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName("App"), document.body));
};

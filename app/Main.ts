import {Aurelia, LogManager} from "aurelia-framework";
import {bootstrap} from 'aurelia-bootstrapper-webpack';

import "../content/main.scss";

bootstrap((aurelia: Aurelia): void => {
    aurelia.use
        .standardConfiguration()
        .globalResources("infrastructure/image");

    if (window.location.href.indexOf("code-chris.github.io") === -1) {
        aurelia.use.developmentLogging();
    }

    LogManager.setLevel(3);

    aurelia.start().then(() => aurelia.setRoot("App", document.body));
});

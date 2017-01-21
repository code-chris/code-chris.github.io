import {RouterConfiguration} from 'aurelia-router';
import {Routes} from "./infrastructure/Routes";
import {registerLanguage} from "highlight.js";
import * as highlightJS from "highlight/js";
import * as highlightCSS from "highlight/css";
import * as highlightLESS from "highlight/less";
import * as highlightSCSS from "highlight/scss";
import * as highlightTS from "highlight/ts";
import * as modernizr from "modernizr";
import * as fetch from "fetch";

export class App {

    public static siteUrl: string = ".";

    public configureRouter(config: RouterConfiguration) {
        config.title = "Development Experiences";
        config.map(Routes.routes);
    }

    constructor() {
        registerLanguage("javascript", <any>highlightJS);
        registerLanguage("css", <any>highlightCSS);
        registerLanguage("less", <any>highlightLESS);
        registerLanguage("scss", <any>highlightSCSS);
        registerLanguage("typescript", <any>highlightTS);
        modernizr;
        fetch;
    }
}

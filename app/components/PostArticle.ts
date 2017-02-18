import {PostData} from "../contracts/PostData";
import {bindable} from "aurelia-framework";
import {App} from "../App";
import {highlightBlock} from "highlight.js";
import * as $ from "jquery";
import {autoinject} from "aurelia-dependency-injection";

@autoinject
export class PostArticle {

    @bindable
    private postData: PostData;
    @bindable
    private showComments: boolean;

    private siteUrl: string = App.siteUrl;

    constructor(private view: Element) {
    }

    public attached(): void {
        $("pre code", this.view).each((index: number, element: Element) => {
            highlightBlock(element);
        });
    }
}

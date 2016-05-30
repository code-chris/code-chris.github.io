import {PostData} from "../contracts/PostData";
import {bindable} from "aurelia-framework";
import {App} from "../App";
import {highlightBlock} from "highlight.js";
import * as $ from "jquery";

export class PostArticle {

    @bindable
    private postData: PostData;
    @bindable
    private showComments: boolean;

    private siteUrl: string = App.siteUrl;

    public attached(view: Element): void {
        $("pre code", view).each((index: number, element: Element) => {
            highlightBlock(element);
        });
    }
}

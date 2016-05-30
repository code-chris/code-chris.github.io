import {bindable} from "aurelia-framework";

export class ReadingTime {

    @bindable
    private pageContent: string;
    private readingTime: string;

    public bind() {
        var wordsPerMinute: number = 175;
        var result: number = Math.round(this.strip(this.pageContent).split(" ").length / wordsPerMinute);

        if (result < 1) {
            this.readingTime = `Reading time ~1 minute`;
        } else {
            this.readingTime = `Reading time ~${result} minutes`;
        }
    }

    private strip(html: string) {
        var tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    }
}

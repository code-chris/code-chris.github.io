import {bindable} from "aurelia-framework";
import {App} from "../App";

export class Disqus {

    @bindable
    private postLink: string;

    private enableDisqus() {
        window.disq = {};
        if (window.disq.loaded) {
            window.DISQUS.reset({
                reload: true
            });
        } else {
            (function () {
                var dsq = document.createElement('script');
                dsq.type = 'text/javascript';
                dsq.async = true;
                dsq.src = 'https://ckotzbauer.disqus.com/embed.js';
                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
            })();

            window.disq.loaded = true;
        }
    }

    public attached(): void {
        var disqusIdentifier: string = this.postLink;

        window.disqus_config = function() {
            this.page.identifier = disqusIdentifier;
            this.page.url        = disqusIdentifier;
            this.page.title      = disqusIdentifier;
        };

        this.enableDisqus();
    }
}

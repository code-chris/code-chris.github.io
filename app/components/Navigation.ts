import {Router} from "aurelia-router";
import {autoinject} from "aurelia-framework";
import "script!jquery";

@autoinject
export class Navigation {

    private router: Router;
    private host: string;

    constructor(router: Router) {
        this.router = router;
        this.host = (<any>router.history).location.origin;
    }

    public attached(): void {
        // Dirty script execution :)
        require("script!scripts");
    }

    public goToPosts(): void {
        this.router.navigateToRoute("postList", { year: "2016", month: "" });
    }

    public goToTags(): void {
        this.router.navigateToRoute("tags", { tag: "" });
    }
}

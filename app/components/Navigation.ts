import {Router} from "aurelia-router";
import {autoinject} from "aurelia-framework";

@autoinject
export class Navigation {

    private router: Router;
    private host: string;

    constructor(router: Router) {
        this.router = router;
        this.host = (<any>router.history).location.origin;
    }

    public goToPosts(): void {
        this.router.navigate("posts");
    }

    public goToTags(): void {
        this.router.navigateToRoute("tags", { tag: "" });
    }
}

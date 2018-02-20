import {bindable, autoinject} from "aurelia-framework";
import {PostData} from "../../contracts/PostData";
import {PostService} from "../../services/PostService";
import {NavModel} from "aurelia-router";
import {RouteConfig, Router} from "aurelia-router";

@autoinject
export class Post {

    private postData: PostData;
    private postService: PostService;
    private router: Router;

    private title: string = "Development Experiences";
    private imageUrl: string = "content/images/header.jpg";

    constructor(postService: PostService, router: Router) {
        this.postService = postService;
        this.router = router;
    }

    public activate(params: any, routeConfig: RouteConfig): Promise<PostData> {
        var year: string = params.year;
        var month: string = params.month;
        var title: string = params.title;

        return this.postService.loadPost(year, month, title)
            .then((postData: PostData) => {
                this.postData = postData;
                routeConfig.navModel.title = postData.title;
                return postData;
            });
    }

    public goBack(): void {
        this.router.navigate("posts");
    }
}

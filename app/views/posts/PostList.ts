import {PostData} from "../../contracts/PostData";
import {autoinject} from "aurelia-framework";
import {PostService} from "../../services/PostService";

@autoinject
export class PostList {

    private posts: PostData[];
    private postService: PostService;

    private title: string = "Development Experiences";
    private imageUrl: string = "content/images/header.jpg";

    constructor(postService: PostService) {
        this.postService = postService;
    }

    public activate(params: any): Promise<PostData[]> {
        var year: string = params.year;
        var month: string = params.month;

        return this.postService.loadPosts(year, month)
            .then(postData => this.posts = postData);
    }
}

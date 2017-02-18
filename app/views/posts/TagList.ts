import {PostData} from "../../contracts/PostData";
import {PostService} from "../../services/PostService";
import {autoinject} from "aurelia-framework";

@autoinject
export class TagList {

    private posts: PostData[];
    private postService: PostService;

    private title: string = "Development Experiences";
    private imageUrl: string = "content/images/header.jpg";

    constructor(postService: PostService) {
        this.postService = postService;
    }

    public activate(params: any): Promise<PostData[]> {
        var tag: string = params.tag;

        return this.postService.loadPostsByTag(tag)
            .then(postData => this.posts = postData);
    }
}

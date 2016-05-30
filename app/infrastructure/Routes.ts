import {RouteConfig} from "aurelia-router";

export class Routes {

    public static routes: RouteConfig[] = [
        { route: '', name: 'root', redirect: "posts/" },
        { route: ['posts/', 'posts/:year/', 'posts/:year/:month'], name: 'postList', moduleId: 'views/PostList', title: 'Posts' },
        { route: ['tags/', 'tags/:tag/'], name: 'tags', moduleId: 'views/TagList', title: 'Tags' },
        { route: 'posts/:year/:month/:title', name: 'post', moduleId: 'views/Post', title: '' }
    ];
}

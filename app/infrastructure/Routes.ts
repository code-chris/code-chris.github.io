import {RouteConfig} from "aurelia-router";

export class Routes {

    public static routes: RouteConfig[] = [
        { route: '', name: 'root', redirect: "home/" },
        { route: 'home/', name: 'home', moduleId: 'views/home/Home', title: '' },
        { route: ['posts/', 'posts/:year/', 'posts/:year/:month'], name: 'postList', moduleId: 'views/posts/PostList', title: 'Posts' },
        { route: ['tags/', 'tags/:tag/'], name: 'tags', moduleId: 'views/posts/TagList', title: 'Tags' },
        { route: 'posts/:year/:month/:title', name: 'post', moduleId: 'views/posts/Post', title: '' }
    ];
}

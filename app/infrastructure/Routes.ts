import {RouteConfig} from "aurelia-router";
import {PLATFORM} from "aurelia-pal";

export class Routes {

    public static routes: RouteConfig[] = [
        { route: '', name: 'root', redirect: "home/" },
        { route: 'home/', name: 'home', moduleId: PLATFORM.moduleName('views/home/Home'), title: '' },
        { route: ['posts/', 'posts/:year/', 'posts/:year/:month'], name: 'postList', moduleId: PLATFORM.moduleName('views/posts/PostList'), title: 'Posts' },
        { route: ['tags/', 'tags/:tag/'], name: 'tags', moduleId: PLATFORM.moduleName('views/posts/TagList'), title: 'Tags' },
        { route: 'posts/:year/:month/:title', name: 'post', moduleId: PLATFORM.moduleName('views/posts/Post'), title: '' }
    ];
}

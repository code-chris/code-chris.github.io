import {PostData} from "../contracts/PostData";
import {HttpClient} from 'aurelia-fetch-client';
import {autoinject} from "aurelia-framework";
import * as markdown from "markdown-it";
import * as $ from "jquery";
import * as moment from "moment";
import {PostCache} from "./PostCache";
import {App} from "../App";

@autoinject
export class PostService {

    private http: HttpClient;
    private postCache: PostCache;

    constructor(http: HttpClient, postCache: PostCache) {
        http.configure(config => {
            config
                .useStandardConfiguration()
                .withBaseUrl(App.siteUrl + "/");
        });

        this.http = http;
        this.postCache = postCache;
    }

    public loadPostsByTag(tag: string): Promise<PostData[]> {
        return this.loadPosts().then(() => {
            return this.postCache.getByTags(tag);
        });
    }

    public loadPosts(year?: string, month?: string): Promise<PostData[]> {
        return this.loadIndex().then((obj: any) => {
            var posts: PostData[] = [];
            var wantedPostCount: number;

            if (!month && year) {
                posts = this.postCache.getByYear(year);

                var c = Object.keys((obj[year] || {})).reduce((prev: string, current: string) => {
                    var prevCount = parseInt(prev, 10);
                    var count = prevCount + (obj[year][current] || []).length;
                    return count.toString();
                });

                wantedPostCount = parseInt(c, 10);
            } else if (month && year) {
                posts = this.postCache.getByMonth(year, month);
                wantedPostCount = ((obj[year] || {})[month] || []).length;
            }

            if (posts.length !== wantedPostCount) {
                return this.loadByIndex(obj, year, month);
            } else {
                return new Promise<PostData[]>((resolve: (result: PostData[]) => void) => {
                    resolve(this.sortPosts(posts));
                });
            }
        });
    }

    private loadByIndex(index: any, year: string, month: string): Promise<PostData[]> {
        var years: string[] = [];
        if (!year) {
            years = Object.keys(index);
        } else {
            years = [year];
        }

        var promises: Promise<PostData>[] = [];

        years.forEach((y: string) => {
            var months: string[] = [];
            if (!month) {
                months = Object.keys(index[y]);
            } else {
                months = [month];
            }

            months.forEach((m: string) => {
                var posts: string[] = index[y][m];
                posts.forEach((p: string) => {
                    promises.push(this.loadPost(y, m, p));
                });
            });
        });

        return Promise.all<PostData>(promises).then(this.sortPosts);
    }

    private sortPosts(posts: PostData[]): PostData[] {
        return posts.sort((p: PostData) => {
            return p.publishDate.getDate();
        });
    }

    private loadIndex(): Promise<any> {
        return this.http.fetch("posts/index.json")
            .then(response => {
                return response.json()
            });
    }

    public loadPost(year: string, month: string, title: string): Promise<PostData> {
        var post: PostData = this.postCache.getUnique(year, month, title);

        if (!post) {
            var url = `posts/${year}/${month}/${title}/${title}.md`;
            return this.http.fetch(url)
                .then(response => response.text())
                .then((text: string) => {
                    return this.parsePost(text, title);
                });
        } else {
            return new Promise<PostData>((resolve: (result: PostData) => void) => {
                resolve(post);
            });
        }
    }

    private parsePost(content: string, identifier: string): PostData {
        var func: Function = <any>markdown;
        var html = func().render(content);

        var postData = new PostData();

        var tmp = document.createElement("DIV");
        tmp.innerHTML = html;

        var $ul = $("hr", tmp).first().next();

        $ul.children().each((index: number, element: Element) => {
            var key = element.textContent.substr(0, element.textContent.indexOf(":"));
            var value = element.textContent.substr(element.textContent.indexOf(":") + 1).trim();
            postData[key] = value;
        });

        $ul.prev().remove();
        $ul.next().remove();
        $ul.remove();

        postData.lastModified = postData.lastModified ? moment(postData.lastModified).toDate() : null;
        postData.publishDate = moment(postData.publishDate).toDate();
        postData.share = <boolean>postData.share;
        postData.tags = (<any>postData.tags).split(",");
        postData.pageContent = tmp.innerHTML.trim();
        postData.identifier = identifier;
        postData.absoluteUrl = this.getAbsoluteUrl(postData.pageLink);

        this.postCache.add(postData);

        return postData;
    }

    public getAbsoluteUrl(link: string): string {
        var host = window.location.href.substr(0, window.location.href.indexOf("#"));
        var absolute: string = `${host}${link}/index.html`;
        absolute = absolute.replace("#/", "");
        return absolute;
    }
}

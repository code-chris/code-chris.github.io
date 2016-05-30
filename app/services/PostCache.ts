import {PostData} from "../contracts/PostData";

export class PostCache {

    private posts: PostData[] = [];

    public add(data: PostData): void {
        var year = this.getYear(data.publishDate);
        var month = this.getMonth(data.publishDate);

        if (!this.getUnique(year, month, data.identifier)) {
            this.posts.push(data);
        }
    }

    public getByYear(year: string): PostData[] {
        return this.posts.filter((post: PostData) => this.getYear(post.publishDate) == <any>year);
    }

    public getByMonth(year: string, month: string): PostData[] {
        return this.posts.filter((post: PostData) => {
            return this.getYear(post.publishDate) == <any>year &&
                this.getMonth(post.publishDate) == <any>month;
        });
    }

    public getUnique(year: string, month: string, identifier: string): PostData {
        var elements = this.posts.filter((post: PostData) => {
            return this.getYear(post.publishDate) == <any>year &&
                this.getMonth(post.publishDate) == <any>month &&
                post.identifier === identifier;
        });

        return elements.length === 1 ? elements[0] : null;
    }

    public getByTags(...tags: string[]): PostData[] {
        return this.posts.filter((post: PostData) => {
            return post.tags.filter((t: string) => tags.indexOf(t) !== -1).length > 0;
        });
    }

    private getYear(date: Date): string {
        return date.getFullYear().toString();
    }

    private getMonth(date: Date): string {
        return ("0" + (date.getMonth() + 1)).slice(-2);
    }
}

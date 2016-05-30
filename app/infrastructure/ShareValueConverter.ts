
export class ShareValueConverter {

    public toView(value: string, media: string): string {
        if (media === "facebook") {
            return `https://www.facebook.com/sharer/sharer.php?u=${value}`;
        } else if (media === "twitter") {
            return `https://twitter.com/intent/tweet?text=${value}`;
        } else if (media === "googleplus") {
            return `https://plus.google.com/share?url=${value}`;
        } else {
            return "";
        }
    }
}

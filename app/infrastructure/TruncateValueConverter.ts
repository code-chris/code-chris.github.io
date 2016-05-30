
export class TruncateValueConverter {

    public toView(value: string, count: number, doTruncate: boolean, url: string): string {
        if (doTruncate) {
            if (value) {
                var cutted = value.substr(0, count);
                cutted = cutted.substr(0, Math.min(cutted.length, cutted.lastIndexOf(" ")));
                return cutted + `...   <a href='${url}'>Read more</a>`;
            }

            return "";
        }

        return value;
    }
}

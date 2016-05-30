import {App} from "../App";

export class TagUrlValueConverter {

    public toView(value: string): string {
        return `${App.siteUrl}/#/tags/${value}`;
    }
}

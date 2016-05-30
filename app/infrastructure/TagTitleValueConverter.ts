
export class TagTitleValueConverter {

    public toView(value: string): string {
        return `Pages tagged ${value}`;
    }
}

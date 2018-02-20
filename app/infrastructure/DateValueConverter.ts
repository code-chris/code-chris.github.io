
export class DateValueConverter {

    public toView(value: any): string {
        return new Date(value).toDateString();
    }
}

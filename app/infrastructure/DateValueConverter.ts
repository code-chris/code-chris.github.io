import * as moment from "moment";

export class DateValueConverter {

    public toView(value: any): string {
        return moment(value).format('D MMMM YYYY');
    }
}

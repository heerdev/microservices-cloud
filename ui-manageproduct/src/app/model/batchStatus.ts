import{LocaleDate} from "../model/localeDate";

export class BatchStatus{
    status: string;
    startTime:LocaleDate;


 constructor(status:string,dayOfWeek:string,startTime:LocaleDate ){
        this.status=status;
        this.startTime=startTime;
    }

}
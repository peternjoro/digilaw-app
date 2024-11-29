import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

//*set default timestamp - you can do this based on user locale
//Europe/Paris, Africa/Lagos, Australia/Sydney, Africa/Nairobi
dayjs.tz.setDefault('Africa/Nairobi');

const Dayjs = (...args:any[]) => {
    return dayjs(...args).tz();
};

const timezonedUnix = (value: number) => {
    return dayjs.unix(value).tz();
};

Dayjs.unix = timezonedUnix;

export default Dayjs;
import moment from 'moment';

/**
 * Helper class for handling date time
 */
export default class MyCalendar {

  static monthAbbr = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  private static padZero = (num: number | string) => {
    return `${num >= 10 ? '' : '0'}${num}`;
  }

  static deltaMinutes = (d1: MyCalendar, d2: MyCalendar) => {
    const dd1 = +d1.date;
    const dd2 = +d2.date;
    const deltaMs = dd1 - dd2;
    const deltaMin = Math.round(deltaMs / 6e4);
    return deltaMin;
  }

  static isSameTime = (d1: MyCalendar, d2: MyCalendar) => {
    return (
      d1.date.getHours() === d2.date.getHours()
      && d1.date.getMinutes() === d2.date.getMinutes()
      && d1.date.getSeconds() === d2.date.getSeconds()
    );
  }

  static isSameTimeString = (t1: string, t2: string) => {
    const [h1, m1] = t1.split(':');
    const [h2, m2] = t2.split(':');
    if (h1 == null || h2 == null || m1 == null || m2 == null) throw new Error(`Either of these arguments are in invalid format: "${t1}", "${t2}"`);
    return h1 == h2 && m1 == m2;
  }

  date: Date;

  constructor(dateStringOrNumberInMillisec?: string | number) {
    if (!dateStringOrNumberInMillisec) {
      this.date = new Date();
    } else this.date = new Date(dateStringOrNumberInMillisec);
  }

  getDisplayDate = () => {
    const month = this.date.getMonth();
    const dateMonth = this.date.getDate();
    const year = this.date.getFullYear();
    return `${MyCalendar.monthAbbr[month]} ${MyCalendar.padZero(dateMonth)}, ${year}`;
  }

  getDisplayTime = (seconds = false) => {
    const h = this.date.getHours();
    const m = this.date.getMinutes();
    if (!seconds) return `${MyCalendar.padZero(h)}:${MyCalendar.padZero(m)}`;
    const s = this.date.getSeconds();
    return `${MyCalendar.padZero(h)}:${MyCalendar.padZero(m)}:${MyCalendar.padZero(s)}`;
  }

  getDateAndTime = () => {
    return `${this.getDisplayDate()} ${this.getDisplayTime()}`;
  }

  toISODate = () => {
    return `${this.date.getFullYear()}-${MyCalendar.padZero(this.date.getMonth() + 1)}-${MyCalendar.padZero(this.date.getDate())}`;
  }

  toMoment = () => {
    return moment(this.toISODate());
  }

  toDateString = () => {
    const mm = this.toMoment();
    return mm.format('YYYY-MM-DDTHH:mm:ss.SSSZ');
  }

}
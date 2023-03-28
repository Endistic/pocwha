import { FunctionComponent } from "react";
import clsx from "clsx";
import MyCalendar from "@/utils/calendar";
import DatePicker from "@/components/DatePicker";

export interface HeaderProps {
  date: MyCalendar;
  handleChangeDate: (date: MyCalendar | null) => unknown;
  totalEvents: number;
}
const Header: FunctionComponent<HeaderProps> = ({ date, handleChangeDate, totalEvents }) => {

  return (
    <div className={clsx(
      'controls',
      'flex',
      'justify-between',
      'items-center',
      'gap-6',
      'bg-white',
      'shadow-md',
      'm-4',
      'py-2',
      'px-4',
      'rounded-md'
    )}>

      <DatePicker
        value={date}
        onChange={handleChangeDate} />

      <span className={clsx(
        'text-body1',
        'text-gray-05',
        'mt-[2px]',
        'text-black'
      )}>
        All events <b>{totalEvents}</b> Event{totalEvents !== 1 ? 's' : ''}
      </span>
    </div>
  );
}

export default Header;
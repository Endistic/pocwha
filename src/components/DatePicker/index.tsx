import { FunctionComponent, useCallback, useState, useMemo, useRef } from "react";
import clsx from 'clsx';
import MyCalendar from "@/utils/calendar";
import { CalendarPickerView } from '@mui/x-date-pickers/internals/models';
import { DatePicker as DP } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from 'moment';
import { DateBox } from "./css";

export interface DatePickerProps {
  value: MyCalendar | null;
  /**
   * Same props of MUI date picker's openTo props
   */
  openTo?: CalendarPickerView;
  onChange?: (newDate: MyCalendar | null) => unknown;
  rearIcon?: JSX.Element;
  disabled?: boolean;
}
const DatePicker: FunctionComponent<DatePickerProps> = (props) => {
  const {
    value,
    onChange,
    openTo = 'day',
    rearIcon,
    disabled = false,
  } = props;

  const anchorElement = useRef<HTMLDivElement>(null);

  const [isOpen, setOpen] = useState(false);

  const displayDate = useMemo(() => {
    if (value == null) return '';
    return value.getDisplayDate();
  }, [value]);

  const handleOpenDatePicker = useCallback(() => setOpen(true), []);

  const handleCloseDatePicker = useCallback(() => setOpen(false), []);

  const handleDateChange = useCallback((momentDate: moment.Moment | null) => {
    if (momentDate == null) return onChange && onChange(null);
    const dateStr = momentDate.format('YYYY-MM-DD');
    onChange && onChange(new MyCalendar(dateStr));
  }, [onChange]);

  const handleGoToToday = useCallback(() => {
    const today = moment();
    handleDateChange(today);
  }, [handleDateChange]);

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DP
        openTo={openTo}
        value={value?.toMoment() || null}
        onChange={handleDateChange}
        open={isOpen}
        onOpen={handleOpenDatePicker}
        onClose={handleCloseDatePicker}
        disabled={disabled}
        PopperProps={{
          placement: 'bottom-start',
          anchorEl: anchorElement.current,
        }}
        renderInput={(params) => {
          const { InputProps } = params;

          return (
            <DateBox>
              <div
                ref={anchorElement}
                className={clsx(
                  'flex',
                  'flex-center',
                  'p-3',
                  'gap-2',
                  'justify-center',
                  'items-center',
                  'backdrop-blur-2xl',
                  'bg-[rgba(230,230,230,.5)]',
                  'select-none',
                  'relative',
                  !disabled && 'cursor-pointer',
                )}>
                {InputProps?.endAdornment}
                <span className={clsx(
                  'pt-[1px]',
                  'text-black',
                )}>
                  Date
                </span>
              </div>
              <div className={clsx(
                'date-view',
                'flex',
                'justify-center',
                'items-center',
                'p-3',
                'border-l',
                'border-l-solid',
                'border-l-gray-02',
                !disabled && 'cursor-pointer',
              )}>
                <span
                  onClick={handleOpenDatePicker}
                  className={clsx(
                    'pt-[1px]',
                    'text-black',
                  )}>
                  {displayDate}
                </span>
              </div>
              {rearIcon ? rearIcon : (
                <div
                  onClick={handleGoToToday}
                  className={clsx(
                    'flex',
                    'justify-center',
                    'items-center',
                    'bg-blue-04',
                    'shadow-blue2',
                    'rounded-tr-lg',
                    'rounded-br-lg',
                    'transition-transform',
                    'active:scale-90',
                    'cursor-pointer',
                    'px-4',
                  )}>
                  <span className={clsx(
                    'mt-[2px]',
                    'text-sub1',
                    'text-black',
                    'font-semibold',
                  )}>
                    Today
                  </span>
                </div>
              )}
            </DateBox>
          );
        }} />
    </LocalizationProvider>
  );
}

export default DatePicker;
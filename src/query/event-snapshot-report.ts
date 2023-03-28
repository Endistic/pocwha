import { useState, useCallback, useMemo, useEffect } from "react";
import MyCalendar from "@/utils/calendar";
// import { QueryOptions } from "@/types/common";
// import { PaginableResponse, PaginateQueryFnData, useFetchList, usePaginateList } from ".";
// import { EventSnapShot, SnapshotResponseData } from "@/types/snapshot";
// import SnapshotAPI from "@/api/snapshot";


export interface UseEventSnapshot {
  deviceName: string;
}
export const useEventSnapshot = (options: UseEventSnapshot) => {
  const {
    deviceName,
    // autoFetch = false,
    // refetchInterval,
  } = options;

  const [date, setDate] = useState(new MyCalendar());
  const { start_timestamp, end_timestamp } = useMemo(() => {
    const dStr = date.toISODate();
    const start_timestamp = `${dStr}T00:00:00+07:00`;
    const end_timestamp = `${dStr}T23:59:59.999999+07:00`;
    return { start_timestamp, end_timestamp };
  }, [date]);

  const handleGoToToday = useCallback(() => {
    const today = new MyCalendar();
    setDate(today);
  }, []);

  // const mapSnapshotResponseToEventSnapshot = useCallback((snapshotResponseList: SnapshotResponseData[]) => {
  //   return snapshotResponseList.map((data): EventSnapShot => {
  //     const dMoment = moment(data.ts);
  //     const tags = Object.keys(data.event_labels).reduce((arr: string[], key) => [...arr, key], []);
  //     return {
  //       id: data.id,
  //       date: dMoment.format('DD/MM/YYYY'),
  //       timeStart: dMoment.format('HH:mm:ss'),
  //       duration: '-',
  //       thumbnail: data.img_url,
  //       blurDataURL: data.b64img == null ? undefined : data.b64img,
  //       tags,
  //     }
  //   });
  // }, []);

  // const handleFetchEventSnapShot = useCallback(async ({ skip, take }: PaginateQueryFnData): Promise<PaginableResponse<SnapshotResponseData>> => {
  //   const response = await SnapshotAPI.fetchSnapshots({
  //     end_timestamp,
  //     start_timestamp,
  //     device: deviceName,
  //     offset: skip,
  //     limit: take,
  //   });
  //   const { count: total, snapshots: data } = response;
  //   return {
  //     data,
  //     total,
  //   };
  // }, [deviceName, end_timestamp, start_timestamp]);

  // const query = usePaginateList<SnapshotResponseData>({
  //   fetchFn: handleFetchEventSnapShot,
  // });
  // const { data } = query;
  // const totalEvents = useMemo(() => data.length, [data.length]);

  // useEffect(() => {
  //   query.refetch();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [deviceName, start_timestamp, end_timestamp]);

  // const mappedData = useMemo(() => mapSnapshotResponseToEventSnapshot(data), [data, mapSnapshotResponseToEventSnapshot]);

  return {
    // ...query,
    // mappedData,
    // totalEvents,
    date,
    setDate,
    handleGoToToday,
  }
}
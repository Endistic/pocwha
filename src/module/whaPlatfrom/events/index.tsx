import { FunctionComponent, Key, useEffect, useState } from "react";
import { Event } from "./styled";
import Card from "./cards";
import { useEventSnapshot } from "@/query/event-snapshot-report";
import Header from "./header";
import useSWR from "swr";
import axios from "axios";
// type DataImport = {
//   timestamp: string;
//   video: string;
//   image_link: string;
//   event_id: number;
//   event_name: string;
//   video_ftime: number;
// };
// type Props = {
//   data: any;
// };

// const fetcher = async (url: string) => axios.get(url).then((res) => res.data);
const EventTab: FunctionComponent = (props) => {
  const address = `http://13.214.54.19:5000/events`;
  //const address2 = `https://api.thecatapi.com/v1/images/search?limit=10`;
  const address3 = `https://4451-13-214-54-19.ap.ngrok.io/events`;
  const fetcher = async (url: string) =>
    await axios.get(url).then((res) => res.data);

  const { data, error, isLoading } = useSWR(address3, fetcher);

 

  const query = useEventSnapshot({
    deviceName: "Test",
  });

  const { date, setDate } = query;

  if (error) {
    console.log("data", error.message, typeof data);
    return <p>{error.message}</p>;
  }
  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <Event>
      <div className="cardBox">
        {/* <pre>{JSON.stringify(data, null, 1)}</pre> */}

        {data &&
          data.data.map((item: any) => (
            // <p key={item.event_id}>{item.event_name}</p>
            <div key={item.id}>
              <Card key={item.id} event_detail={item} />
            </div>
          ))}
      </div>
    </Event>
  );
};
export default EventTab;

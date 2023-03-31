import { FunctionComponent, useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import ReactPlayer from "react-player";

import Link from "next/link";
import Image from "next/image";
// import Image from "next/image";
// import ImageURL from "@/components/common/Image";
// import { EventSnapShot } from "@/types/snapshot";

// import PlaceholderIcon from "@/assets/img/placeholder.svg";

export interface CardProps {
  event_detail: any;
}
const Card: FunctionComponent<CardProps> = (props) => {
  const { event_detail } = props;

  const [name, setName] = useState(
    typeof window !== "undefined"
      ? "https://www.youtube.com/watch?v=WKP28xH_0ic"
      : ""
  );
  // const blurImageProps = useMemo(() => {
  //   const { blurDataURL } = event;
  //   const placeholder: 'blur' | 'empty' | undefined = blurDataURL == null ? undefined : 'blur';
  //   return {
  //     blurDataURL,
  //     placeholder,
  //   }
  // }, [event]);

  const imageProps = useMemo(
    () => ({
      height: 180,
      width: 320,
      alt: `events-${event_detail.id}`,
    }),
    [event_detail.id]
  );

  // function onOpenViedo(src: string) {
  //   <Link target="_blank" href={src} rel="noreferrer"></Link>;
  // }

  return (
    <div
      className={clsx(
        "bg-slate-400",
        "shadow-gray2",
        "rounded-lg",
        // "w-full",
        "py-4",
        "px-10",
        "flex",
        "justify-between",
        "gap-8",
        "m-4"
      )}
    >
      <div className={clsx("flex", "flex-col", "py-6", "gap-5")}>
        <div className={clsx("flex", "gap-5")}>
          <span className={clsx("text-sub1", "font-semibold", "text-gray-06")}>
            {/* Date : {event_detail.timestamp.split("T")[0] ?? "-"} */}
          </span>
          <span className={clsx("text-body1", "text-gray-06")}>
            {/* Timestamp {event_detail.timestamp.split("T")[1] ?? "-"} */}
          </span>
        </div>
        <div className={clsx("flex", "flex-row", "justify-between")}>
          <span className={clsx("text-sub1", "text-gray-04", "font-semibold")}>
            Time Start Detection
          </span>
          {/* <p>{event_detail.video_ftime ?? "-"} second</p> */}
        </div>

        <div className={clsx("tags", "flex", "gap-2", "justify-between")}>
          <span className={clsx("text-sub1", "text-gray-04", "font-semibold")}>
            Event
          </span>
          <span
            className={clsx(
              "rounded-default",
              "bg-opacity-50",
              "px-2",
              "text-sub2",
              "font-semibold",
              "capitalize"
            )}
          >
            {/* {event_detail.event_name.replace("_", " ") ?? "-"} */}
          </span>
        </div>

        <Link
          href={event_detail.video_link ?? ""}
          target="_blank"
          className={clsx(
            "bg-blue-400",
            "text-center",
            "border",
            "rounded-lg",
            "inline-block",
            "cursor-pointer",
            "hover:bg-white"
          )}
        >
          Watch Playback Video
        </Link>
      </div>
      <div>
        <Image src={event_detail.image_link} width={500} height={180} alt="" />
        {/* <Image
          {...imageProps}
          src={
            'http://13.214.54.19/images/jam_jam_test1.mp4_180_f1e4f038-4b15-4dd9-ac5d-921486be93ff.png'
          }
          alt=""
        /> */}
      </div>
    </div>
  );
  // return (
  //   <div
  //     className={clsx(
  //       "bg-white",
  //       "shadow-gray2",
  //       "rounded-lg",
  //       "w-full",
  //       "py-4",
  //       "px-10",
  //       "flex",
  //       "justify-between",
  //       "gap-8"
  //     )}
  //   >
  //     <div className={clsx("flex", "flex-col", "py-6", "gap-8")}>
  //       <div className={clsx("flex", "gap-5")}>
  //         <span className="span1">
  //           {/* {event.date} */}
  //           Event Date
  //         </span>
  //         <span className="span2">
  //           {/* {`${event.timeStart}${event.timeEnd ? `- ${event.timeEnd}` : ''}`} */}
  //           Time Start - Time End
  //         </span>
  //       </div>
  //       <span className="spanMinutes">
  //         {/* {`${event.duration} Minutes`} */}
  //         24 Minutes
  //       </span>
  //       <div className="detailData">
  //         <span className="span-detail">
  //           {event_detail.description ?? "Empty"}
  //         </span>
  //         {/* {tagsList.map(({ bgClass, name, textClass, tag }, i) => (
  //           tags.includes(tag) ? (
  //             <span
  //               key={i}
  //               className={clsx(
  //                 'rounded-default',
  //                 'bg-opacity-50',
  //                 'px-2',
  //                 'text-sub2',
  //                 'font-semibold',
  //                 bgClass,
  //                 textClass,
  //                 'capitalize',
  //               )}>
  //               {name}
  //             </span>
  //           ) : (
  //             null
  //           )
  //         ))} */}
  //       </div>
  //     </div>
  //     <div>
  //       {/* {typeof window !== "undefined" ? (
  //         <ReactPlayer
  //           url={name}
  //           playing={false}
  //           muted={true}
  //           controls={true}
  //           height={300}
  //           width={500}
  //         />
  //       ) : (
  //         <></>
  //       )} */}
  //     </div>
  //     {/* https://picsum.photos/200/300 */}
  //     <Image {...imageProps} src={"https://picsum.photos/200/300"} alt="" />
  //     {/* {event.thumbnail ? (
  //       <ImageURL
  //         {...imageProps}
  //         src={event.thumbnail} />
  //     ) : (
  //       // eslint-disable-next-line jsx-a11y/alt-text
  //       <Image
  //         {...imageProps}
  //         src={PlaceholderIcon} />
  //     )} */}
  //   </div>
  // );
};

export default Card;

const tagsList = [
  {
    tag: "accident",
    bgClass: "bg-blue-01",
    textClass: "text-blue-05",
    name: "Accident",
  },
  {
    tag: "falldown",
    bgClass: "bg-green-01",
    textClass: "text-green-05",
    name: "Fall Down",
  },
  {
    tag: "fighting",
    bgClass: "bg-red-01",
    textClass: "text-red-05",
    name: "Fighting",
  },
  {
    tag: "sounddetected",
    bgClass: "bg-orange-01",
    textClass: "text-orange-05",
    name: "Sound Detected",
  },
];

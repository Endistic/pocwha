import { FunctionComponent, useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import ReactPlayer from "react-player";
import Image from "@/components/Image/Image";
import Link from "next/link";
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
      <div className={clsx("flex", "flex-col", "py-6", "gap-8")}>
        <div className={clsx("flex", "gap-5")}>
          <span className={clsx("text-sub1", "font-semibold", "text-gray-06")}>
            Date
            {/* {event.date} */}
          </span>
          <span className={clsx("text-body1", "text-gray-06")}>
            Time Start - Time End
            {/* {`${event.timeStart}${event.timeEnd ? `- ${event.timeEnd}` : ''}`} */}
          </span>
        </div>
        <span className={clsx("text-sub1", "text-gray-04", "font-semibold")}>
          Minutes
          {/* {`${event.duration} Minutes`} */}
        </span>
        <div className={clsx("tags", "flex", "gap-2")}>
          <span
            className={clsx(
              "rounded-default",
              "bg-opacity-50",
              "px-2",
              "text-sub2",
              "font-semibold"
              // "capitalize"
            )}
          >
            {event_detail.description ?? "Empty"}
            <div className={(clsx('mt-3', "text-green-800"))}>
            <Link href={event_detail.sources ?? ""} target="_blank">Watch Video !</Link>
            </div>
            
          </span>
        </div>
      </div>
      <Image {...imageProps} src={"https://picsum.photos/200/300"} alt="" />
      {/* {event.thumbnail ? (
        <ImageURL
          {...imageProps}
          src={event.thumbnail} />
      ) : (
        // eslint-disable-next-line jsx-a11y/alt-text
        <Image
          {...imageProps}
          src={PlaceholderIcon} />
      )} */}
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

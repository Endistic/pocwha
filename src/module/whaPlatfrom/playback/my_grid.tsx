import Grid from "@/components/Grid/grid";
import clsx from "clsx";
import React from "react";
import ReactPlayer from "react-player";
import { GridDetail } from ".";
// import { GridDetail } from ".";
interface GridPropsData {
  data: GridDetail[];
}
const Grids: React.FC<GridPropsData> = (props) => {
  return (
    <div>
      <Grid columns={3}>
        {props.data.map((event) => (
          <div key={event.id}>
            <div className="grid-player">
              <ReactPlayer
                height={300}
                width={400}
                url={event.sources}
                controls={true}
                muted={true}
              />
              <style jsx>{`
                .grid-player {
                  display: flex;
                  flex-direction: row;
                  justify-content: center;
                  align-items: center;
                }
                /* .grid-column {
                  background-color: #ffffff;
                  padding: 16px;
                  height: 300px;
                  border-radius: 12px;
                  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
                } */
              `}</style>
            </div>
            <p className={clsx("text-black mt-3 ml-5")}> Time: 12:00 - 13:00 </p>
          </div>
        ))}
      </Grid>
    </div>
  );
};

export default Grids;

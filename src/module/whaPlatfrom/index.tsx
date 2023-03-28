import { FunctionComponent, Suspense, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import tabsList from "./tablist";
import { updateActiveTab } from "@/redux/slice/mainSlice";
import Tabs from "@/components/Tab/tabs";
import clsx from "clsx";
import { Whapagestyle } from "./styled";
import EventTab from "./events";
import PlaybackTab from "./playback";
import Button from "@/components/Button/button";

interface MainState {
  mainValue: number;
  activeTab: string;
}

const WHA: FunctionComponent = () => {
  const activeTab = useSelector(
    (state: { main: MainState }) => state.main.activeTab
  );
  const dispatch = useDispatch();

  const _tabsList = useMemo(
    () =>
      tabsList.map((tab) => ({
        ...tab,
        onClick: () => dispatch(updateActiveTab(tab.id)),
      })),
    [dispatch]
  );
  return (
    <div>
      <p className={clsx("text-2xl", "font-bold", "m-4")}>
        Security Camera Monitering
      </p>
      <Tabs activeTab={activeTab} list={_tabsList} />
      <Suspense fallback={<></>}>{activeTab === "1" && <EventTab />}</Suspense>
      {/* <Suspense fallback={<></>}>
        {activeTab === "2" && <PlaybackTab />}
      </Suspense> */}
    </div>
  );
};
export default WHA;

import { FunctionComponent } from "react";
import clsx from "clsx";
import { TabSpan, TabStyled } from "./tab_styled";

export interface Tab {
  id: string;
  name: string;
  /**
   * if undefined, this tab is disabled
   */
  onClick?: () => any;
}
export interface TabProps {
  list: Tab[];
  activeTab: string;
}
/**
 * Tab switcher component
 */
const Tabs: FunctionComponent<TabProps> = (props) => {
  const { list, activeTab } = props;

  return (
    <div
      className={clsx(
        "flex",
        "gap-7",
        "border-b",
        "border-solid",
        "border-gray-01",
        "m-4",
        // "bg-red-500"
        
      )}
    >
      {list.map(({ id, name, onClick }) => {
        const isDisabled = onClick == null;
        console.log("id " + id);
        console.log("active " + activeTab);
        return (
          <span
            className={clsx(
              "p-2",
              "flex",
              "justify-center",
              "items-center",
              "text-blue-04",
              "font-semibold",
              "rounded-sm",
              "border-b-4",
              "border-b-solid",
              activeTab == id ? "border-b-04 border-blue-700" : "border-transparent",
              isDisabled ? "cursor-not-allowed" : "cursor-pointer"
            )}
            key={id}
            onClick={onClick}
           
            // className={clsx(
            //   "p-2",
            //   "flex",
            //   "justify-center",
            //   "items-center",
            //   "text-blue-04",
            //   "font-semibold",
            //   "rounded-sm",
            //   "border-b-4",
            //   "border-b-solid",
            //   activeTab == id ? "border-b-blue-03" : "border-transparent",
            //   isDisabled ? "cursor-not-allowed" : "cursor-pointer"
            // )}
          >
            {name}
          </span>
        );
      })}
    </div>
  );
};

export default Tabs;

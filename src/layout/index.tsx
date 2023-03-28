import clsx from "clsx";
import { FunctionComponent } from "react";

interface Props {
  children: React.ReactNode;
}
const MainLayout: FunctionComponent<Props> = ({ children }) => {
  return <main>{children}</main>;
};

export default MainLayout;

import MainLayout from "@/layout";

import { Header, MainLayoutStyled } from "@/layout/styled";
import WHA from "@/module/whaPlatfrom";
import clsx from "clsx";

import { FunctionComponent } from "react";

const Index: FunctionComponent = () => {
  return (
    <MainLayoutStyled>
      <MainLayout>
        <h1
          className={clsx(
            "flex",
            " mb-5",
            "flex-row",
            "justify-center",
            "items-center",
            "bg-emerald-700",
            "rounded-b-md",
            "w-auto",
            "h-20",
            "text-red-50",
            "text-4xl",
            "m-2"
          )}
        >
          Monitering Dashboard
        </h1>

        <WHA />
      </MainLayout>
    </MainLayoutStyled>
  );
};

export default Index;

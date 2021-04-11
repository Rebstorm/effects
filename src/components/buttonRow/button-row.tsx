import React, { FunctionComponent } from "react";
import "./button-row.scss";
import { MenuButton, MenuButtonProps } from "./menuButton/menu-button";

interface TitleProps {
  title: string;
}

export const ButtonRow: FunctionComponent<TitleProps> = (props) => {
  const buttonArray: MenuButtonProps[] = Array.of(
    {
      id: "about",
      zIndex: 2,
      color: "#2EC9E6",
      sizeInPercent: 30,
    },
    {
      id: "tech",
      zIndex: 1,
      color: "#4D806B",
      sizeInPercent: 60,
    },
    {
      id: "copyright",
      zIndex: 0,
      color: "#FA5950",
      sizeInPercent: 90,
    }
  );
  return (
    <>
      {buttonArray.map((item) => (
        <MenuButton
          id={item.id}
          color={item.color}
          sizeInPercent={item.sizeInPercent}
          zIndex={item.zIndex}
        />
      ))}
    </>
  );
};

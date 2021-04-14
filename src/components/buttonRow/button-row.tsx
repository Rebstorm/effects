import React, { FunctionComponent } from "react";
import "./button-row.scss";
import { MenuButton, MenuButtonProps } from "./menuButton/menu-button";

interface TitleProps {
  title: string;
}

export const ButtonRow: FunctionComponent<TitleProps> = (props) => {
  const buttonArray: MenuButtonProps[] = Array.of(
    {
      cssKey: "one",
      title: "about",
      zIndex: 2,
      color: "#6CA6BD",
      sizeInPercent: 30,
    },
    {
      cssKey: "two",
      title: "tech",
      zIndex: 1,
      color: "#626C70",
      sizeInPercent: 50,
    },
    {
      cssKey: "three",
      title: "copyright",
      zIndex: 0,
      color: "#D3E9F2",
      sizeInPercent: 70,
    }
  );
  return (
    <>
      {buttonArray.map((item, key, prop) => (
        <MenuButton
          cssKey={item.cssKey}
          title={item.title}
          key={key}
          color={item.color}
          sizeInPercent={item.sizeInPercent}
          zIndex={item.zIndex}
        />
      ))}
    </>
  );
};

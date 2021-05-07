import React, { FunctionComponent } from "react";
import "./button-row.scss";
import { MenuButton, MenuButtonProps } from "../menuButton/menu-button";

interface TitleProps {
  title: string;
}

export const ButtonRow: FunctionComponent<TitleProps> = (props) => {
  const buttonArray: MenuButtonProps[] = Array.of(
    {
      title: "about",
      zIndex: 2,
      color: "#38706C",
      sizeInPercent: 30,
    },
    {
      title: "tech",
      zIndex: 1,
      color: "#78F0E6",
      sizeInPercent: 50,
    },
    {
      title: "copyright",
      zIndex: 0,
      color: "#7EFCF2",
      sizeInPercent: 70,
    }
  );
  return (
    <>
      {buttonArray.map((item, key, prop) => (
        <MenuButton
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

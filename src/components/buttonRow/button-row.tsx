import React, { FunctionComponent } from "react";
import { Link, useHistory } from "react-router-dom";
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
      color: "#905AFA",
      sizeInPercent: 30,
      clickChildEvent: (e, id) => {},
    },
    {
      id: "tech",
      zIndex: 1,
      color: "#5950DE",
      sizeInPercent: 60,
      clickChildEvent: (e, id) => {},
    },
    {
      id: "copyright",
      zIndex: 0,
      color: "#6481F5",
      sizeInPercent: 90,
      clickChildEvent: (e, id) => {},
    }
  );

  const history = useHistory();

  function handleClick(e: React.MouseEvent<HTMLDivElement>, id: string) {
    history.push(`/${id}`);
  }
  return (
    <>
      {buttonArray.map((item, key, prop) => (
        <MenuButton
          id={item.id}
          color={item.color}
          sizeInPercent={item.sizeInPercent}
          zIndex={item.zIndex}
          clickChildEvent={(e, id) => handleClick(e, id)}
        />
      ))}
    </>
  );
};

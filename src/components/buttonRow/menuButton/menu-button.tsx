import React, { FunctionComponent, useEffect } from "react";
import "./menu-button.scss";
import { animated } from "react-spring";

export interface MenuButtonProps {
  id: string;
  color: string;
  sizeInPercent: number;
  zIndex?: number;
  clickChildEvent: (e: React.MouseEvent<HTMLDivElement>, id: string) => void;
}

export const MenuButton: FunctionComponent<MenuButtonProps> = (prop) => {
  useEffect(() => {
    // mount
    return () => {
      // unmount
    };
  });

  return (
    <animated.div
      onClick={(e) => {
        // callback for listener
        prop.clickChildEvent(e, prop.id);
      }}
      className={"round"}
      style={{
        backgroundColor: prop.color,
        width: prop.sizeInPercent + "%",
        height: prop.sizeInPercent + "%",
        zIndex: prop.zIndex,
      }}
    >
      {prop.id}
    </animated.div>
  );
};

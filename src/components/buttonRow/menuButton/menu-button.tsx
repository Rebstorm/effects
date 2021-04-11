import React, { FunctionComponent, useEffect, useState } from "react";
import "./menu-button.scss";
import { animated, useSpring } from "react-spring";
import { useHistory } from "react-router-dom";

export interface MenuButtonProps {
  id: string;
  color: string;
  sizeInPercent: number;
  zIndex?: number;
}

export const MenuButton: FunctionComponent<MenuButtonProps> = (prop) => {
  const history = useHistory();
  useEffect(() => {
    // mount
    return () => {
      // unmount
    };
  });

  const [clicked, set] = useState(false);
  const animProps = useSpring({
    width: clicked ? "100%" : `${prop.sizeInPercent}%`,
    height: clicked ? "100vh" : `${prop.sizeInPercent}%`,
    zIndex: clicked ? 200 : prop.zIndex,
    immediate: (key) => key === "zIndex",
  });
  return (
    <animated.div
      onClick={(e) => {
        // Router Change
        /*
      setTimeout(() => {
        history.push(`/${prop.id}`);
      }, 3000);
       */
      }}
      onMouseDown={() => {
        set(true);
      }}
      onMouseUp={() => window.setTimeout(() => set(false), 300)}
      className={"round"}
      style={{
        backgroundColor: prop.color,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E"`,
        ...animProps,
      }}
    >
      {prop.id}
    </animated.div>
  );
};

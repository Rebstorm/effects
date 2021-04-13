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
      className={"container"}
      style={{
        backgroundColor: prop.color,
        width: "100%",
        ...animProps,
      }}
    >
      <animated.div>{prop.id}</animated.div>
    </animated.div>
  );
};

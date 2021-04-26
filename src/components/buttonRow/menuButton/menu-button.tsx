import React, { FunctionComponent, useEffect, useState } from "react";
import "./menu-button.scss";
import { animated, useSpring } from "react-spring";
import { useHistory } from "react-router-dom";

export interface MenuButtonProps {
  title: string;
  cssKey: string;
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
  });
  return (
    <animated.div
      onClick={(e) => {
        // Router Change
        setTimeout(() => {
          history.push(`${process.env.PUBLIC_URL}/${prop.title}`);
        }, 250);
      }}
      onMouseDown={() => {
        set(true);
      }}
      onMouseUp={() => window.setTimeout(() => set(false), 300)}
      className={"container"}
      style={{
        width: "100%",
        ...animProps,
      }}
    >
      <div
        className={"inner-container"}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <div
          className={"text"}
          style={{
            height: "90%",
            backgroundColor: prop.color,
          }}
        >
          {prop.title}
        </div>
      </div>
    </animated.div>
  );
};

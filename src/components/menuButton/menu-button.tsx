import React, { FunctionComponent, useEffect, useState } from "react";
import "./menu-button.scss";
import { animated, useSpring } from "react-spring";
import { useHistory } from "react-router-dom";

export interface MenuButtonProps {
  title: string;
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

  const [clicked, setClicked] = useState(false);
  const [zoomedIn, setZoomedIn] = useState(1);

  const allProps = useSpring({
    height: clicked ? "100vh" : `${prop.sizeInPercent}%`,
    zIndex: clicked ? 200 : prop.zIndex,
    transform: `scale(${zoomedIn})`
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
        setClicked(true);
      }}
      onMouseOver={(e) => setZoomedIn(1.3)}
      onMouseLeave={(e) => setZoomedIn(1)}
      onMouseUp={() => window.setTimeout(() => setClicked(false), 300)}
      className={"container"}
      style={{
        width: "100%",
        ...allProps,
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
            height: "100%",
            backgroundColor: prop.color,
          }}
        >
          {prop.title}
        </div>
      </div>
    </animated.div>
  );
};

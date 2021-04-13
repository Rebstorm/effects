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
  });
  return (
    <animated.div
      onClick={(e) => {
        // Router Change
        setTimeout(() => {
          history.push(`/${prop.id}`);
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
          className={"wave"}
          style={{
            width: "100%",
            height: "7rem",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            height={"100%"}
            width={"100%"}
            preserveAspectRatio={"none"}
          >
            <path
              fill={prop.color}
              fillOpacity="1"
              d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div
          className={"text"}
          style={{
            height: "90%",
            backgroundColor: prop.color,
          }}
        >
          {prop.id}
        </div>
      </div>
    </animated.div>
  );
};

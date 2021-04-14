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
        <div className={`boat ${prop.cssKey}`}>
          <svg
            id="bootBoat"
            enable-background="new 0 0 512 512"
            height="64"
            viewBox="0 0 64 512"
            width="512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                fill={prop.color}
                d="m90.997 364.003h119.998v-216.821l-132.375 193.347c-6.805 9.94.33 23.474 12.377 23.474z"
              />
              <path
                fill={prop.color}
                d="m488.49 391.572h-224.999v-27.569h149.997c8.28 0 15-6.72 15-15 0-45.429-9.19-87.148-27.32-124.008-29.039-59.049-81.459-104.268-137.677-127.378v-82.608c0-10.61-10.75-17.85-20.55-13.93-.05.02-.09.04-.14.05-4.03 1.66-89.908 36.969-90.008 37.009-12.31 5.06-12.39 22.51-.13 27.69l80.829 34.129v291.615h-209.994c-9.217 0-16.388 8.233-14.803 17.86 16.103 105.627 13.38 87.765 13.693 89.818 1.112 7.331 7.414 12.75 14.83 12.75h335.291c51.636 0 97.805-29.107 120.101-73.312.075.006.152.007.227.013 4.44-8.93 7.89-18.39 10.24-28.21 2.365-9.88-4.925-18.919-14.587-18.919zm-224.999-248.235c40.059 49.959 40.119 120.338 0 170.367z"
              />
            </g>
          </svg>
        </div>
        <div
          className={"wavy"}
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
            />
          </svg>
        </div>
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

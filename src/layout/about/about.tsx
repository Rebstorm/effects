import "./about.scss";
import { animated, useSpring } from "react-spring";

export function About() {
  const props = useSpring({
    from: {
      left: "0%",
      bottom: "100%",
      width: "100%",
      height: "100vh",
      background: "#2EC9E6",
    },
    to: async (next) => {
      await next({
        left: "0%",
        bottom: "0%",
        width: "100%",
        height: "100vh",
        background: "#fff",
      });
    },
  });

  return (
    <animated.div className={"about"} style={props}>
      about
    </animated.div>
  );
}

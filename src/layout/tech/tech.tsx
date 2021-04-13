import { animated, useSpring } from "react-spring";

export function Tech() {
  const props = useSpring({
    from: {
      left: "0%",
      bottom: "100%",
      width: "100%",
      height: "100vh",
      background: "#4D806B",
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
      tech
    </animated.div>
  );
}

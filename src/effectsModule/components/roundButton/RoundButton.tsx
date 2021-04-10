import { FunctionComponent } from "react";
import "./RoundButton.scss";
import { useSpring, animated } from "react-spring";

interface ButtonProps {
  color: string;
  sizeInPercent: number;
  zIndex?: number;
  clickChildEvent: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const calc = (x: number, y: number) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x: number, y: number, s: number) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export const RoundButton: FunctionComponent<ButtonProps> = (b) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <animated.div
      onClick={(e) => b.clickChildEvent(e)}
      className={"round"}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{
        backgroundColor: b.color,
        width: b.sizeInPercent + "%",
        height: b.sizeInPercent + "%",
        zIndex: b.zIndex,
        transform: props.xys.to(trans),
      }}
    >
      RoundButton
    </animated.div>
  );
};

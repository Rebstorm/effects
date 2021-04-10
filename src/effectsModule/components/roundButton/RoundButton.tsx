import { Component } from "react";
import "./RoundButton.scss";

interface ButtonProps {
  color: string;
  sizeInPercent: number;
  zIndex?: number;
  clickChildEvent: (e: React.MouseEvent<HTMLDivElement>) => void;
}

interface ButtonState {}

export class RoundButton extends Component<ButtonProps, ButtonState> {
  render() {
    return (
      <div
        onClick={(e) => this.props.clickChildEvent(e)}
        className={"round"}
        style={{
          backgroundColor: this.props.color,
          width: this.props.sizeInPercent + "%",
          height: this.props.sizeInPercent + "%",
          zIndex: this.props.zIndex,
        }}
      >
        RoundButton
      </div>
    );
  }
}

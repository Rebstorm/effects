import React, { Component } from "react";
import { RoundButton } from "../roundButton/RoundButton";
import "./ButtonRow.scss";

interface TitleProps {
  title: string;
}

class ButtonRow extends Component<TitleProps> {
  /**
   * @param element
   */
  render(
    element: JSX.Element = (
      <>
        <RoundButton
          clickChildEvent={(e) => this.handleClick(e)}
          sizeInPercent={30}
          color={"#905AFA"}
          zIndex={2}
        />
        <RoundButton
          clickChildEvent={(e) => this.handleClick(e)}
          sizeInPercent={60}
          color={"#5950DE"}
          zIndex={1}
        />
        <RoundButton
          clickChildEvent={(e) => this.handleClick(e)}
          sizeInPercent={90}
          color={"#6481F5"}
          zIndex={0}
        />
      </>
    )
  ) {
    return element;
  }

  private handleClick(e: React.MouseEvent<HTMLDivElement>) {
    console.log(e);
  }
}

export default ButtonRow;

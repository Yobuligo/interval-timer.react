import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import { Card } from "../../components/Card";
import { IntervalType } from "../../types/IntervalType";
import { ITimerProps } from "./ITimerProps";

export const Timer: React.FC<ITimerProps> = (props) => {
  const [intervalType, setIntervalType] = useState(
    props.defaultIntervalType ?? IntervalType.TIMER
  );

  const onChangeIntervalType = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    value: any
  ) => setIntervalType(value);

  return (
    <Card>
      <div>Title</div>
      <ToggleButtonGroup
        value={intervalType}
        onChange={onChangeIntervalType}
        exclusive
      >
        <ToggleButton value={IntervalType.TIMER}>Timer</ToggleButton>
        <ToggleButton value={IntervalType.REPETITION}>Repetition</ToggleButton>
        <ToggleButton value={IntervalType.WAIT}>Wait</ToggleButton>
      </ToggleButtonGroup>
      <div>
        <button>+</button>
      </div>
    </Card>
  );
};

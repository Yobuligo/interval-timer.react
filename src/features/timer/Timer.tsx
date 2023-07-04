import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import { Card } from "../../components/Card";
import { ITimer } from "../../model/ITimer";
import { IntervalType } from "../../types/IntervalType";
import { ITimerProps } from "./ITimerProps";
import styles from "./Timer.module.css";

export const Timer: React.FC<ITimerProps> = (props) => {
  const [intervalType, setIntervalType] = useState(
    props.defaultIntervalType ?? IntervalType.TIMER
  );

  const [timers, setTimers] = useState<ITimer[]>([]);

  const onChangeIntervalType = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    value: any
  ) => setIntervalType(value);

  const onAddTimer = () => {
    setTimers((previous) => [
      ...previous,
      { start: () => {}, intervalType: IntervalType.REPETITION },
    ]);
  };

  const items = timers.map((timer) => (
    <div className={styles.timerChild}>
      <Timer />
    </div>
  ));

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
      <div>{items}</div>
      <div className={styles.timerFooter}>
        <button onClick={onAddTimer}>+</button>
      </div>
    </Card>
  );
};

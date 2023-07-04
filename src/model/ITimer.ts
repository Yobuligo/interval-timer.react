import { ITimerInterval } from "./ITimerInterval";

export interface ITimer {
  start(): void;
  timerInterval: ITimerInterval;
}

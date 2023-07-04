import { ITimer } from "../../model/ITimer";
import { IntervalType } from "../../types/IntervalType";

export interface ITimerProps {
  defaultIntervalType?: IntervalType;
  timer?: ITimer;
}

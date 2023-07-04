import { ITimer } from "../../models/ITimer";
import { IntervalType } from "../../types/IntervalType";

export interface ITimerProps {
  defaultIntervalType?: IntervalType;
  timer?: ITimer;
}

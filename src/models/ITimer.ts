import { IntervalType } from "../types/IntervalType";

export interface ITimer {
  start(): void;
  intervalType: IntervalType;
}

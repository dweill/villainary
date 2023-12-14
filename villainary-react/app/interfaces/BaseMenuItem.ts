import { MouseEventHandler } from "react";

export type BaseMenuItem<T = unknown> = {
  title: string;
  handleClick: MouseEventHandler<T> | undefined;
}
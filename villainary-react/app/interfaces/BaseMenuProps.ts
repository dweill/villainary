import { PopoverProps } from "@mui/material";
import { MouseEventHandler } from "react";
import { BaseMenuItem } from "./BaseMenuItem";

export type BaseMenuProps<T extends BaseMenuItem, U = unknown> = {
  anchorEl: PopoverProps['anchorEl'];
  handleClose: PopoverProps['onClose'];
  menuItems: T[]
}
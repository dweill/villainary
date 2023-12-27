import { PopoverProps } from '@mui/material';
import { BaseMenuItem } from './BaseMenuItem';

export type BaseMenuProps<T extends BaseMenuItem, U = unknown> = {
    anchorEl: PopoverProps['anchorEl'];
    handleClose: PopoverProps['onClose'];
    id: string;
    menuItems: T[];
};

import { IconButton } from '@mui/material';
import { useState } from 'react';
import { BaseMenuItem } from '../interfaces/BaseMenuItem';
import BaseMenu from './BaseMenu';

type IconMenuProps = {
    children: React.ReactNode;
    menuItems: BaseMenuItem[];
    label: string;
    id: string;
};

export default function IconMenu(props: IconMenuProps) {
    const { children, menuItems, label, id } = props;
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label={label}
                aria-controls="menu-appbar"
                sx={{ mr: 2 }}
                onClick={handleMenu}
            >
                {children}
            </IconButton>
            <BaseMenu
                anchorEl={anchorEl}
                handleClose={handleClose}
                menuItems={menuItems}
                id={id}
            />
        </>
    );
}

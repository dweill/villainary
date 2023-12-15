import { Menu, MenuItem } from '@mui/material';
import { theme } from '../Theme';
import { BaseMenuItem } from '../interfaces/BaseMenuItem';
import { RouteMenuProps } from '../interfaces/RouteMenuProps';

export default function RouteMenu(props: RouteMenuProps) {
    const { anchorEl, handleClose, menuItems } = props;
    return (
        <Menu
            id="route-menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            {menuItems.map((menuItem: BaseMenuItem, i) => (
                <MenuItem
                    key={i}
                    sx={{
                        backgroundColor: theme.palette.primary.main,
                        '&:hover': {
                            backgroundColor: theme.palette.primary.light,
                        },
                    }}
                    onClick={menuItem.handleClick}
                >
                    {menuItem.title}
                </MenuItem>
            ))}
        </Menu>
    );
}

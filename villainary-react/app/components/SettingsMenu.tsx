import { Menu, MenuItem } from '@mui/material';
import { theme } from '../Theme';
import { BaseMenuItem } from '../interfaces/BaseMenuItem';
import { SettingsMenuProps } from '../interfaces/SettingsMenuProps';

export default function SettingsMenu(props: SettingsMenuProps) {
    const { anchorEl, handleClose, menuItems } = props;
    return (
        <Menu
            id="menu-appbar"
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

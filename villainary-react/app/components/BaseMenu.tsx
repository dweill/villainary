import { Menu, MenuItem } from '@mui/material';
import { theme } from '../Theme';
import { BaseMenuItem } from '../interfaces/BaseMenuItem';
import { BaseMenuProps } from '../interfaces/BaseMenuProps';

export default function BaseMenu(props: BaseMenuProps<BaseMenuItem>) {
    const { anchorEl, handleClose, menuItems, id } = props;
    return (
        <Menu
            id={id}
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
                        backgroundColor: theme.palette.secondary.main,
                        color: { color: theme.palette.text.primary },
                        '&:hover': {
                            backgroundColor: theme.palette.primary.light,
                            color: theme.palette.text.primary,
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

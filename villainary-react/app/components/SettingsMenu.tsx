import { Menu, MenuItem } from '@mui/material';
import { theme } from '../Theme';

export default function SettingsMenu(props: any) {
  const { anchorEl, handleClose, handleClick } = props;
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
      <MenuItem
        sx={{ backgroundColor: theme.palette.primary.main, '&:hover': {backgroundColor: theme.palette.primary.light} }}
        onClick={handleClick}
      >
        Profile
      </MenuItem>
    </Menu>
  );
}

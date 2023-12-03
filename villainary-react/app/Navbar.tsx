'use client';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { theme } from './Theme';
import SettingsMenu from './components/SettingsMenu';
import { Routes } from './enums/routes';
import { selectUserState } from './state/userState.slice';

export default function Navbar() {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const villainName = useSelector(selectUserState).villainName;

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSettingsMenuClick = () => {
    router.push(`/${Routes.PROFILE}`);
  };

  const handleTitleClick = () => {
    router.push(Routes.ROOT);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: theme.palette.secondary.main }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon></MenuIcon>
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <Link href={Routes.ROOT}>Villainary</Link>
          </Typography>
          {villainName ? (
            <>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={handleMenu}
              >
                <AccountCircle />
              </IconButton>
              <SettingsMenu
                handleClose={handleClose}
                anchorEl={anchorEl}
                handleClick={handleSettingsMenuClick}
              />
            </>
          ) : null}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

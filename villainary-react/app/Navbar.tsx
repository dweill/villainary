'use client';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { theme } from './Theme';
import RouteMenu from './components/RouteMenu';
import SettingsMenu from './components/SettingsMenu';
import { Routes } from './enums/routes';
import { BaseMenuItem } from './interfaces/BaseMenuItem';
import { selectUserState } from './state/userState.slice';

export default function Navbar() {
    const router = useRouter();
    const [anchorElSettings, setAnchorElSettings] =
        useState<null | HTMLElement>(null);
    const [anchorElRoute, setAnchorElRoute] = useState<null | HTMLElement>(
        null
    );

    const handleSettingsMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElSettings(event.currentTarget);
    };
    const handleRouteMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElRoute(event.currentTarget);
    };

    const villainName = useSelector(selectUserState).villainName;

    const handleSettingsClose = () => {
        setAnchorElSettings(null);
    };
    const handleRouteClose = () => {
        setAnchorElRoute(null);
    };

    const handleProfileClick = () => {
        router.push(`/${Routes.PROFILE}`);
    };
    const handleProductsClick = () => {
        router.push(`/${Routes.PRODUCTS}`);
    };

    const routeMenuItems: BaseMenuItem[] = [
        { title: 'Products', handleClick: handleProductsClick },
    ];
    const settingsMenuItems: BaseMenuItem[] = [
        { title: 'Profile', handleClick: handleProfileClick },
    ];

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="static"
                sx={{ backgroundColor: theme.palette.secondary.main }}
            >
                <Toolbar>
                    {villainName ? (
                        <>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="Navigation Menu"
                                aria-controls="menu-appbar"
                                sx={{ mr: 2 }}
                                onClick={handleRouteMenu}
                            >
                                <MenuIcon />
                            </IconButton>
                            <RouteMenu
                                anchorEl={anchorElRoute}
                                handleClose={handleRouteClose}
                                menuItems={routeMenuItems}
                            />
                        </>
                    ) : null}

                    <Typography
                        variant="h5"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
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
                                onClick={handleSettingsMenu}
                            >
                                <AccountCircle />
                            </IconButton>
                            <SettingsMenu
                                handleClose={handleSettingsClose}
                                anchorEl={anchorElSettings}
                                menuItems={settingsMenuItems}
                            />
                        </>
                    ) : null}
                </Toolbar>
            </AppBar>
        </Box>
    );
}

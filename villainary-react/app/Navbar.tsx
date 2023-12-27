'use client';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { theme } from './Theme';
import IconMenu from './components/IconMenu';
import { Routes } from './enums/routes';
import { BaseMenuItem } from './interfaces/BaseMenuItem';
import { selectUserState } from './state/userState.slice';

export default function Navbar() {
    const router = useRouter();

    const villainName = useSelector(selectUserState).villainName;

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
                        <IconMenu
                            menuItems={routeMenuItems}
                            label={'Navigation Menu'}
                            id="app-navigation-menu"
                        >
                            <MenuIcon />
                        </IconMenu>
                    ) : null}

                    <Typography
                        variant="h5"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        <Link href={Routes.ROOT}>Villainary</Link>
                    </Typography>
                    {villainName ? (
                        <IconMenu
                            menuItems={settingsMenuItems}
                            label={'Settings Menu'}
                            id="app-settings-menu"
                        >
                            <AccountCircle />
                        </IconMenu>
                    ) : null}
                </Toolbar>
            </AppBar>
        </Box>
    );
}

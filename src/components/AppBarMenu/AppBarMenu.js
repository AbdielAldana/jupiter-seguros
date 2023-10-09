import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';



// import AdbIcon from '@mui/icons-material/Adb';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import JupsimboloBlanco from "../../images/jupiter_Simbolo Blanco.png"
// import JupLogoBlanco from "../../images/jupiter_Logotipo Blanco.png"
import { Link } from 'react-router-dom';
import { Divider, Drawer } from '@mui/material';
import $ from "jquery";

function AppBarMenu(params) {
    var $ = require( "jquery" );

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
            main: '#4388a9',
            },
        },
    });

    const [anchorElNav, setAnchorElNav] = React.useState(null | HTMLElement>(null));
    const [anchorElUser, setAnchorElUser] = React.useState(null | HTMLElement>(null));

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    let themeMenuText = {
        mr: 2,
        // display: { xs: 'none', md: 'flex' },
        fontFamily: 'monospace',
        fontWeight: 300,
        letterSpacing: '0',
        color: 'white',
        textDecoration: 'none',
    }

    const pages = [
        {
            name: "Inicio",
            link: "/",
            disabled: false
        },
        {
            name: "Nosotros",
            link: "/nosotros",
            disabled: true
        },
        {
            name: "Cotizacion",
            link: "/cotizacion",
            disabled: true
        },
        {
            name: "Recursos",
            link: "/recursos",
            disabled: true
        },
        {
            name: "FAQ",
            link: "/faq",
            disabled: true
        },
        {
            name: "Contacto",
            link: "/contacto",
            disabled: true
        },
    ]
    const settings = ["algo"]

    const [state, setState] = React.useState(false)

    const toggleDrawer = () => {
      setState(!state);
    };

    return(
        <ThemeProvider theme={darkTheme}>
            <Drawer
                id="drawer"
                anchor="left"
                open={state}
                onClose={toggleDrawer}
            >
                {pages.map((page, i) => (
                    <Link key={i} to={page.link} style={{textDecoration: "none", padding: "10px 0"}}>
                        <MenuItem onClick={handleCloseNavMenu} onClick={toggleDrawer}>
                            <Typography sx={themeMenuText} textAlign="center">{page.name}</Typography>
                        </MenuItem>
                    </Link>
                ))}
            </Drawer>
            <AppBar position="fixed" color="primary" enableColorOnDark style={{height: "68.5px"}}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        {/* Vista Desktop LOGO*/}
                        <Box sx={{ display: {xs: 'none', md: 'flex' }, m: 2 }}>
                            <img src={JupsimboloBlanco} height="30px" alt='Logo Jupiter Seguros' />
                        </Box>

                        {/* Vista Desktop */}
                        <Link to="/asd" style={{textDecoration: "none", marginRight: "30px"}}>
                            <Typography
                                variant="h6"
                                noWrap
                                // component="a"
                                // href="#app-bar-with-responsive-menu"
                                sx={{
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '0',
                                    color: 'white',
                                    textDecoration: 'none',
                                }}
                            >
                                    Jupiter Seguros
                            </Typography>
                        </Link>

                        {/* Vista Mobile LINKS*/}
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={toggleDrawer}
                                // onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                                {/* <img src={JupsimboloBlanco} height="30px" /> */}
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page, i) => (
                                    <Link key={i} to={page.link} style={{textDecoration: "none"}}>
                                        <MenuItem onClick={handleCloseNavMenu} disabled>
                                            <Typography sx={themeMenuText} textAlign="center">{page.name}</Typography>
                                        </MenuItem>
                                    </Link>
                                ))}
                            </Menu>
                        </Box>

                        {/* Vista Mobile LOGO*/}
                        <Box sx={{ display: { xs: 'flex', md: 'none' }, m: 2 }}>
                            <img src={JupsimboloBlanco} height="30px" alt="Logo Jupiter Seguros"/>
                        </Box>

                        {/* Vista Mobile NOMBRE*/}
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '0',
                            color: 'inherit',
                            textDecoration: 'none',
                            }}
                        >
                            Jupiter Seguros
                        </Typography>

                        {/* Vista Desktop  LINKS*/}
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page, i) => (
                            <Link key={i} to={page.link} style={{textDecoration: "none"}}>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                className='active'
                            >
                                {page.name}
                            </Button>
                            </Link>
                            ))}
                        </Box>

                        {/* SETTINGS */}
                        <Box sx={{ flexGrow: 0 }}>
                            {/* <Tooltip title="Mi Cuenta"> */}
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                                    <PersonIcon />
                                </IconButton>
                            {/* </Tooltip> */}
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {/* {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))} */}
                                <Link  to="/singup" style={{textDecoration: "none", color: "white"}}>
                                    <MenuItem onClick={handleCloseUserMenu} >
                                        <Typography textAlign="center" style={{display:"flex", alignItems: "center"}}> 
                                            <PersonAddIcon style={{marginRight: "5px"}} /> Registro
                                        </Typography>
                                    </MenuItem>
                                </Link>
                                <Divider></Divider>

                                <Link to="/login" style={{textDecoration: "none", color: "white"}}>
                                    <MenuItem onClick={handleCloseUserMenu} disabled>
                                        <Typography textAlign="center" style={{display:"flex", alignItems: "center"}}> 
                                            <DashboardCustomizeIcon style={{marginRight: "5px"}} /> Panel de Clientes
                                        </Typography>
                                    </MenuItem>
                                </Link>
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
};

export default AppBarMenu;
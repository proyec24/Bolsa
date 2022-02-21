import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { Route } from "react-router";
import { BrowserRouter as Router, Link as RouterLink } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Popover from '@material-ui/core/Popover';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    menuDesktop: {
        [[theme.breakpoints.down('xs')]]: {
            display: "none"
        },
    },
    menuMobile: {
        [[theme.breakpoints.up('sm')]]: {
            display: "none"
        }
    },
    menuHide: {
        display: "none",
    },
    menuDrawer: {
        flexShrink: 0,
        background: theme.palette.background.default
    },
    menuDrawerPaper: {
        width: drawerWidth,
        background: theme.palette.background.default
    },
    menuDrawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    menuIcon: {
        fontSize: "3rem",
        color: theme.palette.primary.dark,
        background: theme.palette.primary.light,
        borderRadius: "10rem",
        padding: ".2rem",
        marginLeft: "1rem",
    },
    menuDrawCloseIcon: {
        fontSize: "3rem",
        color: theme.palette.primary.dark,
        background: theme.palette.primary.light,
        borderRadius: "10rem",
        padding: ".2rem",
    },
    menuBorder: {
        height: "1px"
    },
    menuList: {
        background: theme.palette.background.default
    },
    menuListItems: {
        display: "flex",
        width: "100%",
        justifyContent: "center"
    },
    menuIconsDesktop: {
        borderRadius: "1px"
    }
}));

export default function Menu() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [openSubDrawer, setOpenSubDrawer] = React.useState(false);
    const [openSubDrawer2, setOpenSubDrawer2] = React.useState(false);
    const [openSubDrawer3, setOpenSubDrawer3] = React.useState(false);
    const [anchorElEmpresas, setAnchorElEmpresas] = React.useState(null);
    const [anchorElTrabajo, setAnchorElTrabajo] = React.useState(null);
    const [anchorElServicios, setAnchorElServicios] = React.useState(null);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleSubDrawerOpen = () => {
        setOpenSubDrawer(true);
    };

    const handleSubDrawerOpen2 = () => {
        setOpenSubDrawer2(true);
    };

    const handleSubDrawerOpen3 = () => {
        setOpenSubDrawer3(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleSubDrawerClose = () => {
        setOpenSubDrawer(false);
    };

    const handleSubDrawerClose2 = () => {
        setOpenSubDrawer2(false);
    };

    const handleSubDrawerClose3 = () => {
        setOpenSubDrawer3(false);
    };

    const handleClickEmpresas = (event) => {
        setAnchorElEmpresas(event.currentTarget);
    };

    const handleCloseEmpresas = () => {
        setAnchorElEmpresas(null);
    };

    const handleClickTrabajo = (event) => {
        setAnchorElTrabajo(event.currentTarget);
    };

    const handleCloseTrabajo = () => {
        setAnchorElTrabajo(null);
    };

    const handleClickServicios = (event) => {
        setAnchorElServicios(event.currentTarget);
    };

    const handleCloseServicios = () => {
        setAnchorElServicios(null);
    };

    const openEmpresas = Boolean(anchorElEmpresas);
    const idEmpresas = openEmpresas ? 'simple-popover' : undefined;

    const openTrabajo = Boolean(anchorElTrabajo);
    const idTrabajo = openTrabajo ? 'simple-popover' : undefined;

    const openServicios = Boolean(anchorElServicios);
    const idServicios = openServicios ? 'simple-popover' : undefined;

    return(
        <div className={classes.root}>
            <div className={classes.menuMobile}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, open && classes.menuHide)}
                >
                    <MenuOpenIcon className={classes.menuIcon} />
                </IconButton>
                <Drawer
                    className={classes.menuDrawer}
                    variant="persistent"
                    anchor="right"
                    open={open}
                    classes={{
                        paper: classes.menuDrawerPaper,
                    }}
                >
                    <div className={classes.menuDrawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
                            <ChevronLeftIcon className={classes.menuDrawCloseIcon} />
                        </IconButton>
                    </div>
                    {/* Submenu Empresas */}
                    <Divider className={classes.menuBorder}/>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleSubDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, openSubDrawer && classes.menuHide)}
                    >
                        <Typography variant="h5" color="primary">Empresas <ArrowRightIcon color="primary" fontSize="large"/></Typography>
                    </IconButton>
                    <Drawer
                        className={classes.menuDrawer}
                        variant="persistent"
                        anchor="right"
                        open={openSubDrawer}
                        classes={{
                            paper: classes.menuDrawerPaper,
                        }}
                    >
                        <div className={classes.menuDrawerHeader}>
                            <IconButton onClick={handleSubDrawerClose}>
                                <ChevronLeftIcon className={classes.menuDrawCloseIcon} />
                            </IconButton>
                        </div>
                        <List>
                            <Divider className={classes.menuBorder}/>
                            <Route>
                                    <ListItem className={classes.menuListItems}>
                                        <Link href="#">
                                            <Typography variant="h5" color="primary">Registra tu empresa</Typography>
                                        </Link>
                                    </ListItem>
                                    <Divider className={classes.menuBorder}/>
                                    <ListItem className={classes.menuListItems}>
                                        <Link href="#">
                                                <Typography variant="h5" color="primary">Beneficios de filtraciones</Typography>
                                        </Link>
                                    </ListItem>
                                    <Divider className={classes.menuBorder}/>
                                </Route>
                        </List>
                    </Drawer>
                    {/* Submenu Trabajo */}
                    <Divider className={classes.menuBorder}/>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleSubDrawerOpen2}
                        edge="start"
                        className={clsx(classes.menuButton, openSubDrawer2 && classes.menuHide)}
                    >
                        <Typography variant="h5" color="primary">Encuentra Trabajo <ArrowRightIcon color="primary" fontSize="large"/></Typography>
                    </IconButton>
                    <Drawer
                        className={classes.menuDrawer}
                        variant="persistent"
                        anchor="right"
                        open={openSubDrawer2}
                        classes={{
                            paper: classes.menuDrawerPaper,
                        }}
                    >
                        <div className={classes.menuDrawerHeader}>
                            <IconButton onClick={handleSubDrawerClose2}>
                                <ChevronLeftIcon className={classes.menuDrawCloseIcon} />
                            </IconButton>
                        </div>
                        <List>
                            <Divider className={classes.menuBorder}/>
                            <Route>
                                    <ListItem className={classes.menuListItems}>
                                        <Link href="#">
                                            <Typography variant="h5" color="primary">Buscar Trabajo</Typography>
                                        </Link>
                                    </ListItem>
                                    <Divider className={classes.menuBorder}/>
                                    <ListItem className={classes.menuListItems}>
                                        <Link href="#">
                                                <Typography variant="h5" color="primary">Descrube Empresas</Typography>
                                        </Link>
                                    </ListItem>
                                    <Divider className={classes.menuBorder}/>
                                </Route>
                        </List>
                    </Drawer>
                    {/* Submenu Servicios */}
                    <Divider className={classes.menuBorder}/>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleSubDrawerOpen3}
                        edge="start"
                        className={clsx(classes.menuButton, openSubDrawer3 && classes.menuHide)}
                    >
                        <Typography variant="h5" color="primary">Servicios <ArrowRightIcon color="primary" fontSize="large"/></Typography>
                    </IconButton>
                    <Drawer
                        className={classes.menuDrawer}
                        variant="persistent"
                        anchor="right"
                        open={openSubDrawer3}
                        classes={{
                            paper: classes.menuDrawerPaper,
                        }}
                    >
                        <div className={classes.menuDrawerHeader}>
                            <IconButton onClick={handleSubDrawerClose3}>
                                <ChevronLeftIcon className={classes.menuDrawCloseIcon} />
                            </IconButton>
                        </div>
                        <List>
                        <Divider className={classes.menuBorder}/>
                            <Route>
                                    <ListItem className={classes.menuListItems}>
                                        <Link href="#">
                                            <Typography variant="h5" color="primary">Empresas</Typography>
                                        </Link>
                                    </ListItem>
                                    <Divider className={classes.menuBorder}/>
                                    <ListItem className={classes.menuListItems}>
                                        <Link href="#">
                                                <Typography variant="h5" color="primary">¿Quiénes Somos?</Typography>
                                        </Link>
                                    </ListItem>
                                    <Divider className={classes.menuBorder}/>
                                    <ListItem className={classes.menuListItems}>
                                        <Link href="#">
                                                <Typography variant="h5" color="primary">Blog</Typography>
                                        </Link>
                                    </ListItem>
                                    <Divider className={classes.menuBorder}/>
                                    <ListItem className={classes.menuListItems}>
                                        <Link href="#">
                                                <Typography variant="h5" color="primary">Contacto</Typography>
                                        </Link>
                                    </ListItem>
                                    <Divider className={classes.menuBorder}/>
                                </Route>
                        </List>
                    </Drawer>
                    <Divider className={classes.menuBorder}/>
                </Drawer>
            </div>

            <div className={classes.menuDesktop}>
                {/* Empresas Menu */}
                <IconButton className={classes.menuIconsDesktop} aria-describedby={idEmpresas} color="primary" onClick={handleClickEmpresas} >
                    <Typography variant="h5" color="primary">Empresas<ArrowDropDownIcon color="primary" fontSize="large"/></Typography>
                </IconButton>
                <Popover
                    id={idEmpresas}
                    open={openEmpresas}
                    anchorEl={anchorElEmpresas}
                    onClose={handleCloseEmpresas}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                    }}
                >
                    <Route>
                        <List className={classes.menuList}>
                            <ListItem className={classes.menuListItems}>
                                <Link href="#">
                                    <Typography variant="h5" color="primary">Registra tu empresa</Typography>
                                </Link>
                            </ListItem>
                            <Divider className={classes.menuBorder}/>
                            <ListItem className={classes.menuListItems}>
                                <Link href="#">
                                        <Typography variant="h5" color="primary">Beneficios de filtraciones</Typography>
                                </Link>
                            </ListItem>
                        </List>
                    </Route>
                </Popover>
                {/* Servicios Menu */}
                <IconButton className={classes.menuIconsDesktop} aria-describedby={idTrabajo} color="primary" onClick={handleClickTrabajo} >
                    <Typography variant="h5" color="primary">Encuentra Trabajo<ArrowDropDownIcon color="primary" fontSize="large"/></Typography>
                </IconButton>
                <Popover
                    id={idTrabajo}
                    open={openTrabajo}
                    anchorEl={anchorElTrabajo}
                    onClose={handleCloseTrabajo}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                    }}
                >
                    <Route>
                        <List className={classes.menuList}>
                            <ListItem className={classes.menuListItems}>
                                <Link href="#">
                                    <Typography variant="h5" color="primary">Buscar Trabajo</Typography>
                                </Link>
                            </ListItem>
                            <Divider className={classes.menuBorder}/>
                            <ListItem className={classes.menuListItems}>
                                <Link href="#">
                                        <Typography variant="h5" color="primary">Descubre Empresas</Typography>
                                </Link>
                            </ListItem>
                        </List>
                    </Route>
                </Popover>
                {/* Servicios Menu */}
                <IconButton className={classes.menuIconsDesktop} aria-describedby={idServicios} color="primary" onClick={handleClickServicios} >
                    <Typography variant="h5" color="primary">Servicios<ArrowDropDownIcon color="primary" fontSize="large"/></Typography>
                </IconButton>
                <Popover
                    id={idServicios}
                    open={openServicios}
                    anchorEl={anchorElServicios}
                    onClose={handleCloseServicios}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                    }}
                >
                    <Route>
                        <List className={classes.menuList}>
                            <ListItem className={classes.menuListItems}>
                                <Link href="#">
                                        <Typography variant="h5" color="primary">¿Quiénes Somos?</Typography>
                                </Link>
                            </ListItem>
                            <Divider className={classes.menuBorder}/>
                            <ListItem className={classes.menuListItems}>
                                <Link href="#">
                                        <Typography variant="h5" color="primary">Blog</Typography>
                                </Link>
                            </ListItem>
                            <Divider className={classes.menuBorder}/>
                            <ListItem className={classes.menuListItems}>
                                <Link href="#">
                                        <Typography variant="h5" color="primary">Contacto</Typography>
                                </Link>
                            </ListItem>
                        </List>
                    </Route>
                </Popover>
            </div>
        </div>
    )

}

import React, { useState, useEffect }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from '../Logo';
import LogoWhite from '../LogoWhite';
import Account from './Account';
import Menu from './Menu';

const useStyles = makeStyles((theme) => ({
    headerAppBarTransparent: {
        backgroundColor: "transparent",
        boxShadow: "none"
    },
    headerAppBarSolid: {
        backgroundColor: theme.palette.background.default
    },
    headerToolbar: {
        padding: "0 .5rem"
    },
    headerMobile: {
        [[theme.breakpoints.up('sm')]]: {
            display: "none"
        },
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center"
    },
    headerDesktop: {
        [[theme.breakpoints.down('xs')]]: {
            display: "none"
        },
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center"
    },
    headerContent: {
        display: "flex",
        alignItems: "center"
    }
}));

export default function HeaderWhite() {
    const classes = useStyles();
    const [navBackground, setNavBackground] = useState('headerAppBarTransparent')
    const navRef = React.useRef()
    navRef.current = navBackground

    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 1
            if (show) {
                setNavBackground('headerAppBarSolid')
            } else {
                setNavBackground('headerAppBarTransparent')
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return(
        <div className={classes.header}>
            <AppBar className={classes[navRef.current]} position="fixed">
                <Toolbar variant="regular" className={classes.headerToolbar}>
                    <div className={classes.headerMobile}>
                        {window.scrollY > 1 ? <Logo/> : <LogoWhite/>}
                        <div className={classes.headerContent}>
                            <Account/>
                            <Menu/>
                        </div>
                    </div>
                    <div className={classes.headerDesktop}>
                        {window.scrollY > 1 ? <Logo/> : <LogoWhite/>}
                        <div className={classes.headerContent}>
                            <Menu/>
                            <Account/>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )

}

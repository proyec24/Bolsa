import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Link from '@material-ui/core/Link';
import { Route } from "react-router";
import { BrowserRouter as Router, Link as RouterLink } from "react-router-dom";
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import { Typography } from '@material-ui/core';
import BrushIcon from '@material-ui/icons/Brush';
import CodeIcon from '@material-ui/icons/Code';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import ApartmentIcon from '@material-ui/icons/Apartment';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "2rem"
    },
    cardLink: {
        textDecoration: "none",
        "&:hover": {
            textDecoration: "none",
        }
    },
    cardAction: {
        height: "25rem",
        display: "flex",
        flexDirection: "column",
        padding: "2rem",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
    },
    cardIcon:{
        fontSize: "4rem",
        color: theme.palette.primary.dark
    },
    cardTitle: {
        color: theme.palette.primary.dark
    }
}));

export default function Categorias() {
    const classes = useStyles();

    return (
        <Route>
            <Typography variant="h3"  align="center">Empresas afiliadas</Typography>
            <Grid container className={classes.root} spacing={1}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <Link className={classes.cardLink} href="#">
                        <CardActionArea className={classes.cardAction}>
                            <EmojiPeopleIcon className={classes.cardIcon}/>
                            <Typography variant="h3" color="text" className={classes.cardTitle}>Administrativas</Typography>
                            <Typography variant="h5" color="text">Recursos humanos, Finanzas, Administración y Negocios.</Typography>
                        </CardActionArea>
                        </Link>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <Link className={classes.cardLink} href="#">
                        <CardActionArea className={classes.cardAction}>
                            <BrushIcon className={classes.cardIcon}/>
                            <Typography variant="h3" color="text" className={classes.cardTitle}>Diseño</Typography>
                            <Typography variant="h5" color="text">Publicitario, Identidad Corporativa, Web y Didáctico.</Typography>
                        </CardActionArea>
                        </Link>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <Link className={classes.cardLink} href="#">
                        <CardActionArea className={classes.cardAction}>
                            <CodeIcon className={classes.cardIcon}/>
                            <Typography variant="h3" color="text" className={classes.cardTitle}>Programación</Typography>
                            <Typography variant="h5" color="text">Desarrollo Web, Mobile, Backend y Frontend.</Typography>
                        </CardActionArea>
                        </Link>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <Link className={classes.cardLink} href="#">
                        <CardActionArea className={classes.cardAction}>
                            <LoyaltyIcon className={classes.cardIcon}/>
                            <Typography variant="h3" color="text" className={classes.cardTitle}>Ventas</Typography>
                            <Typography variant="h5" color="text">Comercial, Dígital, Empresarial y Negocios.</Typography>
                        </CardActionArea>
                        </Link>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <Link className={classes.cardLink} href="#">
                        <CardActionArea className={classes.cardAction}>
                            <EqualizerIcon className={classes.cardIcon}/>
                            <Typography variant="h3" color="text" className={classes.cardTitle}>Marketing</Typography>
                            <Typography variant="h5" color="text">Redes Sociales, Contenido, Dígital y SEO.</Typography>
                        </CardActionArea>
                        </Link>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <Link className={classes.cardLink} href="#">
                        <CardActionArea className={classes.cardAction}>
                            <ApartmentIcon className={classes.cardIcon}/>
                            <Typography variant="h3" color="text" className={classes.cardTitle}>Servicios</Typography>
                            <Typography variant="h5" color="text">Organización, Dirección, Control laboral y Coordinación.</Typography>
                        </CardActionArea>
                        </Link>
                    </Card>
                </Grid>
            </Grid>
        </Route>
    );
}

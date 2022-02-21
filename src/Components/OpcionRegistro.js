import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import { Route } from "react-router";
import { BrowserRouter as Router, Link as RouterLink } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { Typography } from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        padding:"2rem"
    },
    optionCard: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
        height: "20rem",
        justifyContent: "center",
        backgroundColor: theme.palette.background.default,
        border: "1px solid",
        borderColor: theme.palette.secondary.main
    },
    optionIcon: {
        fontSize:"4rem",
        color: theme.palette.secondary.light
    },
    optionButton: {
        marginTop: "3rem"
    },
    optionLink: {
        textDecoration: "none",
        "&:hover": {
            textDecoration: "none",
        }
    },
}));

export default function OpcionRegistro() {
    const classes = useStyles();

    return (
        <Route>
            <Typography variant="h3"  align="center">Hacemos De Tu Búsqueda Algo Más Fácil</Typography>
            <Typography variant="h5"  align="center">Crea Tu Perfil y Regístrate</Typography>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Card className={classes.optionCard}>
                        <LocationCityIcon className={classes.optionIcon}/>
                        <Typography variant="h4"  align="center" color="primary">Soy Empresa</Typography>
                        <Typography variant="h5"  align="center">Encuentra los mejores candidatos y obten excelentes filtraciones.</Typography>
                        <Link className={classes.optionLink}  component={RouterLink} to="/registro-empresas">
                            <Button className={classes.optionButton} variant="outlined" color="secondary">
                                Regístrate Como Empresa
                            </Button>
                        </Link>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card className={classes.optionCard}>
                        <FaceIcon className={classes.optionIcon}/>
                        <Typography variant="h4"  align="center" color="primary">Soy Talento</Typography>
                        <Typography variant="h5"  align="center">Inicia Sesión y obten los mejores recursos para las mejores empresas.</Typography>
                        <Link className={classes.optionLink} component={RouterLink} to="/Registro" >
                            <Button className={classes.optionButton} variant="outlined" color="secondary">
                                Regístrate Como Candidato
                            </Button>
                        </Link>
                    </Card>
                </Grid>
            </Grid>
        </Route>
    );
}

import React, { useState, useEffect } from "react";
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailIcon from '@material-ui/icons/Mail';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footerLink: {
        textDecoration: "none",
        "&:hover": {
            textDecoration: "none",
        }
    },
    imgFooter:{
        width:"100px",
        marginTop:"-10%",
        [theme.breakpoints.down('sm')]: {
            marginTop:"-2%",
        },
    },
    col:{
        marginTop:"5%",
        width:"33.3%",
        float:"left",
        padding:"0px",
        marginLeft:"10%",
        [theme.breakpoints.down('sm')]: {
          width: "100%",
          float:"center"
        },
    },
    col2:{
        marginTop:"5%",
        width:"33.3%",
        float:"left",
        padding:"0px",
        marginLeft:"10%",
        [theme.breakpoints.down('sm')]: {
          width: "100%",
          float:"center",
          display:"none"
        },
    },
    listUnstyled2:{
        listStyle:"none"
    },
    mainFooter: {
        width:"100%",
        margin:"0px",
        height:"350px",
        padding:"0px",
        paddingRight:"0px",
        backgroundColor: "#343f5a",
        [theme.breakpoints.down('sm')]: {
            height:"400px",
        },
    },
    container:{
        width:"100%",
        height:"100%",
        paddingRight:"0px"
    },
    listUnstyled:{
        color:theme.palette.secondary.main
    },
    par:{
        color:"#9b9b9b"
    },
    par2:{
        color:"#9b9b9b"
    },
    icon:{
        color:theme.palette.secondary.main,
        fontSize:"2rem",
        marginRight:"4%"
    },
    socialMedia:{
        width:"50%",
        marginTop:"10%"
    },
    row:{
        display:"flex",
        width:"100%",
        color:"white",
        justifyContent:"center",
        paddingRight:"0px",
        height:"100%",
        [theme.breakpoints.down('sm')]: {
            display:"inherit"
        },
    },
    p:{
        display:"flex",
        fontSize:"1rem",
        width:"50%",
        marginBottom:"4%"
    },
    p2:{
        marginTop:"3%"
    },
    socialIcon:{
        fontSize:"3rem",
        color:theme.palette.secondary.main,
        marginRight:"5%"
    },
    entity:{
        color:theme.palette.primary.light
    }
  }));
  export default function Categorias() {
    const classes = useStyles();
    return(
        <div className={classes.mainFooter}>
            <div className={classes.container}>
                <div className={classes.row}>
                    {/*Column1*/}
                    <div className={classes.col}>
                        <img className={classes.imgFooter} src="https://growthyinvestors.com/wp-content/uploads/2021/05/TemplatesWEBHome_Mesa-de-trabajo-1-copia-12.png"/>
                        <div>
                            <div className={classes.p}>
                                <LocationOnIcon className={classes.icon}/><p className={classes.par}>Ubicación</p>
                            </div>
                            <div className={classes.p}>
                                <MailIcon className={classes.icon}/><p className={classes.par}>Correo</p>
                            </div>    
                            <div className={classes.p}>
                                <PhoneIcon className={classes.icon}/><p className={classes.par}>Telefono</p>
                            </div>
                        </div>
                        <div className={classes.socialMedia}>
                            <Link className={classes.footerLink} href="#"><FacebookIcon className={classes.socialIcon}/></Link>
                            <Link className={classes.footerLink} href="#"><TwitterIcon className={classes.socialIcon}/></Link>
                            <Link className={classes.footerLink} href="#"><LinkedInIcon className={classes.socialIcon}/></Link>
                        </div>
                    </div>
                    {/*Column2*/}
                    <div className={classes.col2}>
                        <h1 className={classes.entity}>Entradas</h1>
                        <ul className={classes.listUnstyled}>
                            <li className={classes.p2}>
                                <Link className={classes.footerLink} href="#">
                                    <p className={classes.par}>Empresas Afiliadas</p>
                                </Link>
                            </li>
                            <li className={classes.p2}>
                                <Link className={classes.footerLink} href="#">
                                    <p className={classes.par}>Tablero de trabajos</p>
                                </Link>
                            </li>
                            <li className={classes.p2}>
                                <Link className={classes.footerLink} href="#">
                                    <p className={classes.par}>Confidencialidad de datos</p>
                                </Link>
                            </li>
                            <li className={classes.p2}>
                                <Link className={classes.footerLink} href="#">
                                    <p className={classes.par}>Vacantes constantes</p>
                                </Link>
                            </li>
                            <li className={classes.p2}>
                                <Link className={classes.footerLink} href="#">
                                    <p className={classes.par}>Nosotros</p>
                                </Link>
                            </li>
                            <li className={classes.p2}>
                                <Link className={classes.footerLink} href="#">
                                    <p className={classes.par}>Test psicométricros</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/*Column3*/}
                    <div className={classes.col}>
                        <p className={classes.par2}>
                            2021 CNI Derechos Reservados
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

  
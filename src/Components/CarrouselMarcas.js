import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import Service from "../service";
import LOCAL_ROUTE from "../../src/const.copy";

const useStyles = makeStyles((theme) => ({
  Containercarrousel: {
    height: "40rem",
    width: "100%",
    padding: "6rem",
    marginBottom: "5%",
    [theme.breakpoints.up("md")]: {
      padding: "4rem",
    },
  },
  CarrouselImg: {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    height: "100%",
    width: "100%",
    backgroundSize: "cover",
    [theme.breakpoints.up("sm")]: {
      height: "40%",
      width: "40%",
    },
  },
  CarrouselTitle: {
    fontSize: "2.3rem",
    textAlign: "center",
    marginTop: "6rem",
    marginBottom: "4rem",
    [theme.breakpoints.up("sm")]: {
      fontSize: "3rem",
    },
    [theme.breakpoints.up("md")]: {
      marginBottom: "6rem",
    },
  },
}));

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function CarrouselMarcas() {
  const classes = useStyles();

  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    Service.getData("imagenEmpresa").then((data) => {
      console.log(data);
      setImagenes(data);
    });
  }, [imagenes.image_path]);

  return (
    <div className={classes.root}>
      {/*Container Fluid*/}
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="false" className={classes.Containercarrousel}>
          <h1 className={classes.CarrouselTitle}>Empresas afiliadas</h1>
          <Carousel breakPoints={breakPoints} infinite={true}>
            {imagenes.map((imagen) => (
              <Item>
                <img
                  className={classes.CarrouselImg}
                  src={LOCAL_ROUTE + imagen.image_path}
                />
              </Item>
            ))}

            {/*
              <Item><img className={classes.CarrouselImg} src="https://growthyinvestors.com/wp-content/uploads/2021/07/adidas.png"/></Item>
              <Item><img className={classes.CarrouselImg} src="https://growthyinvestors.com/wp-content/uploads/2021/07/pepsi-2.png"/></Item>
              <Item><img className={classes.CarrouselImg} src="https://growthyinvestors.com/wp-content/uploads/2021/07/derechos-de-autor-6.png"/></Item>
              <Item><img className={classes.CarrouselImg} src="https://growthyinvestors.com/wp-content/uploads/2021/07/logotipo-de-dribbble-3.png"/></Item>
              <Item><img className={classes.CarrouselImg} src="https://growthyinvestors.com/wp-content/uploads/2021/07/logotipo-del-equipo-de-rugby-2.png"/></Item>
              <Item><img className={classes.CarrouselImg} src="https://growthyinvestors.com/wp-content/uploads/2021/07/logotipo-del-metro-de-ankara-2.png"/></Item>
              <Item><img className={classes.CarrouselImg} src="https://growthyinvestors.com/wp-content/uploads/2021/07/logotipo-del-metro-de-la-haya-2.png"/></Item>
              <Item><img className={classes.CarrouselImg} src="https://growthyinvestors.com/wp-content/uploads/2021/07/logotipo-del-sitio-web-maxcdn-2.png"/></Item>
              <Item><img className={classes.CarrouselImg} src="https://growthyinvestors.com/wp-content/uploads/2021/07/nike-2.png"/></Item>
             */}
          </Carousel>
        </Container>
      </React.Fragment>
      {/*Container Fluid*/}
    </div>
  );
}

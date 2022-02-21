import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Service from "../service";
import Divider from "@material-ui/core/Divider";
import PlaceIcon from "@material-ui/icons/Place";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import LOCAL_ROUTE from "../../src/const.copy";

const useStyles = makeStyles((theme) => ({
  Container: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexGrow: "2",
    flexWrap: "wrap",
    padding: "1.5rem",
    paddingBottom: "0",
    marginBottom: "0",
    [theme.breakpoints.up("lg")]: {
      padding: "4rem",
      justifyContent: "flex-start",
      marginLeft: "3rem",
    },
    [theme.breakpoints.up("xl")]: {
      padding: "6rem",
      justifyContent: "flex-start",
      marginLeft: "5rem",
    },
  },
  Card: {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    padding: "1.5rem",
    borderRadius: "5rem",
    display: "flex",
    height: "15rem",
    width: "60rem",
    marginBottom: "4rem",
    [theme.breakpoints.up("sm")]: {
      width: "50rem",
    },
    [theme.breakpoints.up("md")]: {
      marginRight: "4rem",
      width: "50rem",
    },
    [theme.breakpoints.up("lg")]: {
      width: "30%",
    },
  },
  CardImg: {
    width: "40%",
    height: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    marginRight: "1rem",
    borderRadius: "3rem",
    [theme.breakpoints.up("sm")]: {
      width: "25%",
    },
    [theme.breakpoints.up("md")]: {
      width: "25%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "30%",
    },
  },
  InnerContainer: {
    padding: "2px 10px",
    fontSize: "1.2rem",
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.6rem",
    },
  },
  JobsTitle: {
    textAlign: "center",
    paddingBottom: "4rem",
  },
  FlexText: {
    marginTop: "2px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      marginTop: "1rem",
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  Margin: {
    marginRight: "2rem",
  },
  Paragraph: {
    marginTop: "6px",
    fontSize: "1rem",
    [theme.breakpoints.up("sm")]: {
      marginTop: "1rem",
      fontSize: "1.2rem",
      width: "80%",
    },
  },
  Align: {
    display: "flex",
    marginTop: "6px",
    [theme.breakpoints.up("sm")]: {
      marginTop: "0px",
    },
  },
  RoundedSelector: {
    width: "90%",
    margin: "0 auto",
    marginTop: "2rem",
    marginBottom: "2rem",
    [theme.breakpoints.up("sm")]: {
      width: "70%",
    },
    [theme.breakpoints.up("md")]: {
      width: "60%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "90%",
    },
    [theme.breakpoints.up("xl")]: {
      width: "90%",
    },
  },
  tab: {
    color: "black",
  },
  tabChange: {
    backgroundColor: "rgba(52, 122, 255, 0.06)",
  },
}));

export default function Card() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [flag, setFlag] = React.useState(true);

  const handleClick = () => {
    setFlag(!flag);
    if (!flag) {
      setVacantes(vacantesFecha);
    } else {
      setVacantes(vacantesSalario);
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [vacantes, setVacantes] = useState([]);
  const [vacantesFecha, setVacantesFecha] = useState([]);
  const [vacantesSalario, setVacantesSalario] = useState([]);

  useEffect(() => {
    Service.getData("vacantesFecha").then(data => {
      setVacantesFecha(data);      
      setVacantes(data);
    });
    vacantes.forEach((element) => console.log(element));
  }, [vacantesFecha.sueldo_min]);

  useEffect(() => {
    Service.getData("vacantesSalario").then((data) => {
      setVacantesSalario(data);
    });
  }, [vacantesSalario.sueldo_min]);

  return (
    <div className={classes.root}>
      {/*Container Fluid*/}
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="false">
          <h1 className={classes.JobsTitle}>Los mejores trabajos para ti</h1>
          <Paper square className={classes.RoundedSelector}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="fullWidth"
              indicatorColor="secondary"
              textColor="secondary"
              onClick={handleClick}
            >
              <Tab
                className={flag ? classes.tabChange : classes.tab}
                label="ÚLTIMOS EMPLEOS"
              />
              <Tab
                className={flag ? classes.tab : classes.tabChange}
                label="LOS DESTACADOS DE LA SEMANA"
              />
            </Tabs>
          </Paper>
          <div className={classes.Container}>
            {vacantes.map((vacante) => (
              <div className={classes.Card}>
                {/*Puede ser un icono tambien*/}
                <img
                  src={LOCAL_ROUTE + vacante.imagen}
                  className={classes.CardImg}
                />
                <Divider orientation="vertical" />
                <div className={classes.InnerContainer}>
                  <h4>{vacante.puesto}</h4>
                  <div className={classes.FlexText}>
                    {vacante.sueldo_min === vacante.sueldo_max ? (
                      <h5 className={classes.Margin}>$ {vacante.sueldo_min}</h5>
                    ) : (
                      <h5 className={classes.Margin}>
                        $ {vacante.sueldo_min} - {vacante.sueldo_max}
                      </h5>
                    )}

                    <h5 className={classes.Align}>
                      <PlaceIcon /> {vacante.municipio}
                    </h5>
                  </div>
                  <p className={classes.Paragraph}>{vacante.descripcion}...</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </React.Fragment>
      {/*Container Fluid*/}
    </div>
  );
}

import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Slider, Row, RangeSlider, SelectPicker, InputGroup, InputNumber } from 'rsuite';
import "./Dashboard.css";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Service from "../../service";
import LOCAL_ROUTE from "../../const.copy";
import PlaceIcon from "@material-ui/icons/Place";

const useStyles = makeStyles((theme) => ({
  mainContaint: {
    padding: "0%",
    paddingTop: "12rem",
    marginLeft: "5%",
    display: "flex",
    width: "100%",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "12rem",
      display: "inherit",
      marginLeft: "10%",
    },
  },
  col1: {
    padding: "0%",
    paddingLeft: "5%",
    width: "30%",
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      width: "83%",
      padding: "0%",
      margin: "0%"
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "5%",
      width: "30%",
      margin: "0 auto",
    },
  },
  col2: {
    width: "70%",
    marginRight: "0%",
    marginBottom: "5%",
    paddingRight: "0%",
    [theme.breakpoints.down("sm")]: {
      width: "80% !important",
      marginLeft: "100%"
    },
    [theme.breakpoints.up("sm")]: {
      width: "70%",
      marginRight: "0%",
      marginBottom: "5%",
    },
  },
  locationCont: {
    width: "100%",
    height: "80%",
    paddingLeft: "1%",
    paddingRight: "10%",
  },
  col2: {
    width: "70%",
    marginRight: "20%",
    marginBottom: "10%",
  },
  location: {
    width: "100%",
    height: "auto",
    marginBottom: "10%",
    border: "2px solid",
    padding: "0%",
    borderColor: theme.palette.secondary.dark
  },
  salary: {
    width: "100%",
    height: "auto",
    marginBottom: "10%",
    border: "2px solid",
    padding: "0%",
    borderColor: theme.palette.secondary.dark
  },
  category: {
    width: "100%",
    height: "auto",
    marginBottom: "10%",
    border: "2px solid",
    padding: "0%",
    borderColor: theme.palette.secondary.dark
  },
  filterLoc: {
    margin: "0px",
    width: "100%",
    height: "auto",
  },
  filterTitle: {
    fontFamily: "Roboto",
    color: theme.palette.primary.light,
    fontSize: "2rem",
    width: "100%",
    marginBottom: "8%",
    textAlign: "center"
  },
  filterItem: {
    backgroundColor: theme.palette.secondary.dark,
    padding: "0px",
    width: "100%",
    height: "10%",
  },
  min: {
    width: "50%",
    float: "left",
    marginTop: "1%",
    marginLeft: "5%",
    marginRight: "32%"
  },
  max: {
    width: "50%",
    float: "left",
    marginTop: "1%",
  },
  minmaxCont: {
    display: "flex",
    width: "100%",
    marginBottom: "10px",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    },
    [theme.breakpoints.up("sm")]: {
      display: "flex"
    },
  },
  RangeSlider: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    },
    [theme.breakpoints.up("sm")]: {
      display: "inherit"
    },
  },
  SelectPicker: {
    [theme.breakpoints.down("sm")]: {
      display: "inherit"
    },
    [theme.breakpoints.up("sm")]: {
      display: "none"
    },
  },
  FlexContainer: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
    height: "90%",
    margin: "0 auto",
    marginBottom:"20%",
    marginTop: "2rem",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: "0px"
    },
    [theme.breakpoints.up("sm")]: {
      width: "90%",
      marginRight: "0%",
    },
  },
  Card: {
    "&:hover": {
      backgroundColor: "rgba(157, 157, 145, 0.06)",
    },
    width: "100%",
    height: "20%",
    marginBottom: "1rem",
  },
  FlexImage: {
    display: "flex",
    flexGrow: "2",
    alignItems: "center",
    marginBottom: "2rem",
  },
  Image: {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    marginRight: "1rem",
    marginLeft: "1rem",
    padding: "10%",
  },
  ImageContainer: {
    height: "100%",
    width: "30%",
    marginRight: "2rem",
    [theme.breakpoints.up("md")]: {
      width: "20%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "10%",
    },
    [theme.breakpoints.up("xl")]: {
      width: "5%",
    },
  },
  CardContent: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  FlextText: {
    display: "flex",
  },
  MarginText: {
    marginRight: "1.5rem",
  },
  Paragraph: {
    textAlign: "justify",
    fontSize: "1rem",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#5d7fa3",
    width: "5%",
    height: "50%",
    margin: "2rem",
    marginLeft: "0rem",
  },
  ButtonContainer: {
    width: "100%",
    height: "10%",
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "2rem",
  },
}));

export default function Panel() {
  const isFirstRender = useRef(true)

  const classes = useStyles();
  const [value, setValue] = useState([4000, 8000]);
  const [vacantes, setVacantes] = useState([]);
  const [municipios, setMunicipios] = useState([]);
  const [categorias, setCategorias] = useState([]);

  const [municipio, setMunicipio] = useState(0);
  const [categoria, setCategoria] = useState(0);

  const data = [{
    label: 'Pearlie',
    value: 2,
    role: 'Master',
  }];

  useEffect(() => {
    const params = {
      sueldoMin: value[0],
      sueldoMax: value[1],
      municipio: municipio,
      categoria: categoria,
    };
    console.log('efecto de vacante');
    Service.postData("vacantes", params)
      .then((data) => {
        setVacantes(data);
      });
  }, [vacantes.sueldo_min]);

  useEffect(() => {
    Service.getData("municipios")
      .then(data => {
        const municipios_ = data.map((value) => {
          return {
            value: value.id_municipio,
            label: value.nombre,
          }
        })
        setMunicipios(municipios_);
      })
  }, [municipios.id_municipio]);

  useEffect(() => {
    Service.getData("categorias")
      .then(data => {
        const categorias_ = data.map((value) => {
          return {
            value: value.id_categoria,
            label: value.nombre,
          }
        })
        setCategorias(categorias_);
      })
  }, [categorias.id_categoria]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false // toggle flag after first render/mounting
      return;
    }
    filter();
  }, [municipio]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false // toggle flag after first render/mounting
      return;
    }
    filter();
  }, [categoria]);

  function filter() {
    const params = {
      sueldoMin: value[0],
      sueldoMax: value[1],
      municipio: municipio,
      categoria: categoria,
    };
    console.log(params);
    Service.postData("vacantes", params)
      .then(data => {
        setVacantes(data);
      })
  }

  return (
    <div className={classes.mainContaint}>
      <div className={classes.col1}>
        <div className={classes.location}>
          <div className={classes.filterItem}>
            <p className={classes.filterTitle}>Localidad</p>
          </div>
          <div className={classes.locationCont}>
            <section className={classes.filterLoc}>
              <SelectPicker data={municipios} appearance="subtle"
                style={{ color: "#5d7fa3", width: "95%", marginLeft: 16, marginBottom: 16 }}
                onChange={value => {
                  if (value === null)
                    value = '0';
                  setMunicipio(parseInt(value));
                }
                } />
            </section>
          </div>
        </div>
        <div className={classes.salary}>
          <div className={classes.filterItem}>
            <p className={classes.filterTitle}>Salario</p>
          </div>
          <div className={classes.locationCont}>
            <section className={classes.filterLoc}>
              <RangeSlider
                progress
                step={500}
                style={{
                  marginLeft: 16,
                  width: "95%"
                  , marginBottom: 16
                }}
                className={classes.RangeSlider}
                value={value}
                onChange={value => {
                  setValue(value);
                  filter();
                }}
                min={500}
                max={20000}
              />
              <SelectPicker
                data={data}
                className={classes.SelectPicker}
                appearance="subtle"
                style={{ color: "#5d7fa3", width: "95%", marginLeft: 16, marginBottom: 16 }}
                handleStyle={{ color: "#5d7fa3" }}
              />
              <div className={classes.minmaxCont}>
                <p className={classes.min}>500 MXN</p>
                <p className={classes.max}>20000 MXN</p>
              </div>
            </section>
          </div>
        </div>
        <div className={classes.category}>
          <div className={classes.filterItem}>
            <p className={classes.filterTitle}>Categoria</p>
          </div>
          <div className={classes.locationCont}>
            <section className={classes.filterLoc}>
              <SelectPicker data={categorias} appearance="subtle"
                style={{ color: "#5d7fa3", width: "100%", marginLeft: 6, marginBottom: 16 }}
                onChange={value => {
                  if (value === null)
                    value = '0';
                  setCategoria(parseInt(value));
                }
                } />
            </section>
          </div>
        </div>
      </div>
      <div className={classes.col2}>
        <div className={classes.FlexContainer}>

          {vacantes.map((vacante) => (

            <div className={classes.Card}>
              <div className={classes.FlexImage}>
                <div className={classes.ImageContainer}>
                  <img
                    src={LOCAL_ROUTE + vacante.imagen}
                    className={classes.Image}
                  />
                </div>
                <div className={classes.CardContent}>
                  <Typography variant="h5">{vacante.puesto}</Typography>
                  <div className={classes.FlextText}>
                    <Typography variant="h6" className={classes.MarginText}>
                      {vacante.empresa}
                    </Typography>
                    <Typography variant="h6"><PlaceIcon />{vacante.municipio}</Typography>
                  </div>
                  <Typography variant="p" className={classes.Paragraph}>
                    {vacante.descripcion}
                  </Typography>
                </div>
              </div>
              <Divider />
            </div>
          ))}

        </div>
        <div className={classes.ButtonContainer}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            <ArrowBackIosIcon />
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            <ArrowForwardIosIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}

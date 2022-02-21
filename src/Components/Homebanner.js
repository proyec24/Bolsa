import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from '@material-ui/core/Button';
import Service from "../service";

const useStyles = makeStyles((theme) => ({
  img: {
    height: "100vh",
    width: "100vh",
  },
  Heroimage: {
    backgroundImage: `url("https://growthyinvestors.com/wp-content/uploads/2021/06/achievement-5597527_1920.png")`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    height: "100%",
    width: "100%",
    backgroundSize: "cover",
    paddingTop: "3rem%",
    [theme.breakpoints.up('sm')]: {
      float: "right",
      width: "50%",
      marginTop: "7rem"
    },
    [theme.breakpoints.up('lg')]: {
      height: "100%"
    }
  },
  Containerbanner: {
    backgroundColor: theme.palette.secondary.light,
    height: "400px",
    paddingTop: "8rem",
    [theme.breakpoints.up('sm')]: {
      paddingTop: "0rem",
    },
    [theme.breakpoints.up('md')]: {
      height: "500px"

    },
    [theme.breakpoints.up('lg')]: {
      height: "60rem"
    },
    [theme.breakpoints.up('xl')]: {
      height: "80rem"
    }
  },
  Flexsearchbox: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.up('md')]: {
      float: "left"
    }
  },
  Searchbox: {
    width:"12rem",
    height:"4.5rem",
    [theme.breakpoints.up('md')]: {
      height: "5rem",
      width: "15rem"
    },
    [theme.breakpoints.up('lg')]: {
      height: "6rem",
      width: "18rem"
     },
     [theme.breakpoints.up('xl')]: {
      height: "8rem",
      width: "20rem"
    }
  },
  Roundedbox: {
    backgroundColor: "white",
    display: "flex",
    borderRadius: "25px"
  },
  Sendbutton: {
    width: "8rem",
    borderRadius: "25px",
    marginLeft: "1rem",
    [theme.breakpoints.up('md')]: {
      width: "12rem"
    },
    [theme.breakpoints.up('lg')]: {
      width: "16rem"
    }
  },
  Bannertittle: {
    paddingTop: "2rem",
    paddingBottom: "3rem",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.up('md')]: {
      fontSize: "2.5rem"
    },
    [theme.breakpoints.up('sm')]: {
      display: "block",
      fontSize: "2rem"
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: "3.5rem"
     },
     [theme.breakpoints.up('xl')]: {
      fontSize: "5rem"
    }
  },
  ContainerSearch: {
    [theme.breakpoints.up('sm')]: {
      float: "left",
      paddingTop: "20%"
    }, 
    [theme.breakpoints.up('md')]: {
      paddingTop: "18%",
      paddingLeft: "5%"
    },
    [theme.breakpoints.up('lg')]: {
     paddingTop: "15%" 
    }
  },
  inputLabel: {
    fontSize: "1rem",
    [theme.breakpoints.up('sm')]: {
      fontSize: "1rem",
      paddingBottom: "4px"
    },
    [theme.breakpoints.up('md')]: {
      fontSize: "1.2rem"
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: "1.5rem",
      paddingTop: "4px"
    }
  }
}));

export default function Homebanner() {
  const classes = useStyles();
 
  const [ciudades, setCiudades] = useState([]);
  const [puestos, setPuestos] = useState([]);
  const [id_ciudad, setId_ciudad] = useState(0);
  const [id_puesto, setId_puesto] = useState(0);

  useEffect(() => {
    Service.getData("municipios").then(data => {
      console.log(data);
            setCiudades(data);
        })
  },[ciudades.nombre]);

  useEffect(() => {
        Service.getData("puestos").then(data => {
          console.log(data);
                setPuestos(data);
            })
  },[puestos.nombre]);

  useEffect(() => {
    console.log("id_ciudad: " + id_ciudad);
  },[id_ciudad]);

  useEffect(() => {
    console.log("id_puesto: " + id_puesto);
  },[id_puesto]);

  return (
    <div className={classes.root}>
      {/*Container Fluid*/}
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="false" className={classes.Containerbanner}>
          <div className={classes.ContainerSearch}>
          <h1 className={classes.Bannertittle}>
            Encuentra el trabajo de tus sueños
          </h1>
          <div className={classes.Flexsearchbox}>
            <div className={classes.Roundedbox}>
            <div className={classes.Searchbox}>
              <Autocomplete onChange={(event, value) => {
                 if(value === null){
                  setId_puesto(0);
                }else{
                  setId_puesto(value.id_puesto)
                }
              }
              }
                id="free-solo-demo"
                freeSolo
                options={puestos}
                getOptionLabel={(option) => option.nombre}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Empleo"
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{className: classes.inputLabel}}
                  />
                )}
              />
            </div>
            <div className={classes.Searchbox}>
            <Autocomplete onChange={(event, value) => {
              if(value === null){
                setId_ciudad(0);
              }else{
                setId_ciudad(value.id_municipio)
              }
            }
            }
              id="combo-box-demo"
              options={ciudades}
              getOptionLabel={(option) => option.nombre}
              
              renderInput={(params) => (
                <TextField {...params} label="Lugar" variant="outlined" InputLabelProps={{className: classes.inputLabel}}/>
              )}
            />
            </div>
            </div>
            <Button className={classes.Sendbutton} color="primary" variant="contained" type="submit">Buscar</Button>
          </div>
          </div>
          <div className={classes.Heroimage}></div>
        </Container>
      </React.Fragment>
      {/*Container Fluid*/}
    </div>
  );
}




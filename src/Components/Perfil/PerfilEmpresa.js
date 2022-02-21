import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Tabs,
  Tab,
  Box,
  Paper,
  Grid,
  Button,
  Avatar,
  Link,
} from "@material-ui/core";

import DashboardIcon from "@material-ui/icons/Dashboard";
import EditIcon from "@material-ui/icons/Edit";
import WorkIcon from "@material-ui/icons/Work";
import MailIcon from "@material-ui/icons/Mail";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LanguageIcon from "@material-ui/icons/Language";
import PhoneIcon from "@material-ui/icons/Phone";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import BusinessIcon from "@material-ui/icons/Business";
import Divider from "@material-ui/core/Divider";
import SchoolIcon from "@material-ui/icons/School";
import Service from "../../service";
import LOCAL_ROUTE from "../../const.copy";
import PlaceIcon from "@material-ui/icons/Place";

import Header from "../Header/Header";

 let company_image =
"https://growthyinvestors.com/wp-content/uploads/2021/05/cropped-TemplatesWEBHome_Mesa-de-trabajo-1-copia-10-1.png",
  company_name = "CNI Consultores",
  company_field = "Desarrollo de software",
  company_ubication = "Edmundo de Amicis 133, Jardines Vallarta",
  company_phone = "3331215825",
  company_mail = "info@cniconsultores.com",
  company_webpage = "https://www.cniconsultores.com/",
  company_country = "México",
  company_state = "Jalisco",
  company_city = "Zapopan",
  company_zip = "45027",
  password="",
  pass1="",
  pass2="",
  passState="",
  passState2="",
  file=null;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  "@global": {
    ".Mui-selected": {
      backgroundColor: "#7ca9d933 !important",
    },
    ".PrivateTabIndicator-vertical-34.PrivateTabIndicator-vertical-42": {
      backgroundColor: "#5d7fa3 !important",
      left: "0 !important",
    },
    ".MuiTab-wrapper": {
      flexDirection: "row !important",
    },
    ".MuiTab-wrapper>*:first-child": {
      margin: "0 10px 0 0 !important",
    },
  },
  root: {
    padding: "10rem 2rem",
    width: "100%",
    maxWidth: 1200,
    margin: "0 auto",
  },
  profileImg: {
    width: "100%",
    maxWidth: 300,
    borderRadius: "50%",
    padding: "2rem",
    display: "block",
    margin: "0 auto",
  },
  tabs: {
    padding: "2rem 0",
  },
  profileInfoPaper: {
    padding: "2rem",
    marginBottom: "2rem",
    width: "100%",
  },
  profileListItem: {
    display: "flex",
    alignItems: "center",
  },
  profileTextContainer: {
    padding: "2rem",
  },
  profileListText: {
    fontWeight: 600,
    marginLeft: "1rem",
  },
  profileContentText: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.background.default,
    padding: "1rem",
  },
  profileText: {
    fontWeight: 600,
  },
  profileTextContent: {
    display: "flex",
    alignItems: "center",
  },
  profilePaper: {
    padding: "0",
    marginBottom: "2rem",
  },
  profileDescription: {
    padding: "0",
  },
  profileExpListItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  profileContainerImg: {
    width: 100,
    height: 100,
    margin: "0 20px 20px",
  },
  profileInfo: {
    display: "flex",
    flexDirection: "column",
    placeContent: "center space-evenly",
  },
  profileInfoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
    gridTemplateRows: "1fr",
    width: "100%",
    gap: 10,
  },
  companyDescription: {
    padding: 0,
  },
  profilePaper: {
    marginBottom: "2rem",
  },
  profileDescription: {
    padding: "2rem",
  },
  profileExpListItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  profileContentGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "2rem",
  },
  profileEditImg: {
    width: "10rem",
    height: "10rem",
    marginRight: "1rem",
  },
  profileFormLabel: {
    fontSize: "14px",
  },
  editInputs: {
    width: "100%",
    padding: "1rem",
    border: `2px solid ${theme.palette.secondary.main}`,
    borderRadius: ".5rem",
    outline: "none",
    fontSize: "1.4rem",
    color: theme.palette.text.primary,
  },
  btnChanges: {
    display: "flex",
    margin: "2rem auto",
  },
  tabButton: {
    width: "100%",
    color: theme.palette.primary.main,
    padding: "2rem 0",
  },
  profilePaperDivided: {
    margin: "0 2rem 0 0",
  },
//CARTAS VACANTES
Container: {
  height: "50rem",
  width: "100%",
  justifyContent: "center",
  flexGrow: "2",
  flexWrap: "wrap",
  padding: "1.5rem",
  paddingBottom: "0",
  marginBottom: "0",
  overflowY:'scroll',
  [theme.breakpoints.up("lg")]: {
    padding: "0rem",
    justifyContent: "flex-start",
    marginLeft: "0rem",
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
    width: "100%",
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
}));

export default function PerfilEmpresa() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [empresa, setEmpresa] = useState([]);
  const [vacantes, setVacantes] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    
    console.log("recuperar valor original")
    leerDatosEmpresa();
   
  };

  const logOut = () => {
    sessionStorage.clear();
  };

  const manejarCambio = (evento) => {
    
    const valor = evento.target.value;
    const id = evento.target.id;
     
    var myString = id;
    eval(myString +" = valor");
  };

const leerDatosEmpresa = () =>{
  Service.getData("perfil_empresa").then(data => {
    setEmpresa(data);    
  });
  company_image = LOCAL_ROUTE + empresa.image;
  company_name = empresa.nombre;
  company_field = empresa.categoria;
  company_ubication = empresa.direccion;
  company_phone = empresa.telefono;
  company_mail = empresa.email;
  company_webpage = empresa.pagina;
  company_country = "México";
  company_state = "Jalisco";
  company_city = empresa.municipio;
  company_zip = empresa.codigo_postal;
}

  useEffect(() => {
    leerDatosEmpresa();
  }, [empresa.nombre]);

  useEffect(() => {
    Service.getData("vacantesPerfil").then(data => {
      setVacantes(data);
    });
  }, [vacantes.sueldo_min]);

  const verficarDisponibilidad = (e) => {
    Service.postData("check_password", password).then((data) => {
      console.log(data);
     
        if (!data.password) passState = "Contraseña actual incorrecta";
        else passState = "true";

        if(password.length<=0) passState ="";

        console.log("passState: " + passState);
        console.log("passState2: " + passState2);
        console.log("pass1: " + pass1);
        console.log("pass2: " + pass2);
    });
  }

  const verificarContras = () =>{
    if(pass1 != pass2){
      passState2 = "Contraseña nueva no coincide";
    } else if(pass1===pass2) {
      passState2 ="true"
    }

    if(pass1.length<=0 && pass2.length<=0) passState2="";
  }

  const updateData = () =>{
    const empresa ={
      company_image,
      company_name,
      company_field,
      company_ubication,
      company_phone,
      company_mail,
      company_webpage,
      company_country,
      company_state,
      company_city,
      company_zip,
      pass1,
    } 
    
    if(passState === "true" && passState2 === "true"){
        Service.postData("updateEmpresa", empresa).then(data => {
      
        });
        console.log("datos actualizados")
      }

      if(passState ==="" && passState2===""){
        empresa.pass1 = "N";
        Service.postData("updateEmpresa", empresa).then(data => {
      
        });
        console.log("datos actualizados")
      }
  }

  const convertirBase64 = (e)=> {
    if (!/\.(jpg|png)$/i.test(e.target.files[0].name)) {
      e.target.value = null;
      return alert("El archivo a adjuntar no es una imagen");
    }
    const base64 = new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

    company_image = base64;
    
  }

  return (
    <div className={classes.root}>
      <Header />
      <Typography paragraph={true} align="center" variant="h2" color="primary">
        Tablero de la empresa
      </Typography>
      <Grid container spacing={2} style={{ width: "100%" }}>
        <Grid item xs={12} sm={4}>
          <Paper
            variant="outlined"
            square={true}
            className={classes.containerTabs}
          >
            <img
              className={classes.profileImg}
              src={company_image}
              alt={company_name}
            />
            <Typography align="center" variant="h5">
              {company_name}
            </Typography>
            <Tabs
              orientation="vertical"
              value={value}
              onChange={handleChange}
              className={classes.tabs}
              variant="fullWidth"
            >
              <Tab
                icon={<DashboardIcon color="secondary" fontSize="large" />}
                label="Tablero"
                {...a11yProps(0)}
              />
              <Tab
                icon={<EditIcon color="secondary" fontSize="large" />}
                label="Editar Perfil"
                {...a11yProps(1)}
              />
              <Link href="/" onClick={logOut}>
                <Button className={classes.tabButton}>Cerrar Sesión</Button>
              </Link>
              <Link>
                <Button className={classes.tabButton}>Borrar Cuenta</Button>
              </Link>
              {/* <Tab
                icon={<WebIcon color="secondary" fontSize="large" />}
                label="Página de la compañía"
                {...a11yProps(2)}
              /> */}
            </Tabs>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8}>
          <TabPanel value={value} index={0}>
            <Paper className={classes.profileInfoPaper}>
              <Paper
                variant="elevation"
                elevation="0"
                className={classes.profileInfo}
              >
                <Typography variant="h4">{company_name}</Typography>
                <List className={classes.profileInfoGrid}>
                  <ListItem className={classes.companyDescription}>
                    <WorkIcon color="secondary" fontSize="large" />
                    <Typography variant="p" className={classes.profileListText}>
                      {company_field}
                    </Typography>
                  </ListItem>
                  <ListItem className={classes.companyDescription}>
                    <LocationOnIcon color="secondary" fontSize="large" />
                    <Typography variant="p" className={classes.profileListText}>
                      {company_ubication}
                    </Typography>
                  </ListItem>
                  <ListItem className={classes.companyDescription}>
                    <PhoneIcon color="secondary" fontSize="large" />
                    <Typography variant="p" className={classes.profileListText}>
                      {company_phone}
                    </Typography>
                  </ListItem>
                  <ListItem className={classes.companyDescription}>
                    <MailIcon color="secondary" fontSize="large" />
                    <Typography variant="p" className={classes.profileListText}>
                      {company_mail}
                    </Typography>
                  </ListItem>
                  <ListItem className={classes.companyDescription}>
                    <LanguageIcon color="secondary" fontSize="large" />
                    <Typography variant="p" className={classes.profileListText}>
                      <Link href={company_webpage}>{company_webpage}</Link>
                    </Typography>
                  </ListItem>
                </List>
              </Paper>
            </Paper>
            <Paper className={classes.profilePaper}>
              <Typography variant="h4" className={classes.profileContentText}>
                Descripción general de la empresa
              </Typography>
              <Paper className={classes.profileTextContainer}>
                <Typography variant="p">
                 {empresa.acerca_de_la_empresa}
                </Typography>
              </Paper>
            </Paper>
            <Grid container>
              <Grid xs={12} sm={6}>
                <Paper className={classes.profilePaperDivided}>
                  <Typography
                    variant="h4"
                    className={classes.profileContentText}
                  >
                    Postulaciones
                  </Typography>
                  <Paper className={classes.profileTextContainer}>
                    <Typography variant="p">
                      {/* .map */}
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Ea provident repellat deleniti voluptatem nisi
                      reprehenderit consequuntur aliquam officiis, totam
                      asperiores repellendus ipsa eaque. Laudantium
                      necessitatibus corrupti ipsam est voluptas rem!
                    </Typography>
                  </Paper>
                </Paper>
              </Grid>
              <Grid xs={12} sm={6}>
                <Paper className={classes.profilePaper}>
                  <Typography
                    variant="h4"
                    className={classes.profileContentText}
                  >
                    Vacantes
                  </Typography>
                  <Paper className={classes.profileTextContainer}>
                    <Typography variant="p">
                      {/* .map */}
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
                    </Typography>
                  </Paper>
                </Paper>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Paper className={classes.profilePaper}>
              <Typography variant="h4" className={classes.profileContentText}>
                Información Básica
              </Typography>
              <List>
                <ListItem className={classes.profileContentGrid}>
                  <Avatar
                    variant="circle"
                    src={company_image}
                    className={classes.profileEditImg}
                    alt="Image Profile"
                  />

                  <div>
                    <input type="file" accept="image/png" onChange={convertirBase64}/>
                 </div>
                </ListItem>
                <Divider />
                
                <ListItem>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4}>
                      <Typography variant="h5" color="Secondary">
                        Empresa
                      </Typography>
                      <input
                        name="name"
                        id="company_name"
                        className={classes.editInputs}
                        type="text"
                        placeholder={company_name}
                        onChange={manejarCambio}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <Typography variant="h5" color="Secondary">
                        Correo corporativo
                      </Typography>
                      <input
                        name="mail"
                        id = "company_mail"
                        className={classes.editInputs}
                        type="email"
                        placeholder={company_mail}
                        onChange={manejarCambio}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <Typography variant="h5" color="Secondary">
                        Número
                      </Typography>
                      <input
                        name="phone"
                        id ="company_phone"
                        className={classes.editInputs}
                        type="number"
                        placeholder={company_phone}
                        onChange={manejarCambio}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <Typography variant="h5" color="Secondary">
                        Dirección
                      </Typography>
                      <input
                        name="address"
                        id="company_ubication"
                        className={classes.editInputs}
                        type="text"
                        placeholder={company_ubication}
                        onChange={manejarCambio}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <Typography variant="h5" color="Secondary">
                        País
                      </Typography>
                      <input readonly
                        name="country"
                        className={classes.editInputs}
                        type="text"
                        value={company_country}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <Typography variant="h5" color="Secondary">
                        Estado
                      </Typography>
                      <input readonly
                        name="estate"
                        className={classes.editInputs}
                        type="text"
                        value={company_state}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <Typography variant="h5" color="Secondary">
                        Ciudad
                      </Typography>
                      <input 
                        name="city"
                        id="company_city"
                        className={classes.editInputs}
                        type="text"
                        placeholder={company_city}
                        onChange={manejarCambio}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <Typography variant="h5" color="Secondary">
                        Código Postal
                      </Typography>
                      <input
                        name="postal"
                        id="company_zip"
                        className={classes.editInputs}
                        type="number"
                        placeholder={company_zip}
                        onChange={manejarCambio}
                      />
                    </Grid>
                  </Grid>
                </ListItem>
              </List>
            </Paper>
            <Paper>
              <Typography variant="h4" className={classes.profileContentText}>
                Cambiar Contraseña
              </Typography>
              <List>
                <ListItem>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4}>
                      <Typography variant="h5" color="Secondary">
                        Contraseña Actual:
                      </Typography>
                      <input
                        className={classes.editInputs}
                        id="password"
                        type="password"
                        placeholder="••••••••••••••"
                        onChange={manejarCambio}
                        onBlur={verficarDisponibilidad}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                      <Typography variant="h5" color="Secondary">
                        Nueva Contraseña
                      </Typography>
                      <input className={classes.editInputs} type="password" id="pass1" onChange={manejarCambio}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <Typography variant="h5" color="Secondary">
                        Confirmar Contraseña
                      </Typography>
                      <input className={classes.editInputs} type="password" id="pass2" onChange={manejarCambio}   onBlur={verificarContras}/>
                    </Grid>
                  </Grid>
                </ListItem>
              </List>
            </Paper>
            <span id="passStatus">{passState}<br></br></span>
            <span id="passStatus2">{passState2}</span>
            <Button
              variant="contained"
              color="Secondary"
              className={classes.btnChanges}
              onClick={updateData}
            >
              Guardar Cambios
            </Button>
          </TabPanel>
          {/* <TabPanel value={value} index={2}>
            Item Three
          </TabPanel> */}
        </Grid>
      </Grid>
    </div>
  );
}

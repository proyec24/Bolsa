import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Header from "../Header/Header";
import { Button, Typography } from "@material-ui/core";
import WorkIcon from '@material-ui/icons/Work';
import MailIcon from '@material-ui/icons/Mail';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LanguageIcon from '@material-ui/icons/Language';
import PhoneIcon from '@material-ui/icons/Phone';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import BusinessIcon from '@material-ui/icons/Business';
import Divider from '@material-ui/core/Divider';
import SchoolIcon from '@material-ui/icons/School';
import DashboardIcon from "@material-ui/icons/Dashboard";
import EditIcon from "@material-ui/icons/Edit";
import WebIcon from "@material-ui/icons/Web";
import Avatar from '@material-ui/core/Avatar';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { BorderStyle } from "@material-ui/icons";
import Link from '@material-ui/core/Link';
import { Route } from "react-router";
import { BrowserRouter as Router, Link as RouterLink } from "react-router-dom";
import Service from "../../service";
import LOCAL_ROUTE from "../../const.copy";

const profile_image =
  "https://growthyinvestors.com/wp-content/uploads/2021/05/cropped-TemplatesWEBHome_Mesa-de-trabajo-1-copia-10-1.png";
const profile_name = "Juan Perez";
const profile_description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
const profile_experience = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
const profile_education = "Harvard University is a private Ivy League research university in Cambridge, Massachusetts. Established in 1636 and named for its first benefactor, clergyman John Harvard, Harvard is the oldest institution of higher learning in the United States and among the most prestigious in the world."
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
    ".PrivateTabIndicator-vertical-48": {
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
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  profileListItem: {
    display: "flex",
    alignItems: "center",
  },
  profileListText: {
    fontWeight: 600,
    marginLeft: "1rem"
  },
  profileContentText: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.background.default,
    padding: "1rem"
  },
  profileText: {
    fontWeight: 600
  },
  profileTextContent: {
    display: "flex",
    alignItems: "center",
  },
  profilePaper: {
    marginBottom: "2rem"
  },
  profileDescription: {
    padding: "2rem"
  },
  profileExpListItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  profileContentGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "2rem"
  },
  profileEditImg: {
    width: "10rem",
    height: "7rem",
    marginRight: "1rem"
  },
  profileFormLabel: {
    fontSize: "14px"
  },
  editInputs: {
    width: "100%",
    padding: "1rem",
    border: `2px solid ${theme.palette.secondary.main}`,
    borderRadius: ".5rem",
    outline: "none",
    fontSize: "1.4rem",
    color: theme.palette.text.primary
  },
  btnChanges: {
    display: "flex",
    margin: "2rem auto"
  },
  tabButton: {
    width: "100%",
    color: theme.palette.primary.main,
    padding: "2rem 0"
  }
}));

export default function PerfilTalento() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [status, setStatus] = useState(sessionStorage.getItem("login"));
  const [cv, setCV] = useState({});
  const [diplomas, setDiplomas] = useState([]);
  const [perfil, setPerfil] = useState({
    puesto: "",
    email: "",
    direccion: "",
    telefono: "",
    aboutMe: "",
    nivel: "",
    nombre: "",
    image: "",
  });

  useState(() => {
    Service.getData('perfil_talento')
      .then(data => {
        console.log(data);
        setPerfil(data);
      });
  }, [perfil.nombre]);

  useState(() => {
    Service.getData("cv_talento")
      .then(data => {
        console.log(data);
        setCV(data);
      })
  })

  useState(() => {
    Service.getData("diplomas_talento")
      .then(data => {
        setDiplomas(data);
      })
  })
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const logOut = () => {
    sessionStorage.clear()
  }

  return (
    <div className={classes.root}>
      <Header />
      <Typography paragraph={true} align="center" variant="h2" color="primary">
        Perfil Talento
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Paper
            variant="outlined"
            square={true}
            className={classes.containerTabs}
          >
            <img
              className={classes.profileImg}
              src={LOCAL_ROUTE + perfil.image}
              alt={perfil.nombre}
            />
            <Typography align="center" variant="h5">
              {perfil.nombre}
            </Typography>
            <Tabs
              orientation="vertical"
              value={value}
              onChange={handleChange}
              className={classes.tabs}
              variant="fullWidth"
            >
              <Tab
                icon={<WebIcon color="secondary" fontSize="large" />}
                label="Perfil"
                {...a11yProps(0)}
              />
              <Tab
                icon={<EditIcon color="secondary" fontSize="large" />}
                label="Editar Perfil"
                {...a11yProps(1)}
              />
              <Route>
                <Link to="/dashboard" component={RouterLink}>
                  <Button className={classes.tabButton}><DashboardIcon color="secondary" fontSize="large" />  Dashboard</Button>
                </Link>
              </Route>
              <Link href="/" onClick={logOut}>
                <Button className={classes.tabButton}>Cerrar Sesión</Button>
              </Link>
              <Link>
                <Button className={classes.tabButton}>Borrar Cuenta</Button>
              </Link>
            </Tabs>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8}>
          <TabPanel value={value} index={0}>
            <Paper className={classes.profilePaper}>
              <Typography variant="h4" className={classes.profileContentText}>Información Básica</Typography>
              <List>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <ListItem className={classes.profileListItem}>
                      <WorkIcon color="secondary" fontSize="large" />
                      <Typography variant="p" className={classes.profileListText}>
                        Descripción de Trabajo:<br />
                        {perfil.puesto}
                      </Typography>
                    </ListItem>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <ListItem className={classes.profileListItem}>
                      <MailIcon color="secondary" fontSize="large" />
                      <Typography variant="p" className={classes.profileListText}>
                        Email:<br />
                        {perfil.email}
                      </Typography>
                    </ListItem>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <ListItem className={classes.profileListItem}>
                      <LocationOnIcon color="secondary" fontSize="large" />
                      <Typography variant="p" className={classes.profileListText}>
                        Ubicación:<br />
                        {perfil.direccion}
                      </Typography>
                    </ListItem>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <ListItem className={classes.profileListItem}>
                      <LanguageIcon color="secondary" fontSize="large" />
                      <Typography variant="p" className={classes.profileListText}>
                        Nivel de educacion:<br />
                        {perfil.nivel}
                      </Typography>
                    </ListItem>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <ListItem className={classes.profileListItem}>
                      <PhoneIcon color="secondary" fontSize="large" />
                      <Typography variant="p" className={classes.profileListText}>
                        Teléfono:<br />
                        {perfil.telefono}
                      </Typography>
                    </ListItem>
                  </Grid>
                </Grid>
              </List>
            </Paper>
            <Paper className={classes.profilePaper}>
              <Typography variant="h4" className={classes.profileContentText}>Descripción</Typography>
              <div className={classes.profileDescription}>
                <Typography variant="p" className={classes.profileText}>{perfil.aboutMe}</Typography>
              </div>
            </Paper>
            <Paper className={classes.profilePaper}>
              <Typography variant="h4" className={classes.profileContentText}>Curriculum</Typography>
              <List>
                <ListItem className={classes.profileExpListItem}>
                  {cv.status ?
                    <a href={LOCAL_ROUTE + cv.curriculum.direccion}
                      rel="noopener noreferrer" download="cv"
                      target="_blank">Descargar aqui</a>
                    :
                    <span> No has subido un CV! vente a <a href="subirCV">aqui</a> </span>
                  }
                </ListItem>
                <Divider />
              </List>
            </Paper>
            <Paper className={classes.profilePaper}>
              <Typography variant="h4" className={classes.profileContentText}>Diplomas y cursos</Typography>
              <List>
                {
                  diplomas.status ?
                    diplomas.diplomas.map(

                    )
                    :
                    <span> No has subido ningun diploma o curso </span>
                }
                <Divider />
              </List>
            </Paper>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Paper className={classes.profilePaper}>
              <Typography variant="h4" className={classes.profileContentText}>Información Básica</Typography>
              <List>
                <ListItem className={classes.profileContentGrid}>
                  <Avatar variant="square" src={LOCAL_ROUTE + perfil.image} className={classes.profileEditImg} alt="Image Profile" />
                  <Button variant="outlined" color="secondary">Cambiar Foto</Button>
                </ListItem>
                <Divider />
                <ListItem>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4}>
                      <Typography variant="h5" color="Secondary">Nombre</Typography>
                      <input name="name" className={classes.editInputs} type="text" placeholder="Shrek" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <Typography variant="h5" color="Secondary">Email</Typography>
                      <input name="mail" className={classes.editInputs} type="email" placeholder="Shrek@gmail.com" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <Typography variant="h5" color="Secondary">Número</Typography>
                      <input name="phone" className={classes.editInputs} type="number" placeholder="43212434" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <Typography variant="h5" color="Secondary">Trabajo</Typography>
                      <input className={classes.editInputs} type="text" placeholder="Clases los Jueves" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <Typography variant="h5" color="Secondary">Dirección</Typography>
                      <input name="address" className={classes.editInputs} type="text" placeholder="Cuchitril" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <Typography variant="h5" color="Secondary">País</Typography>
                      <input name="country" className={classes.editInputs} type="text" placeholder="Muy muy lejano" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <Typography variant="h5" color="Secondary">Estado</Typography>
                      <input name="estate" className={classes.editInputs} type="text" placeholder="Madrigera" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <Typography variant="h5" color="Secondary">Ciudad</Typography>
                      <input name="city" className={classes.editInputs} type="text" placeholder="Shrekland" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <Typography variant="h5" color="Secondary">Código Postal</Typography>
                      <input name="postal" className={classes.editInputs} type="number" placeholder="434235" />
                    </Grid>
                  </Grid>
                </ListItem>
              </List>
            </Paper>
            <Paper>
              <Typography variant="h4" className={classes.profileContentText}>Cambiar Contraseña</Typography>
              <List>
                <ListItem>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4}>
                      <Typography variant="h5" color="Secondary">Contraseña Actual:</Typography>
                      <input className={classes.editInputs} type="password" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <Typography variant="h5" color="Secondary">Nueva Contraseña</Typography>
                      <input className={classes.editInputs} type="password" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <Typography variant="h5" color="Secondary">Confirmar Contraseña</Typography>
                      <input className={classes.editInputs} type="password" />
                    </Grid>
                  </Grid>
                </ListItem>
              </List>
            </Paper>
            <Button variant="contained" color="Secondary" className={classes.btnChanges}>Guardar Cambios</Button>
          </TabPanel>
        </Grid>
      </Grid>
    </div>
  );
}

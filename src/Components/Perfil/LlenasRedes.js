import React from "react";
import Service from "../../service";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

const useStyles = (theme) => ({
  Redes: {
    width: "100%",
    fontSize: "1.8rem",
    background: "white",
    boxShadow: "0 4px 8px 0 rgb(0 0 0 / 20%)",
    marginBottom: "1.5rem",
    marginTop: "1.5rem",
    border: "none",
    padding: "1rem",
    fontFamily: "'Roboto', sans-serif;"
  },
});

class LlenarRedes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redes: [],
      redesEmp: [],
    };
    this.manejarCambio = this.manejarCambio.bind(this);
  }

  manejarCambio(evento) {
    const valor = evento.target.value;
    const id = evento.target.id;
    this.setState((state) => {
      state.redesEmp[id] = valor;
      this.props.onSubmitRedes(state.redesEmp);
      return state;
    });
  }

  componentDidMount() {
    Service.getData("redes_sociales").then((data) => {
      this.setState({
        redes: data,
      });
      console.log(this.state.redes);
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        {this.state.redes.map((ed) => {
          return (
            <input
              type="text"
              placeholder={ed.nombre}
              name={ed.nombre}
              id={ed.id_red_social}
              onChange={this.manejarCambio}
              className={classes.Redes}
            />
          );
        })}
      </div>
    );
  }
}

export default withRouter(withStyles(useStyles)(LlenarRedes));

import React from "react";
import Service from "../service";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = (theme) => ({
  InputFile: {
    display: "none",
  },
  LabelStyles: {
    "&:hover": {
      backgroundColor: "#305173"
    },
    fontSize: "1.4rem",
    fontWeight: "600",
    color: theme.palette.background.default,
    backgroundColor: "#5d7fa3",
    display: "inline-block",
    transition: "all .5s",
    cursor: "pointer",
    padding: "15px 40px !important",
    textTransform: "uppercase",
    textAlign: "center",
    width: "100%",
    height: "100%"
  },
});

class FileUploader extends React.Component {
  constructor(props) {
    super(props);

    this.convertirBase64 = this.convertirBase64.bind(this);
  }

  async convertirBase64(e) {
    for (let i = 0; i < e.target.files.length; i++) {
      if (!/\.(pdf)$/i.test(e.target.files[i].name)) {
        e.target.value = null;
        return alert("El archivo a adjuntar no es un PDF");
      }
    }

    const reader = new FileReader();
    const bases64 = [];
    for (let i = 0; i < e.target.files.length; i++) {
      let base64 = await new Promise((resolve, reject) => {
        reader.readAsDataURL(e.target.files[i]);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
      bases64.push(base64);
    }

    this.props.onSubmitFiles(bases64);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <form onSubmit={this.manejarEnvio}>
          <input
            type="file"
            accept="application/pdf"
            onChange={this.convertirBase64}
            multiple
            name="input1"
            id="input1"
            required
            className={classes.InputFile}
          />
          <label for="input1" className={classes.LabelStyles}> Subir CV</label>
        </form>
      </div>
    );
  }
}

export default withRouter(withStyles(useStyles)(FileUploader));

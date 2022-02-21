import { withStyles } from "@material-ui/core";
import React from "react";
import { withRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = (theme) => ({
  InputFile: {
    display: "none"
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
    padding: "15px 40px !important",
    cursor: "pointer",
    textTransform: "uppercase",
    textAlign: "center",
    width: "100%",
    height: "100%"
  }
});

class FileUploader extends React.Component {
  constructor(props) {
    super(props);

    this.convertirBase64 = this.convertirBase64.bind(this);
  }

  async convertirBase64(e) {
    if (!/\.(jpg|png)$/i.test(e.target.files[0].name)) {
      e.target.value = null;
      return alert("El archivo a adjuntar no es un PDF");
    }

    const reader = new FileReader();
    let base64 = await new Promise((resolve, reject) => {
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
    this.props.onSubmitFile(base64);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <form onSubmit={this.manejarEnvio}>
          <input
            name="input1"
            id="input1"
            type="file"
            accept="image/png"
            className={classes.InputFile}
            onChange={this.convertirBase64}
            required
          />
          <label for="input1" className={classes.LabelStyles}> Subir Imágen</label>
        </form>
      </div>
    );
  }
}

export default withRouter(withStyles(useStyles)(FileUploader));

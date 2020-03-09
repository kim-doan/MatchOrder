import {
    cardTitle,
    grayColor
  } from "assets/jss/material-dashboard-pro-react.js";
  import customCheckboxRadioSwitch from "assets/jss/material-dashboard-pro-react/customCheckboxRadioSwitch.js";

  const accountSettingStyles = {
    ...customCheckboxRadioSwitch,
    cardTitle,
    cardIconTitle: {
      ...cardTitle,
      marginTop: "15px",
      marginBottom: "0px",
      "& small": {
        fontSize: "80%",
        fontWeight: "400"
      }
    },
    cardCategory: {
      marginTop: "10px",
      color: grayColor[0] + " !important",
      textAlign: "center"
    },
    description: {
      color: grayColor[0]
    },
    updateProfileButton: {
      float: "right"
    },
    infoText: {
      fontWeight: "300",
      margin: "10px 0 30px",
      textAlign: "center"
    },
    inputAdornmentIcon: {
      color: "#555"
    },
    inputAdornment: {
      position: "relative"
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      width: 800
    }
  };
  export default accountSettingStyles;
  
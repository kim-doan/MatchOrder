import {
    cardTitle,
    grayColor
  } from "assets/jss/material-dashboard-pro-react.js";
  import customCheckboxRadioSwitch from "assets/jss/material-dashboard-pro-react/customCheckboxRadioSwitch.js";
  import sweetAlertStyle from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.js";
  const supplierOrderFormStyle = {
    cardTitle,
    ...customCheckboxRadioSwitch,
    ...sweetAlertStyle,
    right: {
        textAlign: "right"
      },
      center: {
        textAlign: "center"
      },
      description: {
        maxWidth: "150px"
      },
    customCardContentClass: {
        paddingLeft: "0",
        paddingRight: "0"
      },
      cardIconTitle: {
        ...cardTitle,
        marginTop: "15px",
        marginBottom: "0px"
      },
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
    },
    alignItemCenter: {
      justifyContent: 'center'
    },
    topMargin50: {
      marginTop: '50px'
    },
    leftPadding20: {
      paddingLeft: '20px'
    }
  
  };
  export default supplierOrderFormStyle;
  
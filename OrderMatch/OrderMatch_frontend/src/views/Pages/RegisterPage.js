import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import Timeline from "@material-ui/icons/Timeline";
import Code from "@material-ui/icons/Code";
import Group from "@material-ui/icons/Group";
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
// import LockOutline from "@material-ui/icons/LockOutline";
import Check from "@material-ui/icons/Check";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import { Authentication } from 'components/Authentication';

import styles from "assets/jss/material-dashboard-pro-react/views/registerPageStyle";

const useStyles = makeStyles(styles);

export default function RegisterPage() {
  const [checked, setChecked] = React.useState([]);
  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  const classes = useStyles();

  const handleRegister = (id, pw) => {
        return this.props.registerRequest(id, pw)
        .then(() => {
            if(this.props.status === "SUCCESS") {
                alert("회원가입 성공");
                this.props.history.push('/login');
                return true;
            } else {
                var errorIndex = 0;
                switch(this.props.errorCode) {
                    case -1005: // 중복된 아이디 일경우 서버에서 반환되는 코드
                        errorIndex = 0;
                }
                let errorMessage = [
                    '중복된 아이디입니다.',
                    'Password is too short',
                    'Username already exists'
                ];

                alert(errorMessage[errorIndex]);
                return false;
            }
        })
    }

  return (
    <div className={classes.container}>
      <GridContainer justify="center">
        <Authentication mode={false} onRegister={handleRegister}/>
      </GridContainer>
    </div>
  );
}

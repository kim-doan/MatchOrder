import React from "react";
import { connect } from 'react-redux';
import DaumPostcode from 'react-daum-postcode';
import axios from 'axios';
import PropTypes from "prop-types";
// @material-ui/icons
import Face from "@material-ui/icons/Face";
import RecordVoiceOver from "@material-ui/icons/RecordVoiceOver";
import Email from "@material-ui/icons/Email";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import PictureUpload from "components/CustomUpload/PictureUpload.js";
import CustomInput from "components/CustomInput/CustomInput.js";
////////////////////////////////////////////////////////////////////////////////
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import IconButton from '@material-ui/core/IconButton';

// @material-ui/icons
import PermIdentity from "@material-ui/icons/PermIdentity";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import Domain from "@material-ui/icons/Domain";
import Description from "@material-ui/icons/Description";
import Print from "@material-ui/icons/Print";
import Phone from "@material-ui/icons/Phone";
import Done from "@material-ui/icons/Done";
import Close from "@material-ui/icons/Close";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
// core components
import Button from "components/CustomButtons/Button.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import ImageUpload from "components/CustomUpload/ImageUpload.js";
import Snackbar from "components/Snackbar/Snackbar.js";

import styles from "assets/jss/material-dashboard-pro-react/views/accountSettingStyle.js";

////////////////////////////////////////////////////////////////////////////////

class CheckStep2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      manager_name: "",
      manager_nameState: "",
      manager_tel: "",
      manager_telState: "",
      manager_email: "",
      manager_emailState: "",
      cal_manager_name: "",
      cal_manager_tel: "",
      cal_manager_email: "",
      company_ein: "",
      company_einState: "",
      company_type: "0",
      company_name: "",
      company_nameState: "",
      company_category: "",
      company_categoryState: "",
      company_tel: "",
      company_telState: "",
      company_fax: "",
      company_faxState: "",
      ceo_name: "",
      ceo_nameState: "",
      company_img: "",
      zonecode: "",
      zonecodeState: "",
      jibunAddress: "",
      jibunAddressState: "",
      roadAddress: "",
      roadAddressState: "",
      detailAddress: "",
      detailAddressState: "",
      modalOpen: false,
      successAlert: false,
      failAlert: false,
      password: "",
      passwordState: "",
      passwordConfirm: "",
      passwordConfirmState: "",
      usernameState: "",
      showPassword: "false"
    };
  }

  sendState() {
    return this.state;
  }
  // function that returns true if value is email, false otherwise
  verifyEmail(value) {
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(value)) {
      return true;
    }
    return false;
  }
  // function that verifies if a string has a given length or not
  verifyLength(value, length) {
    if (value.length >= length) {
      return true;
    }
    return false;
  }
  change(event, stateName, type, stateNameEqualTo) {
    switch (type) {
      case "email":
        if (this.verifyEmail(event.target.value)) {
          this.setState({ [stateName + "State"]: "success" });
        } else {
          this.setState({ [stateName + "State"]: "error" });
        }
        break;
      case "length":
        if (this.verifyLength(event.target.value, stateNameEqualTo)) {
          this.setState({ [stateName + "State"]: "success" });
        } else {
          this.setState({ [stateName + "State"]: "error" });
        }
        break;
      case "passwordConfirmState":
        if (this.state.password === event.target.value) {
          this.setState({ [stateName + "State"]: "success" });
        } else {
          this.setState({ [stateName + "State"]: "error" });
        }
      default:
        break;
    }
    this.setState({ [stateName]: event.target.value });
  }
  handleChange = event => {
    this.setState({ company_type: event.target.value })
  };
  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };
  handleMouseDownPassword = event => {
    event.preventDefault();
  };
  handleOpen = () => {
    this.setState({ modalOpen: true })
  };
  handleClose = () => {
    this.setState({ modalOpen: false })
  };
  handleAddress = (data) => {
    this.setState({ zonecode: data.zonecode })
    this.setState({ jibunAddress: data.jibunAddress })
    this.setState({ roadAddress: data.roadAddress })
    this.setState({ jibunAddressState: "success" })
    this.setState({ zonecodeState: "success" })
    this.setState({ roadAddressState: "success" })
    this.handleClose();
  }
  isValidated() {
    if (
      this.state.manager_nameState === "success" &&
      this.state.manager_telState === "success" &&
      this.state.manager_emailState === "success" &&
      this.state.company_einState === "success" &&
      this.state.company_nameState === "success" &&
      this.state.company_categoryState === "success" &&
      this.state.company_telState === "success" &&
      this.state.ceo_nameState === "success" &&
      this.state.zonecodeState === "success" &&
      this.state.jibunAddressState === "success" &&
      this.state.roadAddressState === "success" &&
      this.state.detailAddressState === "success" &&
      this.state.passwordState === "success" &&
      this.state.passwordConfirmState === "success" &&
      this.state.usernameState === "success"
    ) {
      return true;
    } else {
      if (this.state.manager_nameState !== "success") {
        this.setState({ manager_nameState: "error" });
      }
      if (this.state.manager_telState !== "success") {
        this.setState({ manager_telState: "error" });
      }
      if (this.state.manager_emailState !== "success") {
        this.setState({ manager_emailState: "error" });
      }
      if (this.state.company_einState !== "success") {
        this.setState({ company_einState: "error" });
      }
      if (this.state.company_nameState !== "success") {
        this.setState({ company_nameState: "error" });
      }
      if (this.state.company_categoryState !== "success") {
        this.setState({ company_categoryState: "error" });
      }
      if (this.state.company_telState !== "success") {
        this.setState({ company_telState: "error" });
      }
      if (this.state.ceo_nameState !== "success") {
        this.setState({ ceo_nameState: "error" });
      }
      if (this.state.zonecodeState !== "success") {
        this.setState({ zonecodeState: "error" });
      }
      if (this.state.jibunAddressState !== "success") {
        this.setState({ jibunAddressState: "error" });
      }
      if (this.state.roadAddressState !== "success") {
        this.setState({ roadAddressState: "error" });
      }
      if (this.state.detailAddressState !== "success") {
        this.setState({ detailAddressState: "error" });
      }
      if (this.state.passwordState !== "success") {
        this.setState({ passwordState: "error" });
      }
      if (this.state.passwordConfirmState !== "success") {
        this.setState({ passwordConfirmState: "error" });
      }
      if (this.state.usernameState !== "success") {
        this.setState({ usernameState: "error" });
      }
    }
    return false;
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={6}>
            <Card>
              <CardHeader color="rose" icon>
                <CardIcon color="rose">
                  <PermIdentity />
                </CardIcon>
                <h4 className={classes.cardIconTitle}>
                  계정 정보
              </h4>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={2}>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={10}>
                    <CustomInput
                      success={this.state.usernameState === "success"}
                      error={this.state.usernameState === "error"}
                      labelText={
                        <span>
                          아이디 <small>(필수)</small>
                        </span>
                      }
                      id="username"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: event => this.change(event, "username", "length", 4),
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            className={classes.inputAdornment}
                          >
                            <Face className={classes.inputAdornmentIcon} />
                          </InputAdornment>
                        ),
                        autoComplete: "off"
                      }}

                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={2}>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={10}>
                    <CustomInput
                      success={this.state.passwordState === "success"}
                      error={this.state.passwordState === "error"}
                      id="password"
                      labelText="비밀번호 (필수)"
                      type={this.state.showPassword ? 'text' : 'password'}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: event => this.change(event, "password", "length", 4),
                        endAdornment: (
                          <InputAdornment
                            position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={this.handleClickShowPassword}
                              onMouseDown={this.handleMouseDownPassword}
                            >
                              {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                          </InputAdornment>
                        ),
                        type: (this.state.showPassword ? 'text' : 'password'),
                        autoComplete: "off"
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={2}>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={10}>
                    <CustomInput
                      success={this.state.passwordConfirmState === "success"}
                      error={this.state.passwordConfirmState === "error"}
                      labelText="비밀번호 확인 (필수)"
                      id="passwordConfirm"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: event => this.change(event, "passwordConfirm", "passwordConfirmState"),
                        type: (this.state.showPassword ? 'text' : 'password'),
                        autoComplete: "off"
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <Snackbar
                  place="br"
                  color="success"
                  icon={Done}
                  message="계정 정보 수정에 성공하였습니다."
                  open={this.state.successAlert}
                  closeNotification={() => this.alertClose()}
                  close
                />
                <Snackbar
                  place="br"
                  color="danger"
                  icon={Close}
                  message="계정 정보 수정에 실패하였습니다."
                  open={this.state.failAlert}
                  closeNotification={() => this.alertClose()}
                  close
                />
                <Clearfix />
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6}>
            <Card>
              <CardHeader color="rose" icon>
                <CardIcon color="rose">
                  <PermIdentity />
                </CardIcon>
                <h4 className={classes.cardIconTitle}>
                  담당자 정보
              </h4>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={2}>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={10}>
                    <CustomInput
                      success={this.state.manager_nameState === "success"}
                      error={this.state.manager_nameState === "error"}
                      labelText={
                        <span>
                          담당자 이름 <small>(필수)</small>
                        </span>
                      }
                      id="manager_name"
                      value={this.state.manager_name}
                      formControlProps={{
                        fullWidth: true
                      }}
                      value={this.state.manager_name}
                      inputProps={{
                        onChange: event => this.change(event, "manager_name", "length", 2),
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            className={classes.inputAdornment}
                          >
                            <Face className={classes.inputAdornmentIcon} />
                          </InputAdornment>
                        )
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={2}>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={10}>
                    <CustomInput
                      success={this.state.manager_emailState === "success"}
                      error={this.state.manager_emailState === "error"}
                      labelText={
                        <span>
                          담당자 이메일 <small>(필수)</small>
                        </span>
                      }
                      id="manager_email"
                      value={this.state.manager_email}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: event => this.change(event, "manager_email", "email"),
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            className={classes.inputAdornment}
                          >
                            <Email className={classes.inputAdornmentIcon} />
                          </InputAdornment>
                        )
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={2}>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={10}>
                    <CustomInput
                      success={this.state.manager_telState === "success"}
                      error={this.state.manager_telState === "error"}
                      labelText={
                        <span>
                          담당자 연락처 <small>(필수)</small>
                        </span>
                      }
                      id="manager_tel"
                      formControlProps={{
                        fullWidth: true
                      }}
                      value={this.state.manager_tel}
                      inputProps={{
                        onChange: event => this.change(event, "manager_tel", "length", 10),
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            className={classes.inputAdornment}
                          >
                            <Phone className={classes.inputAdornmentIcon} />
                          </InputAdornment>
                        )
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <Snackbar
                  place="br"
                  color="success"
                  icon={Done}
                  message="계정 정보 수정에 성공하였습니다."
                  open={this.state.successAlert}
                  closeNotification={() => this.alertClose()}
                  close
                />
                <Snackbar
                  place="br"
                  color="danger"
                  icon={Close}
                  message="계정 정보 수정에 실패하였습니다."
                  open={this.state.failAlert}
                  closeNotification={() => this.alertClose()}
                  close
                />
                <Clearfix />
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12}>
            <Card>
              <CardHeader color="rose" icon>
                <CardIcon color="rose">
                  <Domain />
                </CardIcon>
                <h4 className={classes.cardIconTitle}>
                  사업자 정보
              </h4>
              </CardHeader>
              <CardBody>
                <GridContainer >
                  <GridItem xs={12} sm={12} md={2} ></GridItem>
                  <GridItem xs={12} sm={12} md={2} className={classes.topMargin50}>
                    <ImageUpload
                      // nowImage={"http://localhost:8080/api/photo/" + this.state.company_img}
                      addButtonProps={{
                        color: "rose",
                        round: true
                      }}
                      changeButtonProps={{
                        color: "rose",
                        round: true
                      }}
                      removeButtonProps={{
                        color: "danger",
                        round: true
                      }}
                    />
                  </GridItem>

                  <GridItem xs={12} sm={12} md={6}>
                    <GridItem xs={12} sm={12} md={12} className={classes.alignCenter}>
                      <FormControlLabel
                        control={
                          <Radio
                            checked={this.state.company_type === "0"}
                            onChange={this.handleChange}
                            value="0"
                            name="개인 사업자"
                            aria-label="A"
                            icon={
                              <FiberManualRecord
                                className={classes.radioUnchecked}
                              />
                            }
                            checkedIcon={
                              <FiberManualRecord
                                className={classes.radioChecked}
                              />
                            }
                            classes={{
                              checked: classes.radio,
                              root: classes.radioRoot
                            }}
                          />
                        }
                        classes={{
                          label: classes.label,
                          root: classes.labelRoot
                        }}
                        label="개인 사업자"
                      />
                      <div
                        className={
                          classes.checkboxAndRadioInline +
                          " " +
                          classes.checkboxAndRadioHorizontalInline
                        }
                      >
                        <FormControlLabel
                          control={
                            <Radio
                              checked={this.state.company_type === "1"}
                              onChange={this.handleChange}
                              value="1"
                              name="법인 사업자"
                              aria-label="B"
                              icon={
                                <FiberManualRecord
                                  className={classes.radioUnchecked}
                                />
                              }
                              checkedIcon={
                                <FiberManualRecord
                                  className={classes.radioChecked}
                                />
                              }
                              classes={{
                                checked: classes.radio,
                                root: classes.radioRoot
                              }}
                            />
                          }
                          classes={{
                            label: classes.label,
                            root: classes.labelRoot
                          }}
                          label="법인 사업자"
                        />
                      </div>
                      <div
                        className={
                          classes.checkboxAndRadioInline +
                          " " +
                          classes.checkboxAndRadioHorizontalInline
                        }
                      >
                        <FormControlLabel
                          control={
                            <Radio
                              checked={this.state.company_type === "2"}
                              onChange={this.handleChange}
                              value="2"
                              name="radio button demo"
                              aria-label="c"
                              icon={
                                <FiberManualRecord
                                  className={classes.radioUnchecked}
                                />
                              }
                              checkedIcon={
                                <FiberManualRecord
                                  className={classes.radioChecked}
                                />
                              }
                              classes={{
                                checked: classes.radio,
                                root: classes.radioRoot
                              }}
                            />
                          }
                          classes={{
                            label: classes.label,
                            root: classes.labelRoot
                          }}
                          label="개인(비사업자)"
                        />
                      </div>
                    </GridItem>
                    <CustomInput
                      success={this.state.company_nameState === "success"}
                      error={this.state.company_nameState === "error"}
                      labelText={
                        <span>
                          회사명 <small>(필수)</small>
                        </span>
                      }
                      id="company_name"
                      value={this.state.company_name}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: event => this.change(event, "company_name", "length", 1),
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            className={classes.inputAdornment}
                          >
                            <Domain className={classes.inputAdornmentIcon} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      success={this.state.ceo_nameState === "success"}
                      error={this.state.ceo_nameState === "error"}
                      labelText={
                        <span>
                          대표자명 <small>(필수)</small>
                        </span>
                      }
                      id="ceo_name"
                      value={this.state.ceo_name}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: event => this.change(event, "ceo_name", "length", 1),
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            className={classes.inputAdornment}
                          >
                            <Face className={classes.inputAdornmentIcon} />
                          </InputAdornment>
                        )
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={2}></GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      success={this.state.company_einState === "success"}
                      error={this.state.company_einState === "error"}
                      labelText={
                        <span>
                          사업자등록번호 <small>(필수)</small>
                        </span>
                      }
                      id="company_ein"
                      value={this.state.company_ein}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: event => this.change(event, "company_ein", "length", 9),
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            className={classes.inputAdornment}
                          >
                            <Description className={classes.inputAdornmentIcon} />
                          </InputAdornment>
                        )
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      success={this.state.company_categoryState === "success"}
                      error={this.state.company_categoryState === "error"}
                      labelText={
                        <span>
                          업종 <small>(필수)</small>
                        </span>
                      }
                      id="company_category"
                      value={this.state.company_category}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: event => this.change(event, "company_category", "length", 2),
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            className={classes.inputAdornment}
                          >
                            <Description className={classes.inputAdornmentIcon} />
                          </InputAdornment>
                        )
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={2}></GridItem>
                  <GridItem xs={12} sm={12} md={2}></GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      success={this.state.company_telState === "success"}
                      error={this.state.company_telState === "error"}
                      labelText={
                        <span>
                          회사 대표 전화번호 <small>(필수)</small>
                        </span>
                      }
                      id="company_tel"
                      value={this.state.company_tel}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: event => this.change(event, "company_tel", "length", 9),
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            className={classes.inputAdornment}
                          >
                            <Phone className={classes.inputAdornmentIcon} />
                          </InputAdornment>
                        )
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText={
                        <span>회사 FAX번호</span>
                      }
                      id="company_fax"
                      value={this.state.company_fax}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: event => this.change(event, "company_fax", "length", 8),
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            className={classes.inputAdornment}
                          >
                            <Print className={classes.inputAdornmentIcon} />
                          </InputAdornment>
                        )
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={2}></GridItem><GridItem xs={12} sm={12} md={2}></GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      success={this.state.zonecodeState === "success"}
                      error={this.state.zonecodeState === "error"}
                      labelText={<span>우편번호 (필수)</span>}
                      id="zonecode"
                      value={this.state.zonecode}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: event => this.change(event, "zonecode", "length", 1),
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={2}>
                    <Button variant="contained" color="primary" onClick={this.handleOpen}>우편번호 찾기</Button>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}></GridItem><GridItem xs={12} sm={12} md={2}></GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      success={this.state.jibunAddressState === "success"}
                      error={this.state.jibunAddressState === "error"}
                      labelText={
                        <span>지번주소 (필수)</span>
                      }
                      id="jibunAddress"
                      value={this.state.jibunAddress}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: event => this.change(event, "jibunAddress", "length", 3),
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}></GridItem><GridItem xs={12} sm={12} md={2}></GridItem><GridItem xs={12} sm={12} md={2}></GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      success={this.state.roadAddressState === "success"}
                      error={this.state.roadAddressState === "error"}
                      labelText={
                        <span>도로명주소 (필수)</span>
                      }
                      id="roadAddress"
                      value={this.state.roadAddress}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: event => this.change(event, "roadAddress", "length", 3),
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      success={this.state.detailAddressState === "success"}
                      error={this.state.detailAddressState === "error"}
                      labelText={
                        <span>상세주소 (필수)</span>
                      }
                      id="detailAddress"
                      value={this.state.detailAddress}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: event => this.change(event, "detailAddress", "length", 1),
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                  </GridItem>
                </GridContainer>
                <Clearfix />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={this.state.modalOpen}
          onClose={this.handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={this.state.modalOpen}>
            <div className={classes.paper}>
              <DaumPostcode
                onComplete={this.handleAddress}
              />
            </div>
          </Fade>
        </Modal>
      </div>
    )
  }
}

CheckStep2.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(CheckStep2);

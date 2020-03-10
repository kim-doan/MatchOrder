import React, { Component } from "react";
import { connect } from 'react-redux';
import DaumPostcode from 'react-daum-postcode';
import axios from 'axios';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

// @material-ui/icons
import PermIdentity from "@material-ui/icons/PermIdentity";
import Email from "@material-ui/icons/Email";
import Face from "@material-ui/icons/Face";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import Domain from "@material-ui/icons/Domain";
import Description from "@material-ui/icons/Description";
import Print from "@material-ui/icons/Print";
import Phone from "@material-ui/icons/Phone";
import Done from "@material-ui/icons/Done";
import Close from "@material-ui/icons/Close";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import ImageUpload from "components/CustomUpload/ImageUpload.js";
import Snackbar from "components/Snackbar/Snackbar.js";

import styles from "assets/jss/material-dashboard-pro-react/views/accountSettingStyle.js";

class AccountSetting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: localStorage.username,
            manager_name: "",
            managerNameState: "",
            manager_tel: "",
            managerTelState: "",
            cal_manager_name: "",
            calManagerNameState: "",
            cal_manager_tel: "",
            calManagerTelState: "",
            manager_email: "",
            managerEmailState: "",
            cal_manager_email: "",
            calManagerEmailState: "",
            selectedEnabled: "",
            selectedValue: "0",
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
            disableBtn: false
        };
    }
    componentDidMount() {
        axios.get("http://localhost:8080/api/user/username/" + localStorage.username)
            .then(response => {
                var result = response && response.data
                this.setState({
                    manager_name: result.data.manager_name,
                    manager_tel: result.data.manager_tel,
                    manager_email: result.data.manager_email,
                    cal_manager_name: result.data.cal_manager_name,
                    cal_manager_tel: result.data.cal_manager_tel,
                    cal_manager_email: result.data.cal_manager_email,
                    company_ein: result.data.company.company_ein,
                    company_name: result.data.company.company_name,
                    company_tel: result.data.company.company_tel,
                    company_fax: result.data.company.company_fax,
                    company_category: result.data.company.company_category,
                    company_type: String(result.data.company.company_type),
                    ceo_name: result.data.company.ceo_name,
                    company_img: result.data.company.company_img,
                    zonecode: result.data.zonecode,
                    jibunAddress: result.data.jibunAddress,
                    roadAddress: result.data.roadAddress,
                    detailAddress: result.data.detailAddress,
                });
            })
            .catch(response => {
                console.log(response)
            })
    }

    updateAccountSetting() {
        axios.put("http://localhost:8080/api/user", this.state)
            .then(response => {
                var result = response && response.data;

                if(result.success == true) {
                    this.showNotification("successAlert");
                } else {
                    this.showNotification("failAlert");
                }
            })
    }

    showNotification = place => {
        switch (place) {
            case "successAlert":
                if (!this.state.successAlert) {
                    this.setState({ successAlert: true, disableBtn: true });
                    setTimeout(function () {
                        this.setState({ successAlert: false, disableBtn: false });
                    }.bind(this), 5000);
                }
                break;
            case "failAlert":
                if (!this.state.failAlert) {
                    this.setState({ failAlert: true, disableBtn: true });
                    setTimeout(function () {
                        this.setState({ failAlert: false, disableBtn: false });
                    }.bind(this), 5000);
                }
                break;
            default:
                break;
        }
    };

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
            default:
                break;
        }
        this.setState({ [stateName]: event.target.value });
    }
    isValidated() {
        if (
            this.state.managerNameState === "success" &&
            this.state.calManagerNameState === "success" &&
            this.state.calManagerEmailState === "success" &&
            this.state.managerEmailState === "success" &&
            this.state.manager_tel === "success" &&
            this.state.cal_manager_tel === "success" &&
            this.state.company_einState === "success" &&
            this.state.company_categoryState === "success" &&
            this.state.company_faxState === "success" &&
            this.state.company_nameState === "success" &&
            this.state.company_telState === "success" &&
            this.state.jibunAddressState === "success" &&
            this.state.roadAddressState === "success" &&
            this.state.zonecodeState === "success" &&
            this.state.detailAddressState === "success" &&
            this.state.ceo_nameState === "success"
        ) {
            return true;
        } else {
            if (this.state.manager_tel !== "success") {
                this.setState({ manager_tel: "error" });
            }
            if (this.state.cal_manager_tel !== "success") {
                this.setState({ cal_manager_tel: "error" });
            }
            if (this.state.managerNameState !== "success") {
                this.setState({ managerNameState: "error" });
            }
            if (this.state.calManagerNameState !== "success") {
                this.setState({ calManagerNameState: "error" });
            }
            if (this.state.calManagerEmailState !== "success") {
                this.setState({ calManagerEmailState: "error" });
            }
            if (this.state.managerEmailState !== "success") {
                this.setState({ managerEmailState: "error" });
            }
            if (this.state.company_einState !== "success") {
                this.setState({ company_einState: "error" });
            }
            if (this.state.company_categoryState !== "success") {
                this.setState({ company_categoryState: "error" });
            }
            if (this.state.company_faxState !== "success") {
                this.setState({ company_faxState: "error" });
            }
            if (this.state.company_nameState !== "success") {
                this.setState({ company_nameState: "error" });
            }
            if (this.state.company_telState !== "success") {
                this.setState({ company_telState: "error" });
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
            if (this.state.zonecodeState !== "success") {
                this.setState({ zonecodeState: "error" });
            }
            if (this.state.ceo_nameState !== "success") {
                this.setState({ ceo_nameState: "error" });
            }
        }
        return false;
    }
    handleChange = event => {
        this.setState({ company_type: event.target.value })
    };
    handleChangeEnabled = event => {
        this.setState({ selectedEnabled: event.target.value })
    };

    handleChangeEnabled = event => {
        setSelectedEnabled(event.target.value);
    };
    handleAddress = (data) => {
        this.setState({ zonecode: data.zonecode })
        this.setState({ jibunAddress: data.jibunAddress })
        this.setState({ roadAddress: data.roadAddress })
        this.handleClose();
    }
    handleOpen = () => {
        this.setState({ modalOpen: true })
    };
    handleClose = () => {
        this.setState({ modalOpen: false })
    };
    alertClose = () => {
        this.setState({ successAlert: false, failAlert: false })
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                        <Card>
                            <CardHeader color="rose" icon>
                                <CardIcon color="rose">
                                    <PermIdentity />
                                </CardIcon>
                                <h4 className={classes.cardIconTitle}>
                                    담당자 정보 - <small>발주를 담당하는 총괄 담당자의 정보를 적어주세요.</small>
                                </h4>
                            </CardHeader>
                            <CardBody>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={8}>
                                        <CustomInput
                                            success={this.state.managerNameState === "success"}
                                            error={this.state.managerNameState === "error"}
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
                                                onChange: event => this.change(event, "manager_name", "length", 3),
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
                                    <GridItem xs={12} sm={12} md={4}>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={8}>
                                        <CustomInput
                                            success={this.state.managerEmailState === "success"}
                                            error={this.state.managerEmailState === "error"}
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
                                    <GridItem xs={12} sm={12} md={4}>
                                    </GridItem>
                                </GridContainer>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={8}>
                                        <CustomInput
                                            success={this.state.managerTelState === "success"}
                                            error={this.state.managerTelState === "error"}
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
                                    <GridItem xs={12} sm={12} md={4}>
                                    </GridItem>
                                </GridContainer>
                                <Button color="rose" className={classes.updateProfileButton} onClick={() => this.updateAccountSetting()} disabled={this.state.disableBtn}>
                                    담당자 정보 변경
                                 </Button>
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
                    <GridItem xs={12} sm={12} md={6}>
                        <Card>
                            <CardHeader color="rose" icon>
                                <CardIcon color="rose">
                                    <PermIdentity />
                                </CardIcon>
                                <h4 className={classes.cardIconTitle}>
                                    정산 담당자 정보 - <small>정산을 담당하는 정산 담당자의 정보를 적어주세요.</small>
                                </h4>
                            </CardHeader>
                            <CardBody>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={8}>
                                        <CustomInput
                                            success={this.state.calManagerNameState === "success"}
                                            error={this.state.calManagerNameState === "error"}
                                            labelText={
                                                <span>
                                                    정산 담당자 이름 <small>(필수)</small>
                                                </span>
                                            }
                                            id="cal_manager_name"
                                            value={this.state.cal_manager_name}
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                onChange: event => this.change(event, "cal_manager_name", "length", 3),
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
                                    <GridItem xs={12} sm={12} md={4}>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={8}>
                                        <CustomInput
                                            success={this.state.calManagerEmailState === "success"}
                                            error={this.state.calManagerEmailState === "error"}
                                            labelText={
                                                <span>
                                                    정산 담당자 이메일 <small>(필수)</small>
                                                </span>
                                            }
                                            id="cal_manager_email"
                                            value={this.state.cal_manager_email}
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                onChange: event => this.change(event, "cal_manager_email", "email"),
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
                                    <GridItem xs={12} sm={12} md={4}>
                                    </GridItem>
                                </GridContainer>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={8}>
                                        <CustomInput
                                            success={this.state.calManagerTelState === "success"}
                                            error={this.state.calManagerTelState === "error"}
                                            labelText={
                                                <span>
                                                    정산 담당자 연락처 <small>(필수)</small>
                                                </span>
                                            }
                                            id="cal_manager_tel"
                                            value={this.state.cal_manager_tel}
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                onChange: event => this.change(event, "cal_manager_tel", "length", 10),
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
                                    </GridItem>
                                </GridContainer>
                                <Button color="rose" className={classes.updateProfileButton} onClick={() => this.updateAccountSetting()} disabled={this.state.disableBtn}>
                                    정산 담당자 정보 변경
                                 </Button>
                                <Clearfix />
                            </CardBody>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12}>
                        <Card>
                            <CardHeader color="rose" icon>
                                <CardIcon color="rose">
                                    <Domain />
                                </CardIcon>
                                <h4 className={classes.cardIconTitle}>
                                    사업자 정보 - <small>우리 회사의 사업자 정보를 적어주세요.</small>
                                </h4>
                            </CardHeader>
                            <CardBody>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={2}>
                                        <legend>사업자 구분</legend>
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
                                                classes.checkboxAndRadio +
                                                " " +
                                                classes.checkboxAndRadioHorizontal
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
                                                classes.checkboxAndRadio +
                                                " " +
                                                classes.checkboxAndRadioHorizontal
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
                                    <GridItem xs={12} sm={12} md={10}>
                                        <legend>회사 로고</legend>
                                        <ImageUpload
                                            nowImage={"http://localhost:8080/api/photo/" + this.state.company_img}
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
                                    <GridItem xs={12} sm={12} md={8}>
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
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={4}>
                                    </GridItem>
                                </GridContainer>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={8}>
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
                                    <GridItem xs={12} sm={12} md={4}>
                                    </GridItem>
                                </GridContainer>
                                <GridContainer>
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
                                    <GridItem xs={12} sm={12} md={4}>
                                    </GridItem>
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
                                            success={this.state.company_faxState === "success"}
                                            error={this.state.company_faxState === "error"}
                                            labelText={
                                                <span>
                                                    회사 FAX번호
                                                </span>
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
                                    <GridItem xs={12} sm={12} md={4}>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={3}>
                                        <CustomInput
                                            success={this.state.zonecodeState === "success"}
                                            error={this.state.zonecodeState === "error"}
                                            labelText={
                                                <span>
                                                    우편번호
                                                    </span>
                                            }
                                            id="zonecode"
                                            value={this.state.zonecode}
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                onChange: event => this.change(event, "zonecode", "length", 100),
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={5}>
                                        <Button variant="contained" color="primary" onClick={this.handleOpen}>우편번호 찾기</Button>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={4}>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={4}>
                                        <CustomInput
                                            success={this.state.jibunAddressState === "success"}
                                            error={this.state.jibunAddressState === "error"}
                                            labelText={
                                                <span>
                                                    지번주소
                                                        </span>
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
                                    <GridItem xs={12} sm={12} md={8}>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={4}>
                                        <CustomInput
                                            success={this.state.roadAddressState === "success"}
                                            error={this.state.roadAddressState === "error"}
                                            labelText={
                                                <span>
                                                    도로명주소
                                                        </span>
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
                                                <span>
                                                    상세주소
                                                        </span>
                                            }
                                            id="detailAddress"
                                            value={this.state.detailAddress}
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                onChange: event => this.change(event, "detailAddress", "length", 3),
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={4}>
                                    </GridItem>
                                </GridContainer>
                                <Button color="rose" className={classes.updateProfileButton} onClick={() => this.updateAccountSetting()} disabled={this.state.disableBtn}>
                                    사업자 정보 변경
                                 </Button>
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

const mapStateToProps = (state) => {
    return {
        status: state.authentication.status,
        token: state.authentication.status.token,
        username: state.authentication.status.currentUser
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AccountSetting));
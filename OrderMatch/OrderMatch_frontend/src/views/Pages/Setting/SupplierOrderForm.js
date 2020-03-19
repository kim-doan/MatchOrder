import React, { Component } from "react";
import { connect } from "react-redux";
import MaterialTable from "material-table";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Checkbox from "@material-ui/core/Checkbox";
import Instruction from "components/Instruction/Instruction.js";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

// material-ui icons
import Assignment from "@material-ui/icons/Assignment";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import Person from "@material-ui/icons/Person";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";
import Remove from "@material-ui/icons/Remove";
import Add from "@material-ui/icons/Add";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import SweetAlert from "react-bootstrap-sweetalert";
import SupplierColumn from "components/SupplierColumn/SupplierColumn.js"
import CustomInput from "components/CustomInput/CustomInput.js";

import { supplierFormRequest } from "actions/authentication";

import styles from "assets/jss/material-dashboard-pro-react/views/supplierOrderFormStyle.js";

class SupplierOrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [],
      form_list: [],
      alert: false,
      delAlert: false,
      editModal: false,
      rows: [],
      nowRows: {},
      form_name: '',
      disable_time: ''
    };
  }

  Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });
  handleChange = event => {
    this.setState({ disable_time: event.target.value })
  };
  warningWithConfirmAndCancelMessage = () => {
    this.setState({ alert: true });
  };
  hideAlert = () => {
    this.setState({ alert: false, delAlert: false });
  };
  showDelAlert = () => {
    this.setState({ alert: false, delAlert: true });
  };
  handleToggle = value => {
    const currentIndex = this.state.checked.indexOf(value);
    const newChecked = [...this.state.checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    this.setState({ checked: newChecked });
    console.log(this.state.checked);
  };
  componentDidMount() {
    this.props.supplierFormRequest().then(() => {
      for (var i = 0; i < this.props.status.list.length; i++) {
        if (this.props.status.list[i].disable_time == null) {
          this.props.status.list[i].disable_time = "✔";
        } else {
          this.props.status.list[i].disable_time = "✕";
        }
      }
      this.setState({ form_list: this.props.status.list });
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <GridContainer>
        {this.state.alert === true ? (
          <SweetAlert
            warning
            style={{ display: "block", marginTop: "-200px" }}
            title="정말로 삭제하시겠습니까?"
            onConfirm={() => this.showDelAlert()}
            onCancel={() => this.hideAlert()}
            confirmBtnCssClass={classes.button + " " + classes.success}
            cancelBtnCssClass={classes.button + " " + classes.danger}
            confirmBtnText="네, 삭제합니다."
            cancelBtnText="취소"
            showCancel
          >
            삭제한 데이터는 복구할 수 없습니다.
            <br />
            임시 삭제 데이터는 비활성화 기능을 사용하세요.
          </SweetAlert>
        ) : (
            undefined
          )}
        {this.state.delAlert === true ? (
          <SweetAlert
            success
            style={{ display: "block", marginTop: "-200px" }}
            title="삭제 완료!"
            onConfirm={() => this.hideAlert()}
            onCancel={() => this.hideAlert()}
            confirmBtnCssClass={classes.button + " " + classes.success}
          >
            {this.state.rows.length}개의 데이터를 삭제했습니다.
          </SweetAlert>
        ) : (
            undefined
          )}
        <Dialog
          classes={{
            root: classes.center + " " + classes.modalRoot,
            paper: classes.modal
          }}
          open={this.state.editModal}
          TransitionComponent={this.Transition}
          fullWidth={true}
          maxWidth="sm"
          keepMounted
          onClose={() => this.setState({ editModal: false })}
          aria-labelledby="notice-modal-slide-title"
          aria-describedby="notice-modal-slide-description"
        >
          <DialogTitle
            id="notice-modal-slide-title"
            disableTypography
            className={classes.modalHeader}
          >
            <Button
              justIcon
              className={classes.modalCloseButton}
              key="close"
              aria-label="Close"
              color="transparent"
              onClick={() => this.setState({ editModal: false })}
            >
              <Close className={classes.modalClose} />
            </Button>
            <GridContainer>
            </GridContainer>
          </DialogTitle>
          <DialogContent
            id="notice-modal-slide-description"
            className={classes.modalBody}
          >
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  success={this.state.form_name !== undefined}
                  error={this.state.form_name === undefined}
                  labelText={
                    <span>
                      담당자 이름 <small>(필수)</small>
                    </span>
                  }
                  id="form_name"
                  value={this.state.form_name}
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: event => this.setState({ form_name: event.target.value }),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        className={classes.inputAdornment}
                      >
                      </InputAdornment>
                    )
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
              <FormControlLabel
                        control={
                          <Radio
                            checked={this.state.disable_time === '✔'}
                            onChange={this.handleChange}
                            value="✔"
                            name="사용"
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
                        label="사용"
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
                              checked={this.state.disable_time === '✕'}
                              onChange={this.handleChange}
                              value="✕"
                              name="사용안함"
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
                          label="사용안함"
                        />
                      </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <SupplierColumn></SupplierColumn>
              </GridItem>
            </GridContainer>
          </DialogContent>
          <DialogActions
            className={
              classes.modalFooter + " " + classes.modalFooterCenter
            }
          >
            <Button
              onClick={() => setNoticeModal(false)}
              color="info"
              round
            >
              Sounds Good
                        </Button>
          </DialogActions>
        </Dialog>
        <GridItem xs={12}>
          <MaterialTable
            title="발주 주문서 양식 리스트"
            columns={[
              { title: "양식명", field: "form_name", width: 850 },
              { title: "생성일", field: "create_at" },
              { title: "사용여부", field: "disable_time" }
            ]}
            data={this.state.form_list}
            options={{
              actionsColumnIndex: -1,
              selection: true
            }}
            actions={[
              {
                icon: () => (
                  <Button color="rose" size="sm">
                    수정
                  </Button>
                ),
                position: "row",
                tooltip: "수정",
                onClick: (event, rowData) => this.setState({ editModal: true, nowRows: rowData, form_name: rowData.form_name, disable_time: rowData.disable_time})
              },
              {
                icon: () => (
                  <Button color="danger" size="sm">
                    삭제
                  </Button>
                ),
                position: "row",
                tooltip: "삭제",
                onClick: (event, rowData) => alert("You saved " + rowData.name)
              },
              {
                icon: () => (
                  <Button color="danger">선택삭제</Button>
                ),
                tooltip: "선택삭제",
                onClick: () => this.warningWithConfirmAndCancelMessage()
              },
              {
                icon: () => (
                  <Button color="facebook">양식 추가하기</Button>
                ),
                isFreeAction: true,
                tooltip: "양식 추가",
                onClick: () => this.warningWithConfirmAndCancelMessage()
              }
            ]}
            localization={{
              pagination: {
                labelDisplayedRows: "{from}-{to} / 총 {count} 개"
              },
              toolbar: {
                nRowsSelected: "{0}개 행 선택"
              },
              header: {
                actions: "작업"
              },
              body: {
                emptyDataSourceMessage: "데이터가 없습니다.",
                filterRow: {
                  filterTooltip: "Filter"
                }
              }
            }}
            onSelectionChange={(rows) => this.setState({ rows: rows })}
          />
        </GridItem>
      </GridContainer >
    );
  }
}

const mapStateToProps = state => {
  return {
    status: state.supplierFormList.status,
    column: state.supplierFormList.column
  };
};

const mapDispatchToProps = dispatch => {
  return {
    supplierFormRequest: () => {
      return dispatch(supplierFormRequest());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(SupplierOrderForm));

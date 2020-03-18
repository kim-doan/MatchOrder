import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import MaterialTable from "material-table";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Checkbox from "@material-ui/core/Checkbox";

// material-ui icons
import Assignment from "@material-ui/icons/Assignment";
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

import { supplierFormRequest } from "actions/authentication";

import styles from "assets/jss/material-dashboard-pro-react/views/supplierOrderFormStyle.js";

class SupplierOrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [],
      form_list: [],
      alert: false,
      delAlert: false
    };
  }

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
            Your imaginary file has been deleted.
          </SweetAlert>
        ) : (
          undefined
        )}
        <GridItem xs={12}>
          <MaterialTable
            title="발주 주문서 양식 리스트"
            columns={[
              { title: "양식명", field: "form_name", width: 900 },
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
                onClick: (event, rowData) => alert("You saved " + rowData.name)
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
                    <Button color="danger">일괄삭제</Button>
                ),
                tooltip: "일괄삭제",
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
            onSelectionChange={(rows) => console.log(rows)}
          />
        </GridItem>
      </GridContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    status: state.supplierFormList.status
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

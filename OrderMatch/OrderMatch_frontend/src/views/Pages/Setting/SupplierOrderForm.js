import React, { Component } from "react";
import { connect } from 'react-redux';
import axios from 'axios';
import MaterialTable from 'material-table';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button"

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

import { supplierFormRequest } from 'actions/authentication'

import styles from "assets/jss/material-dashboard-pro-react/views/supplierOrderFormStyle.js";

class SupplierOrderForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: [],
            form_list: [],
        }
    }
    handleToggle = value => {
        const currentIndex = this.state.checked.indexOf(value);
        const newChecked = [...this.state.checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        this.setState({ checked: newChecked })
        console.log(this.state.checked)
    };
    componentDidMount() {
        this.props.supplierFormRequest().then(
             () => {
            for(var i =0; i<this.props.status.list.length;i++) {
                if(this.props.status.list[i].disable_time == null) {
                    this.props.status.list[i].disable_time = "✔"
                } else {
                    this.props.status.list[i].disable_time = "✕"
                }
            }
            this.setState({form_list: this.props.status.list});
        })
    }
    render() {
        const { classes } = this.props;
        return (
            <GridContainer>
                <GridItem xs={12}>
                    <MaterialTable
                        title="발주 주문서 양식 리스트"
                        columns={[
                            { title: '양식명', field: 'form_name', width: 900},
                            { title: '생성일', field: 'create_at'},
                            { title: '사용여부', field: 'disable_time'},
                        ]}
                        data={this.state.form_list}
                        options={{
                            actionsColumnIndex: -1,                        
                            selection: true
                        }}
                        actions={[
                            {
                              icon: () => <Button>hi</Button>,
                              position: 'row',
                              tooltip: 'Save User',
                              onClick: (event, rowData) => alert("You saved " + rowData.name)
                            }
                          ]}
                    />
                </GridItem>
            </GridContainer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.supplierFormList.status
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        supplierFormRequest: () => {
            return dispatch(supplierFormRequest());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SupplierOrderForm));
import React, { Component } from "react";
import { connect } from "react-redux";
import MaterialTable from "material-table";
// react component for creating dynamic tables
import ReactTable from "react-table";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Assignment from "@material-ui/icons/Assignment";
import Dvr from "@material-ui/icons/Dvr";
import Favorite from "@material-ui/icons/Favorite";
import Close from "@material-ui/icons/Close";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardIcon from "components/Card/CardIcon.js";
import CardHeader from "components/Card/CardHeader.js";

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';

import styles from "assets/jss/material-dashboard-pro-react/views/addShipCostManageStyle.js";

class AddShipCostManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                { title: '우편번호', field: 'zipcode' },
                { title: '시/도', field: 'sido' },
                { title: '시/군/구', field: 'sigungu' },
                { title: '읍/면/리', field: 'eupmyeonri' },
                { title: '권역 및 배송비', field: 'areaShipCost' },
            ],
            data: [
                // { zipcode: '11111', sido: '인천광역시', sigungu: '강화군', eupmyeonri: '삼선면', areaShipCost: "기타지역" }
            ]
        };
    }
    render() {
        const { classes } = this.props;
        return (
            <GridContainer>
                <GridItem xs={12}>
                    <Card>
                        <CardHeader color="primary" icon>
                            <CardIcon color="primary">
                                <Assignment />
                            </CardIcon>
                            <h4 className={classes.cardIconTitle}>도서/산간 추가 배송비</h4>
                        </CardHeader>
                        <CardBody>
                            <MaterialTable
                                title="신주소 ( 도로명 주소 )"
                                columns={this.state.columns}
                                data={this.state.data}
                                editable={{
                                    onRowAdd: newData =>
                                        new Promise((resolve, reject) => {
                                            setTimeout(() => {
                                                {
                                                    const tempData = JSON.parse(JSON.stringify(this.state.data));
                                                    tempData.push(newData);
                                                    this.setState({ data: tempData }, () => resolve());
                                                    //this.setState({ data: [{ zipcode: '11111', sido: '인천광역시', sigungu: '강화군', eupmyeonri: '삼선면', areaShipCost: "기타지역" }] })
                                                }
                                                resolve()
                                            }, 1000)
                                        }),
                                    onRowUpdate: (newData, oldData) =>
                                        new Promise((resolve, reject) => {
                                            setTimeout(() => {
                                                {
                                                    const data = this.state.data;
                                                    const index = data.indexOf(oldData);
                                                    data[index] = newData;
                                                    this.setState({ data }, () => resolve());
                                                }
                                                resolve()
                                            }, 1000)
                                        }),
                                    onRowDelete: oldData =>
                                        new Promise((resolve, reject) => {
                                            setTimeout(() => {
                                                {
                                                    let data = this.state.data;
                                                    const index = data.indexOf(oldData);
                                                    const tempData = JSON.parse(JSON.stringify(data));
                                                    tempData.splice(index, 1);
                                                    this.setState({ data: tempData }, () => resolve());
                                                }
                                                resolve()
                                            }, 1000)
                                        }),
                                }}
                            />
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        );
    }

}
const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(AddShipCostManage));
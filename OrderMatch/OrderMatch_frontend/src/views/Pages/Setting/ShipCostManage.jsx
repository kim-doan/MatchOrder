import React from "react";
import { connect } from "react-redux";
import MaterialTable from "material-table";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import Assignment from "@material-ui/icons/Assignment";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-dashboard-pro-react/views/shipCostManageStyle.js";

class ShipCostManage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { classes } = this.props;
        return (
            <Card>
                <CardHeader color="primary" icon>
                    <CardIcon color="primary">
                        <Assignment />
                    </CardIcon>
                    <h4 className={classes.cardIconTitle}>배송비 관리</h4>
                </CardHeader>
                <CardBody>
                    <MaterialTable
                        title=""
                        columns={[
                            { title: 'Name', field: 'name' },
                            { title: 'Surname', field: 'surname' },
                            { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
                            {
                                title: 'Birth Place',
                                field: 'birthCity',
                                lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
                            },
                        ]}
                        data={[
                            { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                            { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                        ]}
                        options={{
                            search: true
                        }}
                    />
                </CardBody>
            </Card>
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
)(withStyles(styles)(ShipCostManage));
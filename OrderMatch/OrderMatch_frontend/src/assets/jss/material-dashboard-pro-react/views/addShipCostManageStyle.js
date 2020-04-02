import { makeStyles } from '@material-ui/core/styles';

import { dataTable } from "variables/general.js";

import { cardTitle } from "assets/jss/material-dashboard-pro-react.js";
const addShipCostManageStyle = {
    cardIconTitle: {
        ...cardTitle,
        marginTop: "15px",
        marginBottom: "0px"
    },
    root: {
        flexGrow: 1,
        maxWidth: 500,
    },
};

export default addShipCostManageStyle;

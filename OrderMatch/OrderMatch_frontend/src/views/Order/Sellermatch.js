import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import PriorityHigh from "@material-ui/icons/PriorityHigh";
import Check from "@material-ui/icons/Check";
import Warning from "@material-ui/icons/Warning";
import Close from "@material-ui/icons/Close";
import Favorite from "@material-ui/icons/Favorite";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Pagination from "components/Pagination/Pagination.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import styles from "assets/jss/material-dashboard-pro-react/views/buttonsStyle.js";

const useStyles = makeStyles(styles);

export default function Buttons() {
  const classes = useStyles();
  return (
    <Card>
      <CardBody>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <div className={classes.cardHeader}>
              <h4 className={classes.cardTitle}>&nbsp;</h4>
            </div>
           </GridItem>
        </GridContainer>
      </CardBody>
    </Card>
  );
}

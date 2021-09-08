import React, { useState } from "react";
import classNames from "classnames";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { IRootState } from "store/reducers";
import { changeTheme } from "store/actions/theme"
import { ChangeThemePayload } from "store/actions/payload-types";
import useMediaQuery from '@material-ui/core/useMediaQuery';
// @material-ui/icons
import bidmaxLanding from "assets/img/bidmax-landing.png"
import bidmaxAdmin from "assets/img/bidmax-admin.png"
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: "100%",
    fontFamily: "'Hina Mincho', serif;",
    fontSize: 20
  },
  headerImg: {
    width: "80%",
    margin: "auto"
  },
  imgContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 20
  },
  text: {
    fontFamily: "'Hina Mincho', serif;",
    fontSize: 20,
    marginBottom: 10
  },
}))



interface IState {
  theme: string;
  color: string;
}

interface IDispatch {
  changeTheme: (theme: ChangeThemePayload) => {}
}


interface PteMagicProps {
  children: React.ReactNode
}

type Props = PteMagicProps & IState & IDispatch

const BidMax: React.FC<Props> = (props) => {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width:768px)');

  return (
    <div className={classes.root}>
      <div className={classes.imgContainer}>
        <img className={classes.headerImg} src={bidmaxLanding} alt="bidmax-landing" />
      </div>
      <div>
        Link to production <a href="https://max2bid.com/" target="_blank">here</a>
      </div>
      <div>
        <h3>DESCRIPTION</h3>
        <div className={classes.text}>
          <CheckIcon />A bidding service and E-commerce platform for construction machines.
        </div>
        <div className={classes.text}>
          <CheckIcon />This project includes both client platform and system admin for managers.
        </div>
      </div>

      <div className={classes.imgContainer}>
        <img className={classes.headerImg} src={bidmaxAdmin} alt="bidmax-admin" />
      </div>

      <div>
        <h3>ROLE</h3>
        <div className={classes.text}>
          <CheckIcon />Fullstack developer in a team of 5, participated in both platforms.
        </div>
      </div>

      <div>
        <h3>TASKS</h3>
        <div className={classes.text}>
          <CheckIcon /> Designed tables (PostGreSQL), created API endpoints for CRUD operations of order, transaction and product management
        </div>
        <div className={classes.text}>
          <CheckIcon /> Built layouts and reuseable components for client web app and system admin.
        </div>
        <div className={classes.text}>
          <CheckIcon /> Review teammates' code quality and merge to pre-deploy branch; manage workflow with JIRA
        </div>
      </div>

      <div>
        <h3>TECHNOLOGY</h3>
        <div className={classes.text}>
          <CheckIcon /> NextJS, TypeScript, Redux, Webpack, Text Editor
        </div>
        <div className={classes.text}>
          <CheckIcon /> Spring Boot
        </div>
        <div className={classes.text}>
          <CheckIcon /> PostGreSQL
        </div>
      </div>

    </div>
  )
}

const mapStateToProps = ({ theme }: IRootState) => ({
  theme: theme.theme,
  color: theme.color
})

const mapDispatchToProps = {
  changeTheme
}

export default connect(mapStateToProps, mapDispatchToProps)(BidMax);
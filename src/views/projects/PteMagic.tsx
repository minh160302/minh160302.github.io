import React, { useState } from "react";
import classNames from "classnames";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { IRootState } from "store/reducers";
import { changeTheme } from "store/actions/theme"
import { ChangeThemePayload } from "store/actions/payload-types";
import useMediaQuery from '@material-ui/core/useMediaQuery';
// @material-ui/icons
import pteLanding from "assets/img/pte-2.png"
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

const PteMagic: React.FC<Props> = (props) => {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width:768px)');

  return (
    <div className={classes.root}>
      <div className={classes.imgContainer}>
        <img className={classes.headerImg} src={pteLanding} alt="pte-landing" />
      </div>
      <div>
        Link to production <a href="https://ptemagicpractice.com/" target="_blank">here</a>
      </div>
      <div>
        <h3>DESCRIPTION</h3>
        <div className={classes.text}>
          <CheckIcon /> PTE Magic is an online Learning system with integration to AI (NLP). From the project starts until May/2021,
          it already reached 16,000+ users with average 600-1000 users online per day.
        </div>
      </div>

      <div>
        <h3>ROLE</h3>
        <div className={classes.text}>
          <CheckIcon />Fullstack developer in a team of 5
        </div>
      </div>

      <div>
        <h3>TASKS</h3>
        <div className={classes.text}>
          <CheckIcon /> Configured codebase and set up Redux, Redux Saga
        </div>
        <div className={classes.text}>
          <CheckIcon /> Created API endpoints with Java Spring Boot and PostGreSQL for blogging service
        </div>
        <div className={classes.text}>
          <CheckIcon /> Dockerize backend application (dev version);
          deploy web app (dev version) on EC2 with NGINX reverse proxy
        </div>
        <div className={classes.text}>
          <CheckIcon /> Review teammates' code quality and merge to pre-deploy branch; manage workflow with JIRA
        </div>
      </div>

      <div>
        <h3>TECHNOLOGY</h3>
        <div className={classes.text}>
          <CheckIcon />NextJS, Redux, Redux Saga, Webpack
        </div>
        <div className={classes.text}>
          <CheckIcon />Spring Boot
        </div>
        <div className={classes.text}>
          <CheckIcon />PostGreSQL
        </div>
        <div className={classes.text}>
          <CheckIcon />EC2
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

export default connect(mapStateToProps, mapDispatchToProps)(PteMagic);
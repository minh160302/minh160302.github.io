import React, { useState } from "react";
import classNames from "classnames";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { IRootState } from "store/reducers";
import { changeTheme } from "store/actions/theme"
import { changeRoute } from "store/actions/route";
import { ChangeThemePayload } from "store/actions/payload-types";
import useMediaQuery from '@material-ui/core/useMediaQuery';
// @material-ui/icons
import profileImg from "assets/img/jisoo_1.png"
import CheckIcon from '@material-ui/icons/Check';
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom"

const drawerWidth = 250;

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: "100%",
    fontFamily: "'Hina Mincho', serif;",
    fontSize: 20
  },
  rowWrapper: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    columnGap: 30,
    [theme.breakpoints.down('sm')]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  img: {
    width: "30%",
    height: "auto",
    borderRadius: "8px",
    [theme.breakpoints.down('sm')]: {
      marginBottom: 20,
      width: "80%",
    },
  },
  aboutWrapper: {
    fontFamily: "'Hina Mincho', serif;",
    width: "100%",
  },
  greetTitle: {
    marginTop: 0,
    marginBottom: 0
  },
  content: {

  },
  lineWrapper: {
    display: "flex",
    alignItems: "flex-start",
    columnGap: 20
  },
  connectBtn: {
    marginTop: 20,
    padding: 15,
    background: "black",
    color: "#ffffff",
    fontFamily: "'Hina Mincho', serif;",
    fontSize: "22",
    borderRadius: 8,
    "&:hover": {
      background: "black",
      color: "#ffffff",
      opacity: 0.7
    },
  },
  infoWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20
  },

}))



interface IState {
  theme: string;
  color: string;
}

interface IDispatch {
  changeTheme: (theme: ChangeThemePayload) => {};
  changeRoute: (route: string) => {}
}


interface AboutProps {
  children: React.ReactNode
}

type Props = AboutProps & IState & IDispatch

const About: React.FC<Props> = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const matches = useMediaQuery('(max-width:768px)');

  const textContents = [
    "Hanoian",
    "Currently a sophomore major in Computer Science at Oberlin College, Ohio",
    "I'm passionate about programming and willing to challenge myself with new technology",
    "Physics & Film lover"
  ]
  return (
    <div className={classes.root}>
      <div className={classes.rowWrapper}>
        <img src={profileImg} alt="profile image" className={classes.img} />
        <div className={classes.aboutWrapper}>
          <div className={classes.infoWrapper}>
            <h2 className={classes.greetTitle}>Hi, I'm Minh</h2>
            <Button className={classes.connectBtn} onClick={() => {
              // change redux state to update sidebar
              props.changeRoute("/contact")
              history.push("/contact")
            }}>Connect</Button>
          </div>
          <div className={classes.content}>
            {textContents.map((text, key) => <div className={classes.lineWrapper} key={key}>
              <CheckIcon />
              {text}
            </div>)}
          </div>
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
  changeTheme,
  changeRoute
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
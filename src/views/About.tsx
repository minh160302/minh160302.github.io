import React, { useState } from "react";
import classNames from "classnames";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { IRootState } from "store/reducers";
import { changeTheme } from "store/actions/theme"
import { ChangeThemePayload } from "store/actions/payload-types";
import useMediaQuery from '@material-ui/core/useMediaQuery';
// @material-ui/icons
import profileImg from "assets/img/jisoo_1.png"
import CheckIcon from '@material-ui/icons/Check';

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
    columnGap: 30
  },
  img: {
    width: "30%",
    height: "auto",
    borderRadius: "8px"
  },
  aboutWrapper: {
    fontFamily: "'Hina Mincho', serif;",
    width: "100%",
  },
  greetTitle: {
    marginTop: 0
  },
  content: {

  },
  lineWrapper: {
    display: "flex",
    alignItems: "flex-start",
    columnGap: 20
  },
}))



interface IState {
  theme: string;
  color: string;
}

interface IDispatch {
  changeTheme: (theme: ChangeThemePayload) => {}
}


interface AboutProps {
  children: React.ReactNode
}

type Props = AboutProps & IState & IDispatch

const About: React.FC<Props> = (props) => {
  const classes = useStyles();
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
          <h2 className={classes.greetTitle}>Hi, I'm Minh</h2>
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
  changeTheme
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
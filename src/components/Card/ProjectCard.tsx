import React, { useState } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { IRootState } from 'store/reducers';
import { changeTheme } from "store/actions/theme"
import { ChangeThemePayload } from 'store/actions/payload-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from 'components/Button/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { useHistory } from "react-router-dom";

const drawerWidth = 250;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: 15,
      fontFamily: "'Hina Mincho', serif;",
      fontSize: 20,
      fontWeight: "normal",
      marginBottom: 20,
      width: 320,
      "&:hover": {
        transition: "all 0.2s ease-out;",
        boxShadow: "0px 2px 8px 1px rgba(38, 38, 38, 0.5);",
        // top: -4,
        // border: "1px solid #cccccc;",
        backgroundColor: "white",
      },
      [theme.breakpoints.down('md')]: {
        width: "80%",
        margin: "auto",
        marginBottom: 20,
      },
    },
    img: {
      height: "auto",
      width: "100%"
    },
    title: {
      fontFamily: "'Hina Mincho', serif;",
      fontSize: 26,
      fontWeight: 600
    },
    description: {
      fontFamily: "'Hina Mincho', serif;",
      fontSize: 20,
      height: 60
    },
    technology: {
      fontFamily: "'Hina Mincho', serif;",
      fontSize: 20,
      height: 90
    },
    contentRoot: {
      "&:hover": {

      }
    },
    button: {
      color: "black"
    },
    actionsRoots: {
      padding: 15
    },

  }),
);

interface IState {
  theme: string;
  color: string;
}

interface IDispatch {
  changeTheme: (theme: ChangeThemePayload) => {}
}

interface ProjectCardProps {
  name: string;
  description: string;
  link: string;
  imageSrc: any;
  githubUrl?: string;
  technology: string;
}

type Props = IState & IDispatch & ProjectCardProps

const ProjectCard: React.FC<Props> = (props) => {
  const classes = useStyles();
  const history = useHistory();


  const handleRouterGithub = (link) => {
    window.open(link, "_blank")
  }

  return (
    <Card className={classes.root}>
      <div>
        <img src={props.imageSrc} className={classes.img} />
        <CardContent>
          <Typography className={classes.title} gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
          <Typography className={classes.technology} variant="body2" color="textSecondary" component="p">
            <strong>Technology</strong>: {props.technology}
          </Typography>
        </CardContent>
      </div>
      <CardActions classes={{ root: classes.actionsRoots }}>
        <IconButton onClick={() => {
          // handleRouterGithub("https://ptemagicpractice.com/")
          console.log(props.githubUrl)
        }}>
          <GitHubIcon />
        </IconButton>
        <IconButton onClick={() => {
          history.push(props.link)
        }}>
          <VisibilityIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}


const mapStateToProps = ({ theme }: IRootState) => ({
  theme: theme.theme,
  color: theme.color
})

const mapDispatchToProps = {
  changeTheme
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCard);
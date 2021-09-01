import React, { useState } from "react";
import classNames from "classnames";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import SearchAppBar from "components/AppBar/AppBar";
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import { useScrollTrigger } from "@material-ui/core";
import { connect } from "react-redux";
import { IRootState } from "store/reducers";
import { changeTheme } from "store/actions/theme"
import { changeRoute } from "store/actions/route";
import { ChangeThemePayload } from "store/actions/payload-types";
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Redirect, Route, useHistory } from "react-router-dom"
// @material-ui/icons
import DescriptionIcon from '@material-ui/icons/Description';
import CodeIcon from '@material-ui/icons/Code';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';
import ColorLensIcon from '@material-ui/icons/ColorLens';

import routes from "routes";
import { useEffect } from "react";

const drawerWidth = 250;

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: "100%",
    height: "auto",
    padding: 0,
    margin: 0,
    top: 0,
    left: 0,
    right: 0,
    fontFamily: "'Hina Mincho', serif;",
    fontSize: 20
  },
  scrollRoot: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  bodyWrapper: {
    paddingTop: 70,
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: `calc(100% - 0px) !important`,
    marginLeft: 0,
  },
  bodyWrapperShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    // marginLeft: 0,
    width: `calc(100% - ${drawerWidth}px) !important`,
    marginLeft: drawerWidth,
  },
  main: {
    maxWidth: 1100,
    margin: "auto",
    padding: 30,
    overflowX: "hidden"
  },
  // drawer
  list: {
    width: 250,
    fontFamily: "'Hina Mincho', serif;",
    fontSize: 20,
  },
  drawerHeader: {
    fontFamily: "'Hina Mincho', serif;",
    fontSize: 28,
    fontWeight: 700,
    textAlign: 'center',
    padding: "20px 0px"
  },
  drawerText: {
    fontFamily: "'Hina Mincho', serif;",
    fontSize: 20,
    fontWeight: 500
  },
  listItem: {
    color: "black",
    background: "white"
  },
  active: {
    color: "#ffffff !important",
    background: "#00000057 !important"
  },
  iconActive: {
    fill: "#ffffff"
  },
}))

interface ScrollProps {
  window?: () => Window;
  children: React.ReactElement;
}

const ScrollTop: React.FC<ScrollProps> = (props) => {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector('#page-root');
    // console.log(anchor)

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.scrollRoot}>
        {children}
      </div>
    </Zoom>
  );
}


interface IState {
  theme: string;
  color: string;
  route: string;
}

interface IDispatch {
  changeTheme: (theme: ChangeThemePayload) => {};
  changeRoute: (route: string) => {};
}


interface LayoutProps {
  children: React.ReactNode
}

type Props = LayoutProps & ScrollProps & IState & IDispatch

const Layout: React.FC<Props> = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const matches = useMediaQuery('(max-width:768px)');
  const [active, setActive] = useState("/")

  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    setOpenDrawer(!matches)
  }, [matches])

  useEffect(() => {
    setActive(history.location.pathname)
    props.changeRoute(history.location.pathname)
  }, [history.location.pathname])

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event && event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setOpenDrawer(open)
  };

  const handleRouter = (route) => {
    setActive(route)
    props.changeRoute(history.location.pathname)
    history.push(route)
  }

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      // onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Typography className={classes.drawerHeader} style={{ color: props.theme }}>Portfolio</Typography>
      <Divider />
      <List>
        {routes.map((text, index) => {
          return (
            <ListItem
              button
              key={text.name}
              className={classNames({
                [classes.listItem]: true,
                [classes.active]: text.path === props.route
              })}
              onClick={() => handleRouter(text.path)}
            >
              <ListItemIcon>
                {<text.icon className={classNames({
                  [classes.iconActive]: text.path === props.route
                })} />}
              </ListItemIcon>
              <Typography className={classes.drawerText}
              >{text.name}</Typography>
            </ListItem>
          )
        })}
      </List>
    </div>
  );

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      return (
        <Route
          path={prop.path}
          component={prop.components}
          key={key}
        />
      );
    });
  }

  return (
    <div id="page-root" className={classes.root}>
      <SearchAppBar openDrawer={openDrawer} toggleDrawer={toggleDrawer} />
      <Drawer
        anchor="left"
        open={openDrawer}
        variant={matches === true ? "temporary" : "persistent"}
        onClose={toggleDrawer(false)}
      // onOpen={toggleDrawer(true)}
      >
        {list()}
      </Drawer>
      <div className={classNames(classes.bodyWrapper, {
        [classes.bodyWrapperShift]: openDrawer && !matches,
      })}>
        <div className={classes.main}>
          {/* {props.children} */}
          {getRoutes(routes)}
          {
            history.location.pathname === "/" && <Redirect from="/" to="/about" />
          }
        </div>
      </div>

      <ScrollTop {...props}>
        <Fab style={{ background: props.theme }} size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon style={{ color: props.color }} />
        </Fab>
      </ScrollTop>
    </div>
  )
}

const mapStateToProps = ({ theme, route }: IRootState) => ({
  theme: theme.theme,
  color: theme.color,
  route: route.route
})

const mapDispatchToProps = {
  changeTheme,
  changeRoute
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
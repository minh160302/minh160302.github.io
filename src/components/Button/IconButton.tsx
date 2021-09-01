import React, { useState } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 41,
      width: 41,
      minWidth: 41,
      borderRadius: "50%",
      background: "#ffffff",
      color: "black",
      boxShadow: "0px 2px 6px 1px rgba(38, 38, 38, 0.2)",
      "&:focus": {
        opacity: 0.8,
        backgroundColor: "rgba(0, 0, 0, 0) !important"
      },
    }
  },
  ));

interface IconButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const IconButton: React.FC<IconButtonProps> = (props) => {
  const classes = useStyles();
  return (
    <Button classes={{
      root: classes.root,
    }}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
}


export default IconButton;
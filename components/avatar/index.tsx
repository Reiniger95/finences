import Avatar from '@material-ui/core/Avatar';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1)
      }
    }
  })
);

export default function ImageAvatars({ nome }) {
  const classes = useStyles();

  return (
    <div>
      {' '}
      <div className={classes.root}>
        <Avatar alt={nome} src="/static/images/avatar/1.jpg" />
        <Avatar alt="e" src="/static/images/avatar/2.jpg" />
        <Avatar
          alt="Rodrigo
      "
          src="/static/images/avatar/3.jpg"
        />{' '}
      </div>
    </div>
  );
}

import React from 'react'
import classes from './index.module.css'

export const HeaderV3 = () => {
  return (
    <div className={classes.headerBackground}>
      <div className={classes.headerPicture}>
        <div className={classes.headerLogo} />
        <div className={classes.headerSocial} />
        <div className={classes.headerPhones} />
      </div>
    </div>
  )
}

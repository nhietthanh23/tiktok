import React from 'react'
import clsx from 'clsx'
import styles from './Button.module.scss'

function Button(primary) {

    const classes = clsx(styles.btn, {
        [styles.primary]:primary
    })

  return (
    <div style={{padding:50}}>
        <button className={classes}>Click me!</button>
    </div>
  )
}
export default Button
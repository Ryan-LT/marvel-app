import React from 'react'
import withStyle from 'react-jss'

import styles from './styles'

const footer = ({ classes, nextPageClicked, prevPageClicked }) => (
    <div className={classes.root}>
        <div className={classes.btGroup}>
            <button onClick={() => prevPageClicked()}>PREVIOUS</button>
        </div>
        <div className={classes.btGroup}>
            <button onClick={() => nextPageClicked()}>NEXT</button>
        </div>
    </div>
)

export default withStyle(styles)(footer)
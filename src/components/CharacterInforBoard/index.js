import React from 'react'
import withStyle from 'react-jss'

import styles from './styles'

const characterInforBoard = ({ classes, name, description, imageUrl, id }) => (
    <div className={classes.root}>
        <div className={classes.imgWraper}>
            <img className={classes.img} src={imageUrl} alt='character' />
        </div>
        <div className={classes.content}>
            <div className={classes.characterName}>
                <h3>{name.toUpperCase()}</h3>
            </div>
            <div>
                {description ? <p className={classes.description}>{description}</p> : <p className={classes.description}>--N/A--</p>}
            </div>
            <div><a href={`/${id}`}><button className={classes.BtDetail}>Detail</button></a></div>
        </div>
    </div>
);

export default withStyle(styles)(characterInforBoard)
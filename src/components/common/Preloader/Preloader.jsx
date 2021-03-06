import React from 'react';
import classes from './Preloader.module.css';
import loadIcon from '../../../assets/icons/loading.svg'

const Preloader = (props) => {
    return (props.isFetching ? <div className={classes.loadingIcon}>
        <img src={loadIcon} style={{ display: 'flex', justifyContent: 'center', width: '100px', height: '100px' }} alt='load icon'></img>
    </div> : null)
}

export default Preloader;
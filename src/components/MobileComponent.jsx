import React from 'react';
import styles from './MobileComponent.module.css';
import ResponsiveDrawer from './Bar';
import background from '../assets/images/background.svg';
import Model from './Model'

export default function MobileComponent() {
    return (
        <div>
            <ResponsiveDrawer />
            <div className={styles.main}>
                <Model />
            </div>
        </div>
    )
}